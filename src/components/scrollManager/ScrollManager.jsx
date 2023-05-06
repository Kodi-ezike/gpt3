import React from "react"
import { useLocation } from "react-router-dom"

// interface Props {
//   children: React.ReactNode
// }
const ScrollManager = ({ children }) => {
  const location = useLocation()

  // scroll to the top every time the user navigates to a new page
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <React.Fragment>{children}</React.Fragment>
}

export default ScrollManager;