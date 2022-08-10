import * as React from "react"
import { Link } from "gatsby"

import "../styles/footer.css"

const Footer = () => (
  <footer>
    <div className="wrapper">
      <div className="d-lg-flex">
        <div className="footer-logo-col">
          <img src={"/logo.svg"} alt="Zephyr" />
        </div>
        <div className="w-100 d-flex flex-wrap">
          <div className="col-12 col-sm-6 col-md-3 contact-col">
            <Link to="/contact">Contact</Link>
            <br />
            <br />
            ©2021 Zephyr Ltd.
          </div>

          <div className="col-12 col-sm-6 col-md-3 contact-col">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/700+2nd+St,+Encinitas,+CA+92024/data=!4m2!3m1!1s0x80dc0c417cec78e3:0xb94ab392ed170371?sa=X&ved=2ahUKEwjurP6X-tPyAhUHpp4KHeAiBSQQ8gF6BAgOEAE"
            >
              Main Office:
              <br />
              700 Second St.
              <br />
              Encinitas, CA 92024
            </a>
          </div>

          <div className="col-12 col-sm-6 col-md-3 contact-col">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/12100+Wilshire+Blvd+%231135,+Los+Angeles,+CA+90024/data=!4m2!3m1!1s0x80c2bbcf1c886929:0x36bef10de727cc0b?sa=X&ved=2ahUKEwiQtaL2-dPyAhVO_J4KHZKpCuoQ8gF6BAgREAE"
            >
              LA Office: <br />
              12100 Wilshire Blvd.
              <br />
              Suite 1135 Los Angeles,
              <br />
              CA 90025
            </a>
          </div>

          <div className="col-12 col-sm-6 col-md-3 contact-col">
            <a href="tel:+18585583650">858.558.3650</a>
            <br />
            <a href="mailto:info@builtbyzephyr.com">info@builtbyzephyr.com</a>
            <br />
            <br />
            <a
              href="https://www.linkedin.com/company/zephyr-partners-llc"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
