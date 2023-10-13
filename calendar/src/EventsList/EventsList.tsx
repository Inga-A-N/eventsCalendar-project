import EventCard from "../components/EventCard/EventCard";
import style from "./EventsList.module.scss";

function EventsList({
  data,
  deleteEvent,
}: {
  data: {
    eventName: string;
    startDate: string;
    endDate: string;
    location: string;
    label: string;
  }[];
  deleteEvent: (index: number) => void;
}) {
  return (
    <section className={style.eventsSection}>
      {data.map((oneEvent: object, index: number) => (
        <EventCard
          key={index}
          cardEvent={oneEvent}
          deleteEvent={deleteEvent}
          eventIndex={index}
        />
      ))}
    </section>
  );
}

export default EventsList;
