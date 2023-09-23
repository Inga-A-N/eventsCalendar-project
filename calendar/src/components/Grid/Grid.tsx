import { daysOfWeek } from "../../utils/daysAndMonths/daysAndMonth";
import style from "./Grid.module.scss";

function Grid() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  // Get the first day of the month
  let dayone = new Date(year, month, 0).getDay();
  // console.log(dayone);
  // console.log(new Date().getDay());

  // Get the last date of the month
  let lastdate = new Date(year, month + 1, 0).getDate();
  console.log(lastdate);

  // Get the day of the last date of the month
  let dayend = new Date(year, month, lastdate).getDay();
  console.log("Last weekday of the month: ", dayend);

  // Get the last date of the previous month
  let monthlastdate = new Date(year, month, 0).getDate();

  // Variable to store the generated calendar HTML
  let list = [];

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

  // Update the text of the current date element
  // with the formatted current month and year
  // currdate.innerText = `${months[month]} ${year}`;

  // update the HTML of the dates element
  // with the generated calendar
  // day.innerHTML = list;}
  const indexOfFirstDate = list.indexOf(1);
  console.log(list.indexOf(1));
  console.log(list.indexOf(lastdate));

  return (
    <>
      <ul>
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
        {list.map((day, index) => (
          <li
            key={index}
            className={`${
              day == date.getDate() &&
              month === new Date().getMonth() &&
              year === new Date().getFullYear()
                ? style.active
                : ""
            } ${
              index < list.indexOf(1) || index > list.lastIndexOf(lastdate)
                ? style.inactive
                : ""
            }`}
          >
            {day}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Grid;
