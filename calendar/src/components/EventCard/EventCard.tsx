import style from "./EventCard.module.scss";

function EventCard({ cardEvent }) {
  const { eventName, startDate, endDate, location, label } = cardEvent;
  return (
    <div>
      <h2>{eventName}</h2>
      <h4>Start: {startDate}</h4>
      <h4>End: {endDate}</h4>
      <h4>Location: {location}</h4>
      <h4>{label}</h4>

      <button>Delete event</button>
    </div>
  );
}

export default EventCard;
