import React from "react";
import styles from "./title.module.scss";
import CreateLine from "../createLine";

// function CreateLine(props) {
//   const { items } = props;
//   return (
//     <>
//       {items.map((item, key) => (
//         <div className={styles.nextShowsLine} key={key}>
//           <div className={styles.showsDate}>{item.attributes.date_str}</div>
//           <div className={styles.showsinfo}>
//             <div className={styles.showsTitle}>
//               <div className={styles.title}>
//                 {item.attributes.play.data.attributes.title}
//               </div>
//               <div className={styles.description}>{item.attributes.place}</div>
//             </div>
//             <div className={styles.raiting}>
//               {item.attributes.play.data.attributes.rating}+
//             </div>
//           </div>
//           <div>
//             <a
//               href={item.attributes.tickets_link}
//               className={styles.showsTicket}
//             >
//               купить билет
//             </a>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

export default function ChildrenNextShows(props) {
  const { id, items } = props;
  // Check if we have shows in little moon
  const isItems = items.length > 0 ? true : false;

  console.log(items, "items");

  const getWeekDay = (date) => {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    let dates = new Date(date);
    return days[dates.getDay()];
  };

  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.nextShowsContent}>
            <div className={styles.nextShowsTitle}>
              <h2>ближайшие постановки</h2>
            </div>
            {isItems ? (
              <div className={styles.nextShowsArea}>
                {items.map((item) => (
                  <CreateLine
                    item={item}
                    key={item.id}
                    date={parseInt(item.attributes.date_str.match(/\d+/))}
                    time={item.attributes.time}
                    day={getWeekDay(item.attributes.date)}
                    title={item.attributes.play.data.attributes.title}
                    premier={
                      item.attributes.play.data.attributes.isPremiere
                        ? "ПРЕМЬЕРА"
                        : ""
                    }
                    location={item.attributes.place}
                    rating={item.attributes.play.data.attributes.rating}
                    buy={item.attributes.tickets_link}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.nextShowsArea}>
                На данный момент нет ближайших постановок на сцене "МАЛЕНЬКАЯ
                ЛУНА"
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
