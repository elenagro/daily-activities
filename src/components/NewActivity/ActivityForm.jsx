import React, { useState } from "react";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredDescription, setEnteredDescription] = useState("");

  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const activityData = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date(enteredDate),
    };

    props.onSaveActivitiesData(activityData);

    setEnteredDate("");
    setEnteredDescription("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-activity__controls">
        <div className="new-activity__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-activity__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionHandler}
          />
        </div>
        <div className="new-activity__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-activity__actions">
        <button type="submit">Add a new activity</button>
      </div>
    </form>
  );
};

export default ActivityForm;
