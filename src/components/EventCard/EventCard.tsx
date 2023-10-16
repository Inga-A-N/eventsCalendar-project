import style from "./EventCard.module.scss";

function EventCard({
  cardEvent,
  deleteEvent,
  eventIndex,
}: {
  cardEvent: {
    eventName: string;
    startDate: string;
    endDate: string;
    location: string;
    label: string;
  };
  deleteEvent: (index: number) => void;
  eventIndex: number;
}) {
  const { eventName, startDate, endDate, location, label } = cardEvent;
  const onDeleteEventButtonClick = (e) => {
    deleteEvent(eventIndex);
  };
  return (
    <div className={style.eventCard}>
      <h2>{eventName}</h2>
      <h4>Start: {startDate}</h4>
      <h4>End: {endDate}</h4>
      <h4>Location: {location}</h4>
      <h4>{label}</h4>

      <button onClick={onDeleteEventButtonClick}>Delete event</button>
    </div>
  );
}

export default EventCard;
