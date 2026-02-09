import { useCountdown } from "@src/shared/hooks/useCountdown";

import { Button } from "../Button/Button";
import { useEffect, useLayoutEffect } from "react";

interface Props {
  timeS: number;
}
function Timer(props: Props) {
  const timer = useCountdown(props.timeS);

  return (
    <div>
      <div>Timer count: {timer.seconds}</div>
      <div>Timer state: {timer.state}</div>
      <div style={{ display: "flex", gap: 10, padding: "4px 0px" }}>
        <Button disabled={timer.seconds === 0 || timer.state === "count"} onClick={timer.start}>
          Start
        </Button>
        <Button disabled={timer.state !== "count"} onClick={timer.pause}>
          Pause
        </Button>
        <Button disabled={timer.seconds === 0} onClick={timer.stop}>
          Stop
        </Button>
        <Button onClick={timer.restart}>Restart</Button>
      </div>
    </div>
  );
}

export default Timer;
