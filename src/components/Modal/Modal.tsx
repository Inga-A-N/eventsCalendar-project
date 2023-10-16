import Form from "../Form/Form";

const Modal = ({
  date,
  addEvent,
}: {
  date: string;
  addEvent: (newEvent: any) => void;
}) => {
  return (
    <>
      <h3>Modal</h3>
      <p>{date}</p>
      <Form date={date} addEvent={addEvent} />
    </>
  );
};

export default Modal;
