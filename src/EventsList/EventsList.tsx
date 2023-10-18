import EventCard from "../components/EventCard/EventCard";
import style from "./EventsList.module.scss";

function EventsList({
  data,
  eventStartDate,
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
      {data.map(
        (
          oneEvent: {
            eventName: string;
            startDate: string;
            endDate: string;
            location: string;
            label: string;
          },
          index: number
        ) => (
          <EventCard
            key={index}
            cardEvent={oneEvent}
            deleteEvent={deleteEvent}
            eventIndex={index}
            eventStartDate={eventStartDate}
          />
        )
      )}
    </section>
  );
}

export default EventsList;
