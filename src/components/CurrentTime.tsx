
import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:ml-auto flex-shrink-0 mt-6 md:mt-0">
      <div className="bg-card-hover rounded-lg p-4 inline-block">
        <h2 className="text-lg text-gray-400 mb-2">Current Time</h2>
        <p className="text-2xl font-bold font-mono">{time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default CurrentTime;
