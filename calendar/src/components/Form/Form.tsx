import style from "./Form.module.scss";

function Form() {
  return (
    <form className={style.form}>
      <div className={style.field}>
        <label htmlFor="eventName">Event Name</label>
        <input type="text" id="eventName" name="eventName" />
      </div>
      <div className={style.field}>
        <label htmlFor="startDate">Start Date</label>
        <input type="text" id="startDate" name="startDate" />
      </div>
      <div className={style.field}>
        <label htmlFor="endDate">End Date</label>
        <input type="text" id="endDate" name="endDate" />
      </div>
      <div className={style.field}>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" />
      </div>
      <div className={style.field}>
        <label htmlFor="label">Label</label>
        <select id="label" name="label" defaultValue="Select event type">
          <option
            value="Select event type"
            label="Select event type"
            disabled
          />
          <option value="Birthday" label="Birthday" />
          <option value="Task" label="Task" />
          <option value="Meeting" label="Meeting" />
          <option value="Other" label="Other" />
        </select>
      </div>
      <div className={style.field}>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
