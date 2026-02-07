type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]
  | Record<string, boolean>;

export function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const process = (input: ClassValue): void => {
    if (!input) return;

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
      return;
    }

    if (Array.isArray(input)) {
      input.forEach(process);
      return;
    }

    if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) classes.push(key);
      }
    }
  };

  inputs.forEach(process);

  return classes.join(" ");
}
