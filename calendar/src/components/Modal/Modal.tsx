import Form from "../Form/Form";

const Modal = ({ date }: { date: string }) => {
  return (
    <>
      <h3>Modal</h3>
      <p>{date}</p>
      <Form />
    </>
  );
};

export default Modal;
