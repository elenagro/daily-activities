import React from "react";
import ActivityItem from "./ActivityItem";
import "./Activities.css";

const Activities = (props) => {
  return (
    <div className="activities">
      <ActivityItem
        title={props.items[0].title}
        description={props.items[0].description}
        date={props.items[0].date}
      />

      <ActivityItem
        title={props.items[1].title}
        description={props.items[1].description}
        date={props.items[1].date}
      />

      <ActivityItem
        title={props.items[2].title}
        description={props.items[2].description}
        date={props.items[2].date}
      />

      <ActivityItem
        title={props.items[3].title}
        description={props.items[3].description}
        date={props.items[3].date}
      />
    </div>
  );
};

export default Activities;
