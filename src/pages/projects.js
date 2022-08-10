import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/projects.css"
import ProjectsGrid from "../components/projects/projectsGrid"

const ProjectsPage = () => (
  <Layout>
    <Seo title="Projects" />
    <div className="wrapper container-fluid">
      <ProjectsGrid />
    </div>
  </Layout>
)

export default ProjectsPage
