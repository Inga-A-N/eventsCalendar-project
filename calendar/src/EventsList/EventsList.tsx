import EventCard from "../components/EventCard/EventCard";
// import style from "./EventsList.module.scss";

function EventsList({ data }) {
  return (
    <section>
      {data.map((oneEvent, index: number) => (
        <EventCard key={index} cardEvent={oneEvent} />
      ))}
    </section>
  );
}

export default EventsList;
