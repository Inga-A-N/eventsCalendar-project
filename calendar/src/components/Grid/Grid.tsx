import { daysOfWeek } from "../../utils/daysAndMonths/daysAndMonth";
import style from "./Grid.module.scss";

function Grid({
  monthToShow,
  yearToShow,
}: {
  monthToShow: number;
  yearToShow: number;
}) {
  // console.log(yearToShow);
  let date = new Date();
  // let year = date.getFullYear();
  // let month = date.getMonth();
  // Get the first day of the month
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
    // Check if the current date is today
    // let isToday =
    //   i === date.getDate() &&
    //   month === new Date().getMonth() &&
    //   year === new Date().getFullYear()
    //     ? "active"
    //     : "";
    list.push(i);
  }

  // Loop to add the first dates of the next month
  for (let i = dayend; i <= 6; i++) {
    list.push(i - dayend + 1);
  }

  return (
    <>
      <ul>
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
        {list.map((day, index) => (
          <li key={index}>
            <button
              className={`${
                day == date.getDate() &&
                monthToShow === new Date().getMonth() &&
                yearToShow === new Date().getFullYear()
                  ? style.active
                  : ""
              } ${
                index < list.indexOf(1) || index > list.lastIndexOf(lastdate)
                  ? style.inactive
                  : ""
              }`}
            >
              {day}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Grid;
