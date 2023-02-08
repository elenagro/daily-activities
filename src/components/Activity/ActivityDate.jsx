import React from "react";
import "./ActivityDate.css";

const ActivityDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="activity-date">
      <div className="activity-date-month">{month}</div>
      <div className="activity-date-year">{year}</div>
      <div className="activity-date-day">{day}</div>
    </div>
  );
};

export default ActivityDate;
