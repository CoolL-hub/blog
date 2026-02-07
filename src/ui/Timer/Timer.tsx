import React from "react";
import { useCountdown } from "../../shared/hooks/useCountdown";

function Timer() {
  const timer = useCountdown(10);

  return (
    <div>
      <div>Timer count: { timer.seconds }</div>
      <div>Timer state: { timer.state }</div>
      <div>
        <button onClick={timer.start}>Start</button>
        <button onClick={timer.pause}>Pause</button>
        <button onClick={timer.stop}>Stop</button>
        <button onClick={timer.restart}>Restart</button>
      </div>
    </div>
  );
}

export default Timer;
