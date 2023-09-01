import { Date } from "../../types/types";

const generateDates = () => {
  let dates: Date[] = [];
  for (let i = 1; i < 31; i++) {
    let date: Date = { day: i };
    dates.push(date);
  }
  return dates;
};

export const monthDays: Date[] = generateDates();
