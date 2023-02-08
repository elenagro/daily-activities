import React from "react";
import "./ActivityItem.css";
import ActivityDate from "./ActivityDate";

const ActivityItem = (props) => {
  return (
    <div className="activity-item">
      <ActivityDate date={props.date} />
      <h2>{props.title}</h2>
      <p className="activity-item-description">{props.description}</p>
    </div>
  );
};

export default ActivityItem;
