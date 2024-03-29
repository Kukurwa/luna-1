import React from 'react'
import { api } from '../api/index'
import { uniqueBy } from '../assets/utils/usable-function'

import { Slider, Calendar, News, Partners } from '../components/mainPage'
import Loader from '../components/loader'

export function Home() {
  const [itemsSlider, setItemsSlider] = React.useState([])
  const [items, setItems] = React.useState([])
  const [itemsNews, setItemsNews] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    Promise.all([api.exportShows(), api.exportArticles()])
      .then((values) => {
        setItems(values[0])
        setItemsSlider(
          uniqueBy(values[0], (o1, o2) => o1.play.id === o2.play.id)
        )
        setItemsNews(values[1])
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  const [firstDate, setFirstDate] = React.useState(
    new Date(new Date().toISOString().slice(0, 10))
  )

  return (
    <div>
      <section>
        <Slider
          firstDate={firstDate}
          items={itemsSlider}
          setItemsSlider={setItemsSlider}
        />
      </section>
      <main>
        <section>
          {isLoading ? (
            <Loader />
          ) : (
            <Calendar setFirstDate={setFirstDate} items={items} />
          )}
        </section>
        <section>
          <News itemsNews={itemsNews} setItemsNews={setItemsNews} />
        </section>
        <Partners />
      </main>
    </div>
  )
}
