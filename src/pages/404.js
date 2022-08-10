import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <div className="wrapper text-center container-fluid my-5">
      <h1 className="my-5">404: Not Found</h1>
      <p className="my-5">You hit a route that doesn&#39;t exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
