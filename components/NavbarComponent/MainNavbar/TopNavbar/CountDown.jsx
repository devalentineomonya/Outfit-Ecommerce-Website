"use client"

import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [timeRemaining, setTimeRemaining] = useState(getInitialTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        const newTime = prevTime - 1000;

        if (newTime <= 0) {
          return getInitialTimeRemaining();
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  return (
   
      <span>{formatTime(hours)} HR : {formatTime(minutes)} MN : {formatTime(seconds)} SC</span>
  
  );
};

const formatTime = (value) => {
  return value < 10 ? `0${value}` : value;
};

const getInitialTimeRemaining = () => {
  const fifteenHoursInMilliseconds = 15 * 60 * 60 * 1000;
  return fifteenHoursInMilliseconds;
};

export default CountDown;
