import { useState } from "react";
import "./App.css";
import CalendarMonth from "./components/CalendarMonth/CalendarMonth";
import DayModal from "./components/DayModal/DayModal";
import Background from "./components/Background/Background";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Background />

      <DayModal />
    </>
  );
}

export default App;
