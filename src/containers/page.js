import React from "react"

import Navigation from "../components/navigation"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  )
}
