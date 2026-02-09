import React, { useLayoutEffect, useRef, useState, type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

function Portal(props: PropsWithChildren) {
  return (
    <>{ createPortal(props.children, document.body) }</>
  )
}

export default Portal