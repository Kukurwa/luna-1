import React from 'react'
import styles from './sortposter.module.scss'
import searchImg from './img/search.svg'
import calendarImg from './img/calendar.svg'
import arrow from './img/arrow.svg'

const MONTHS = [
  '',
  'ЯНВАРЬ',
  'ФЕВРАЛЬ',
  'МАРТ',
  'АПРЕЛЬ',
  'МАЙ',
  'ИЮНЬ',
  'ИЮЛЬ',
  'АВГУСТ',
  'СЕНТЯБРЬ',
  'ОКТЯБРЬ',
  'НОЯБРЬ',
  'ДЕКАБРЬ',
]

// Строим кнопки на этот и 4 месяца вперёд
let a = new Date()
let rez = []

for (let i = 4; i >= 0; i--) {
  rez.push(MONTHS[((a.getMonth() - i) % 12) + 1])
}
//
const SortNews = (props) => {
  const [open, openClosedCalendar] = React.useState(false)
  const [openSel, openClosedCalendarSel] = React.useState(false)
  const [nameSel, cahngeNameSel] = React.useState(props.filterState)

  // Получаем количество дней в текущем месяце и делаем из них массив
  let daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
  }
  let month

  if (props.m === '01') {
    month = '0'
  } else if (props.m === '02') {
    month = '1'
  } else if (props.m === '03') {
    month = '2'
  } else if (props.m === '04') {
    month = '3'
  } else if (props.m === '05') {
    month = '4'
  } else if (props.m === '06') {
    month = '5'
  } else if (props.m === '07') {
    month = '6'
  } else if (props.m === '08') {
    month = '7'
  } else if (props.m === '09') {
    month = '8'
  } else if (props.m === '10') {
    month = '9'
  } else if (props.m === '11') {
    month = '10'
  } else if (props.m === '12') {
    month = '11'
  }

  let d = props.d

  if (props.d === '01') {
    d = 1
  } else if (props.d === '02') {
    d = 2
  } else if (props.d === '03') {
    d = 3
  } else if (props.d === '04') {
    d = 4
  } else if (props.d === '05') {
    d = 5
  } else if (props.d === '06') {
    d = 6
  } else if (props.d === '07') {
    d = 7
  } else if (props.d === '08') {
    d = 8
  } else if (props.d === '09') {
    d = 9
  }

  let days_for_month = daysInMonth(props.m, props.y)
  let daysAll = []

  let a = new Date(props.y, month)
  if (a.getDay() === 0) {
    for (let j = 1; j < 7; j++) {
      daysAll.push('')
    }
  } else {
    for (let i = 1; i < a.getDay(); i++) {
      daysAll.push('')
    }
  }

  for (let i = 1; i <= days_for_month; i++) {
    daysAll.push(i)
  }

  let searck = (value) => {
    props.search(value)
  }

  const moths = rez.map((item) => (
    <div
      className={
        props.filterState === item ? styles.moth_el_active : styles.moth_el
      }
      key={item}
      onClick={() => {
        props.filterStateUpdate(item)
      }}
    >
      {item}
    </div>
  ))

  let daysButton = []

  for (let i = 0; i < daysAll.length; i++) {
    if (daysAll[i] === '') {
      daysButton.push(
        <div
          key={i}
          className={
            props.dayKal === daysAll[i]
              ? styles.calendarItemAct
              : styles.calendarItem
          }
        >
          {daysAll[i]}
        </div>
      )
    } else {
      daysButton.push(
        <div
          key={i}
          onClick={() => {
            props.calendar(daysAll[i])
            console.log('props: ' + props.d)
          }}
          className={
            d === daysAll[i] ? styles.calendarItemAct : styles.calendarItem
          }
        >
          {daysAll[i]}
        </div>
      )
    }
  }

  return (
    <section className={styles.sortHeaderSection}>
      <div className={styles.sortHeader}>
        <h1>НОВОСТИ ТЕАТРА</h1>
        <div className={styles.sortBlockMain}>
          <div className={styles.sort}>
            <div className={styles.sortBlock}>
              <div className={styles.moth}>{moths}</div>
            </div>
            <div className={styles.search}>
              <img src={searchImg} alt='search' />
              <input
                id='search_el'
                placeholder='ПОИСК ПО НАЗВАНИЮ'
                onChange={() => {
                  searck(document.getElementById('search_el').value)
                }}
              />
            </div>
          </div>
          <div className={styles.calendar}>
            <img
              src={calendarImg}
              alt='calendar'
              onClick={() => {
                openClosedCalendar(!open)
              }}
            />
            <div className={open ? styles.calendarComp : styles.calendarBodyNo}>
              <div className={styles.mothSelect}>
                <div
                  className={styles.thisMonth}
                  onClick={() => {
                    openClosedCalendarSel(!openSel)
                  }}
                >
                  НОЯБРЬ
                  <span>
                    <img src={arrow} alt='' />
                  </span>
                </div>
                <div
                  className={
                    openSel ? styles.selectMoth : styles.selectMothNoActive
                  }
                >
                  <p>ЯНВАРЬ</p>
                  <p>ФЕВРАЛЬ</p>
                  <p>МАРТ</p>
                  <p>АПРЕЛЬ</p>
                  <p>МАЙ</p>
                  <p>ИЮНЬ</p>
                  <p>ИЮЛЬ</p>
                  <p>АВГУСТ</p>
                  <p>СЕНТЯБРЬ</p>
                  <p>ОКТЯБРЬ</p>
                  <p>НОЯБРЬ</p>
                  <p>ДЕКАБРЬ</p>
                </div>
              </div>
              <div className={styles.calendarBody}>
                <p>ПН</p>
                <p>ВТ</p>
                <p>СР</p>
                <p>ЧТ</p>
                <p>ПТ</p>
                <p>СБ</p>
                <p>ВС</p>
                {daysButton}
              </div>
              <div
                className={styles.defaultCalendar}
                onClick={() => {
                  props.calendarDefault()
                  openClosedCalendar(!open)
                }}
              >
                Сбросить дату
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SortNews
