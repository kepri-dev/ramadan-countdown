import React, { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState("");

  const calculateTimeLeft = () => {
    const ramadanDate = moment("2024-03-10"); // Change this to the expected start date of Ramadan
    const now = moment();
    const difference = ramadanDate.diff(now);

    if (difference > 0) {
      const duration = moment.duration(difference);
      // Calculate total days including the days from months and weeks
      const totalDays = duration.asDays();
      const days = Math.floor(totalDays); // Get full days
      const hours = duration.hours(); // Get remaining hours
      const minutes = duration.minutes(); // Get remaining minutes
      const seconds = duration.seconds(); // Get remaining seconds

      return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    } else {
      return "Ramadan has begun!";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  });

  const redirectToLink = () => {
    const link =
      "https://www.shutterstock.com/image-photo/candid-shot-religious-asian-muslim-260nw-1655673133.jpg";
    window.location.href = link;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ramadan Countdown Timer</h1>
        <button onClick={redirectToLink} className="countdown-button">
          {timeLeft}
        </button>
      </header>
    </div>
  );
}

export default App;
