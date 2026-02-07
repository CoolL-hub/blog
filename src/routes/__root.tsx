import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import NavBar from '../ui/NavBar/NavBar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <NavBar/>
      <div className="base-layout">
        <Outlet />
      </div>
    </React.Fragment>
  )
}
