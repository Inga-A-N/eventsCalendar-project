import { useState } from "react";
import { daysOfWeek } from "../../utils/daysAndMonths/daysAndMonth";
import style from "./Grid.module.scss";
import Modal from "../Modal/Modal";

function Grid({
  monthToShow,
  yearToShow,
}: {
  monthToShow: number;
  yearToShow: number;
}) {
  let date = new Date();

  let dayone = new Date(yearToShow, monthToShow, 0).getDay();

  // Get the last date of the month
  let lastdate = new Date(yearToShow, monthToShow + 1, 0).getDate();

  // Get the day of the last date of the month
  let dayend = new Date(yearToShow, monthToShow, lastdate).getDay();

  // Get the last date of the previous month
  let monthlastdate = new Date(yearToShow, monthToShow, 0).getDate();

  // Variable to store the generated calendar HTML
  let list: number[] = [];

  // Loop to add the last dates of the previous month
  for (let i = dayone; i > 0; i--) {
    list.push(monthlastdate - i + 1);
  }

  // Loop to add the dates of the current month
  for (let i = 1; i <= lastdate; i++) {
    list.push(i);
  }

  // Loop to add the first dates of the next month
  for (let i = dayend; i <= 6; i++) {
    list.push(i - dayend + 1);
  }

  const [modal, setModal] = useState(false);
  const [modalDate, setModalDate] = useState("");
  const handleDateSelect = (e: any) => {
    modal && e.target.value.padStart(2, "0") != modalDate.slice(0, 2)
      ? setModalDate(
          new Date(yearToShow, monthToShow, e.target.value).toLocaleDateString()
        )
      : setModal(!modal);
    setModalDate(
      new Date(yearToShow, monthToShow, e.target.value).toLocaleDateString()
    );
  };
  return (
    <>
      <div className={style.modalsArrangement}>
        <div>
          <h2>{modal ? "Tasks/Events" : null}</h2>
        </div>
        <div>
          <ul>
            {daysOfWeek.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
            {list.map((day, index) =>
              index < list.indexOf(1) || index > list.lastIndexOf(lastdate) ? (
                <li key={index} className={style.inactive}>
                  {day}
                </li>
              ) : (
                <li key={index}>
                  <button
                    className={`${
                      day == date.getDate() &&
                      monthToShow === new Date().getMonth() &&
                      yearToShow === new Date().getFullYear()
                        ? style.active
                        : ""
                    } ${
                      modal &&
                      day.toString().padStart(2, "0") == modalDate.slice(0, 2)
                        ? style.selected
                        : ""
                    }`}
                    value={day}
                    onClick={handleDateSelect}
                  >
                    {day}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <div>{modal ? <Modal date={modalDate} /> : null}</div>
      </div>
    </>
  );
}

export default Grid;
