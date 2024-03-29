import React from 'react'
import styles from './sort_news.module.scss'
import NewsEl from './newsEl'

// let NewsContent = (props) => {
//             if(props.filterState.items.length === 0) {
//                return <div className={styles.antiBlock}>По указанным фильтрам ничего не найдено</div>
//             }  else {
//                 return (
//                 <section>
//                     {props.filterState.items.map(item => (
//                         <NewsEl
//                         key={item.id}
//                         date={item.date_str}
//                         title={item.title}
//                         cover={item.cover.data.url}
//                         items={item}
//                         location={'/news/' + item.id}
//                         shows={item.shows.data}
//                         itemsMiniNews={props.itemsMiniNews}
//                         />
//                     ))}
//                 </section>

//                 )
//         }
//     }

let NewsContent = (props) => {
  if (props.filterState.items.length === 0) {
    return (
      <div className={styles.antibBlockBlock}>
        <div className={styles.antiBlock}>
          По указанным фильтрам ничего не найдено
        </div>
      </div>
    )
  } else if (
    props.filterState.itemsCal.length === 0 &&
    props.filterState.checkFilter != 0
  ) {
    return (
      <section className={styles.newsList}>
        <div className={styles.antibBlockBlock}>
          <div className={styles.antiBlock}>В выбранный день новостей нет.</div>
        </div>
        <div className={styles.antibBlockBlock_2}>
          <div className={styles.antiBlock_2}>
            Ближайшие к вашей дате новости
          </div>
        </div>
        {props.filterState.items.map((item) => (
          <NewsEl
            key={item.id}
            date={item.date_str}
            title={item.title}
            cover={item.cover.url}
            items={item}
            location={'/news/' + item.id}
            shows={item.shows.data}
            itemsMiniNews={props.itemsMiniNews}
          />
        ))}
      </section>
    )
  } else if (
    props.filterState.checkFilter === 1 &&
    props.filterState.items.length != 0
  ) {
    return (
      <section className={styles.newsList}>
        {props.filterState.itemsCal.map((item) => (
          <NewsEl
            key={item.id}
            date={item.date_str}
            title={item.title}
            cover={item.cover.url}
            items={item}
            location={'/news/' + item.id}
            shows={item.shows.data}
            itemsMiniNews={props.itemsMiniNews}
          />
        ))}
      </section>
    )
  } else {
    return (
      <section className={styles.newsList}>
        {props.filterState.items.map((item) => (
          <NewsEl
            key={item.id}
            date={item.date_str}
            title={item.title}
            cover={item.cover.url}
            items={item}
            location={'/news/' + item.id}
            shows={item.shows.data}
            itemsMiniNews={props.itemsMiniNews}
          />
        ))}
      </section>
    )
  }
}

export default NewsContent
