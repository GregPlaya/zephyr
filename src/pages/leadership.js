import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LeadershipGrid from "../components/leadership/leadershipGrid"

const LeadershipPage = () => (
  <Layout pageInfo={{ pageName: "leadership" }}>
    <Seo title="Leadership" />

    <div className="wrapper container-fluid">
      <LeadershipGrid />
    </div>
  </Layout>
)

export default LeadershipPage
