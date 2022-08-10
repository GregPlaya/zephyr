import React from "react"
import { bool } from "prop-types"
import { Link } from "gatsby"

const Menu = ({ open }) => {
  return (
    <nav id="main-nav" className={`${open ? "opened" : ""}`}>
      <Link activeClassName="active" to="/company">
        Company
      </Link>
      <Link activeClassName="active" to="/projects">
        Projects
      </Link>
      <Link activeClassName="active" to="/leadership">
        Leadership
      </Link>
      <Link activeClassName="active" to="/contact">
        Contact
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://investors.zephyrpartners.com/login"
      >
        Investor Login
      </a>
    </nav>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
