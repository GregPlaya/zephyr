import React, { useState } from "react"
//import PropTypes from "prop-types"
//import { Link } from "gatsby"
import Burger from "./burger"
import Menu from "./menu"

//import "../styles/navigation.css"

const Navigation = ({ pageInfo }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}
export default Navigation
