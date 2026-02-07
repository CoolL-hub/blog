import { useEffect, useRef, useState } from "react";

export type CountdownState = "stop" | "pause" | "count" | "done";

export function useCountdown(waitForS: number) {
  const [seconds, set_seconds] = useState<number>(waitForS);
  const [state, set_state] = useState<CountdownState>("count");
  const [startTime, set_startTime] = useState<number>(new Date().getTime());

  const intervalRef = useRef<number | null>(null);

  function done() {
    if (state === "done") return;

    set_state("done");
  }

  function start() {
    if (seconds <= 0 || state === "count") {
      return;
    }
    set_startTime(Date.now() - (waitForS - seconds) * 1000);
    set_state("count");
  }

  function pause() {
    if (seconds <= 0 || state === "pause") return;
    set_state("pause");
  }

  function stop() {
    if (state === "stop") return;
    set_state("stop");
    set_seconds(0);
  }

  function restart() {
    set_startTime(Date.now());
    set_seconds(waitForS);
    set_state("count");
  }

  useEffect(() => {
    if (state !== "count") {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = window.setInterval(() => {
      console.log("update");

      const timeRemain = Math.max(
        0,
        (startTime - Date.now()) / 1000 + waitForS,
      );

      set_seconds(Number(timeRemain.toFixed(3)));

      if (timeRemain <= 0) {
        done();
      }
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state, startTime, waitForS]);

  return {
    seconds,
    secondsInt: Math.ceil(seconds),
    state,
    start,
    pause,
    stop,
    restart,
  };
}
