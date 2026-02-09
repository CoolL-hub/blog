import React, { type ComponentPropsWithRef } from 'react'

interface Props extends ComponentPropsWithRef<"dialog"> {
  preserveState?: boolean;
}
export function Dialog(props: Props) {
  const {
    preserveState = false,
    ...rest
  } = props;

  return (
    <>
    {
      (preserveState || rest.open)
      &&
      <dialog {...rest}>{ rest.children }</dialog>
    }
    </>
  )
}