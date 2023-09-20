import { useState, useEffect } from "react";
import "./App.css";
import "./style/colors.css";
import "./style/fonts.css";

function App() {
  const INITIAL = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [countdown, setCountdown] = useState(INITIAL);
  let countDownDate = new Date("Sep 20, 2023 15:30:00").getTime();
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let emo = "";
  if (hours === 5) {
    emo = "😷";
  } else if (hours === 4) {
    emo = "😵‍💫";
  } else if (hours === 3) {
    emo = "😭";
  } else if (hours === 2) {
    emo = "🥲";
  } else if (hours === 1) {
    emo = "🫠";
  } else {
    emo = "🥳";
  }

  useEffect(() => {
    let x = setInterval(function () {
      setCountdown({
        ...countdown,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
    return () => clearInterval(x);
  }, [countdown]);

  return (
    <div className="App">
      <div className="countdown">
        <h1 className="c-A100">
          {countdown.days + "d "}
          {countdown.hours + "h "}
          {countdown.minutes + "m "}
          {countdown.seconds + "s "}
        </h1>
        <h2 className="c-A100">Until this meeting is over {emo}</h2>
      </div>
    </div>
  );
}

export default App;
