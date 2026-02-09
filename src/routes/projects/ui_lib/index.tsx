import { createFileRoute } from "@tanstack/react-router";

import { Activity, useState } from "react";

import { Button } from "@src/shared/ui/Button/Button";
import { Dialog } from "@src/shared/ui/Dialog/Dialog";
import Portal from "@src/shared/ui/Portal/Portal";
import Timer from "@src/shared/ui/Timer/Timer";

import styles from "./ui_lib.module.scss";

import { clsx } from "../../../shared/utils/clsx";

export const Route = createFileRoute("/projects/ui_lib/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <div className={clsx(styles.uiItemContainer)}>
        <Timer timeS={10} />
      </div>
      <div className={clsx(styles.uiItemContainer)}>
        <Button>Button</Button>
      </div>
      <div className={clsx(styles.uiItemContainer)}>
        <Button onClick={() => setOpenDialog((state) => !state)}>
          Open dialog
        </Button>

        <Portal>
          <Dialog preserveState={true} open={openDialog} onClose={() => setOpenDialog(false)} style={{ color: "#1e1e1e" }}>
            <p>Greetings, one and all!</p>
            <form method="dialog">
              <button onClick={() => setOpenDialog(false)}>OK</button>
            </form>
          </Dialog>
        </Portal>
      </div>
    </div>
  );
}
