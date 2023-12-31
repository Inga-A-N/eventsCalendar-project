import { useState } from "react";
import Chevron_Left from "../../assets/icons/chevron_left";
import Chevron_Right from "../../assets/icons/chevron_right";
import { months } from "../../utils/daysAndMonths/daysAndMonth";
import style from "./Calendar.module.scss";
import Grid from "../Grid/Grid";

function Calendar() {
  let myDate = new Date();
  console.log(myDate);
  let currentMonth = myDate.getMonth();
  let currentYear = myDate.getFullYear();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const onLeftClick = () => {
    setMonth(month - 1);

    if (month == 0) {
      setYear(year - 1);

      setMonth(11);
    }
  };

  const onRightClick = () => {
    setMonth(month + 1);

    if (month == 11) {
      setYear(year + 1);

      setMonth(0);
    }
  };

  return (
    <>
      <div className={style.page}>
        <h2>Today: {myDate.toLocaleDateString()}</h2>

        <div className={style.monthSelector}>
          <Chevron_Left click={onLeftClick} />
          <h3>
            {months[month]} {year}
          </h3>
          <Chevron_Right click={onRightClick} />
        </div>

        <Date />
        <Grid monthToShow={month} yearToShow={year} />
      </div>
    </>
  );
}

export default Calendar;
