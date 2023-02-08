import React from "react";
import Activities from "./components/Activity/Activities";
import NewActivity from "./components/NewActivity/NewActivity";
import Copyright from "./components/Copyright/Copyright";

const App = () => {
  const activities = [
    {
      id: "1",
      title: "Gym.",
      description: "Do exercises, it should last max 1 hour.",
      date: new Date(2023, 7, 14),
    },
    {
      id: "2",
      title: "Cosmetic studio",
      description: "Nails, depilation, hair.",
      date: new Date(2023, 2, 12),
    },
    {
      id: "3",
      title: "Shopping",
      description: "Buy new clothes and accessories, also sth for home.",
      date: new Date(2023, 2, 28),
    },
    {
      id: "4",
      title: "Summer Vacation",
      description: "Book a hotel for this summer vacation.",
      date: new Date(2023, 5, 12),
    },
  ];

  const addActivityHandler = (activity) => {
    console.log("In App.js");
    console.log(activity);
  };

  return (
    <div>
      <h1>Good job, Elena!</h1>
      <NewActivity onAddActivity={addActivityHandler} />
      <Activities items={activities} />
      <Copyright />
    </div>
  );
};

export default App;
