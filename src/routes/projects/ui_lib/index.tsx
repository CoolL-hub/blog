import { createFileRoute } from "@tanstack/react-router";

import Timer from "../../../ui/Timer/Timer";
import { clsx } from "../../../shared/utils/clsx";

import styles from "./ui_lib.module.scss";
import FSPicker from "../../../ui/FSPicker/FSPicker";
import { Button } from "../../../ui/Button/Button";

export const Route = createFileRoute("/projects/ui_lib/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className={clsx(styles.uiItemContainer)}>
        <Timer timeS={10} />
      </div>
      <div className={clsx(styles.uiItemContainer)}>
        <Button>Button</Button>
      </div>
    </div>
  );
}
