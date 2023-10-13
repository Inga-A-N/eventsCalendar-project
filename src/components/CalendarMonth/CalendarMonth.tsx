import { Weekdays } from "../../utils/Weekdays";
import { monthDays } from "../../utils/MonthDays.ts";
import { Weekday, Date } from "../../../types/types.ts";
import style from "./CalendarMonth.module.scss";
import Chevron_Right from "../../assets/icons/chevron_right.tsx";
import Chevron_Left from "../../assets/icons/chevron_left.tsx";
import { MouseEvent, useState } from "react";

export const CalendarMonth: React.FC<{}> = ({}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>();
  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(event.currentTarget.getAttribute("value"));
  };

  const createDates = (date: number) => {
    let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
    for (let i = 0; i < 7; i++) {
      return (
        <button
          className={`${style.date} ${date == 28 ? style.today : style.date} ${
            date == selectedDateNumber ? style.selected : style.date
          }`}
          onClick={handleChange}
          value={date}
        >
          {date}
        </button>
      );
    }
  };

  const createWeeks = (dates: Array<Date>) => {
    let daysInWeek = 7;
    let weekArray = [];

    for (let i = 0; i < dates.length; i += daysInWeek) {
      weekArray.push(dates.slice(i, i + daysInWeek));
    }
    return weekArray;
  };
  return (
    <div className={style.calendar_container}>
      <div className={style.datepicker_container}>
        <Chevron_Left />
        <span>August 2023</span>
        <Chevron_Right />
      </div>
      <div className={style.weekdays_container}>
        {Weekdays.map((day, index) => (
          <div className={style.week_day} key={index}>
            {day}
          </div>
        ))}
      </div>
      <div className={style.calendar}>
        {createWeeks(monthDays).map((week, index) => (
          <div className={style.week} key={index}>
            {week.map((day) => createDates(day.day))}
          </div>
        ))}
      </div>
    </div>
  );
};

// export default CalendarMonth;
