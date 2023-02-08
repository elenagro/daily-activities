import React from "react";
import ActivityForm from "./ActivityForm";
import "./NewActivity.css";

const NewActivity = (props) => {
  const saveActivitiesDataHandler = (enteredActivitiesData) => {
    const activitiesData = {
      ...enteredActivitiesData,
      id: Math.random().toString(),
    };
    props.onAddActivity(activitiesData);
  };
  return (
    <div className="new-activity">
      <ActivityForm onSaveActivitiesData={saveActivitiesDataHandler} />
    </div>
  );
};

export default NewActivity;
