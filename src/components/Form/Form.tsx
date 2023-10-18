import style from "./Form.module.scss";
import labels from "../../utils/eventsLabels";

import { FormEvent, useState } from "react";

function Form({
  date,
  addEvent,
}: {
  date: string;
  addEvent: (newEvent: any) => void;
}) {
  // const defaultValues = {
  //   eventName: "",
  //   startDate: "",
  //   endDate: "",
  //   location: "",
  //   label: "",
  // };
  const [formValues, setFormValues] = useState({});

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted", formValues);
    console.log({ date });
    addEvent(formValues);
    e.target.reset();
    // setFormValues(defaultValues);
  };

  const onChange = (e: { target: { value: any; name?: any } }) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.field}>
        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          onChange={onChange}
          required
        />
      </div>
      <div className={style.field}>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          onChange={onChange}
          // placeholder={date}
          defaultValue={date}
        />
      </div>
      <div className={style.field}>
        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          id="endDate"
          name="endDate"
          onChange={onChange}
          placeholder={date}
        />
      </div>
      <div className={style.field}>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" onChange={onChange} />
      </div>
      <div className={style.field}>
        <label htmlFor="label">Label</label>
        <select
          id="label"
          name="label"
          defaultValue="Select event type"
          onChange={onChange}
        >
          <option
            value="Select event type"
            label="Select event type"
            disabled
          />
          {labels.map((label, index) => (
            <option value={label} label={label} key={index} />
          ))}
        </select>
      </div>
      <div className={style.field}>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
