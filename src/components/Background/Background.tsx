import React from "react";
import style from "./background.module.scss";
import { CalendarMonth } from "../CalendarMonth/CalendarMonth";

const Background = ({}) => {
  return (
    <div className={style.background_container}>
      <div className={style.background}></div>
      <CalendarMonth />
    </div>
  );
};

export default Background;
