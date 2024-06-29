import React,{ useState, useEffect } from "react";

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };
  
    const formatDay = (date) => {
      const options = { weekday: 'long' };
      return date.toLocaleDateString(undefined, options);
    };
  
    const formatTime = (date) => {
      const options = { hour: '2-digit',minute:'2-digit' };
      return date.toLocaleTimeString(undefined, options);
    };
  
    return (
      <div className="flex text-left">
        <h1 className="font-mono text-2.5xl text-gray-900 dark:text-white">
          {formatDate(currentTime)}
        </h1>
        <h1 className="pl-4 text-2xl font-bold text-gray-900 dark:text-white">
          |
        </h1>
        <h2 className="font-mono text-2.5xl pl-3 pr-5 text-gray-900 dark:text-white">
          {formatDay(currentTime)}
        </h2>
        <h2 className="font-mono text-2.5xl text-gray-900 dark:text-white">
          {formatTime(currentTime)}
        </h2>
      </div>
    );
  }

  export default Time;