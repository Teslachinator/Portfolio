import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [timerMonth, setTimerMonts] = useState();

  let interval;

  const startTimer = () => {
    const countInitDate = new Date("aug 2, 2022 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = now - countInitDate;

      const month = Math.floor(distance / (30.436875 * 24 * 60 * 60 * 1000));
      const days = Math.floor(
        (distance % (30.436875 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
      );
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerMonts(month);
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      Занимаюсь разработкой уже как {timerMonth} месяца {timerDays} дней,{" "}
      {timerHours} часов, {getZero(timerMinutes)} минут и{" "}
      {getZero(timerSeconds)} секунд
    </div>
  );
};

export default Timer;
