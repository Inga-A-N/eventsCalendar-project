import "./App.css";
// import Chevron_Left from "./assets/icons/chevron_left";
// import Chevron_Right from "./assets/icons/chevron_right";
import Calendar from "./components/Calendar/Calendar";

// import { months } from "./utils/daysAndMonths/daysAndMonth";

function App() {
  let myDate = new Date();
  console.log(myDate);
  return (
    <>
      {/* <h1>{myDate.toLocaleDateString()}</h1>

      <h2>YEAR {myDate.getFullYear()}</h2>
      <div className="monthSelector">
        <Chevron_Left />
        <h3>{months[myDate.getMonth()]}</h3>
        <Chevron_Right />
      </div>

      <p>{myDate.getMonth()}</p>
      <Date /> */}
      <Calendar />
    </>
  );
}

export default App;
