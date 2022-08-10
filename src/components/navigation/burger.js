import * as React from "react"
import { bool, func } from "prop-types"

const Burger = ({ open, setOpen }) => {
  // @TODO - Make this a button/a that can be keyboard accessible
  return (
    <div
      className={`burger d-md-none ${open ? "opened" : ""} `}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default Burger
