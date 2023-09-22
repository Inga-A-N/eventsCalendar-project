import { useState } from "react";
import Chevron_Left from "../../assets/icons/chevron_left";
import Chevron_Right from "../../assets/icons/chevron_right";
import { months } from "../../utils/daysAndMonths/daysAndMonth";
import style from "./Calendar.module.scss";

function Calendar() {
  let myDate = new Date();
  console.log(myDate);
  let currentMonth = myDate.getMonth();
  const [month, setMonth] = useState(currentMonth);
  const onLeftClick = () =>
    setMonth((month) => {
      month = month - 1;
      if (month < 0) {
        month = 11;
      }
      return month;
    });
  const onRightClick = () =>
    setMonth((month) => {
      month = month + 1;
      if (month > 11) {
        month = 0;
      }
      return month;
    });
  return (
    <>
      <h1>Today: {myDate.toLocaleDateString()}</h1>

      <h2>YEAR {myDate.getFullYear()}</h2>
      <div className={style.monthSelector}>
        <Chevron_Left click={onLeftClick} />
        <h3>
          {months[month]} {myDate.getFullYear()}
        </h3>
        <Chevron_Right click={onRightClick} />
      </div>

      <p>{myDate.getMonth()}</p>
      <Date />
    </>
  );
}

export default Calendar;
