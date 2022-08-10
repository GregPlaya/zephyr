import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormContact from "../components/contact/formContact"

const ContactPage = () => (
  <Layout pageInfo={{ pageName: "contact" }}>
    <Seo title="Contact" />
    <div className="container-fluid wrapper">
      <div className="row no-gutter">
        <div className="col">
          <hr className="mb-15" />
          <h3 className="mt-0 mb-50">Contact</h3>
        </div>
      </div>
      <FormContact />
    </div>
  </Layout>
)

export default ContactPage
