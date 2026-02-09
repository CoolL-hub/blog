import * as React from "react";

import { clsx } from "@src/shared/utils/clsx";

import styles from "./Button.module.scss";

/**
 * Visual variants your design system supports
 */
type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "link";

/**
 * Size variants
 */
type ButtonSize = "sm" | "md" | "lg";

/**
 * Extend all native button props
 * except ones we want to control ourselves
 */
export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> {
  /** Visual style */
  variant?: ButtonVariant;

  /** Size of the button */
  size?: ButtonSize;

  /** Show loading spinner and disable interaction */
  loading?: boolean;

  /** Disable the button */
  disabled?: boolean;

  /** Icon before label */
  leftIcon?: React.ReactNode;

  /** Icon after label */
  rightIcon?: React.ReactNode;

  /** Make button full width */
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      type = "button",
      ...rest
    } = props;

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        className={clsx(
          styles.uiButton,
          `${styles.uiButton}__${variant}`,
          `${styles.uiButton}__${size}`,
          {
            [`disabled`]: disabled,
            [`loading`]: loading,
            [`full`]: fullWidth,
          },
          className,
        )}
        {...rest}
      >
        {loading && <span className="ui-button__spinner" />}

        {!loading && leftIcon && (
          <span className="ui-button__icon ui-button__icon--left">
            {leftIcon}
          </span>
        )}

        <span className="ui-button__label">{children}</span>

        {!loading && rightIcon && (
          <span className="ui-button__icon ui-button__icon--right">
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
