import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

// This components primary responsibility is to provide global bootstrap styles

const app = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

export default app
