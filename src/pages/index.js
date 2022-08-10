import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import RecentProjects from "../components/projects/recentProjects"
import LeadershipGrid from "../components/leadership/leadershipGrid"
import FormHome from "../components/contact/formHome"

import SimpleContent from "../components/pageBuilder/simpleContent"
import FullWidthImage from "../components/pageBuilder/fullWidthImage"
import Content2Col from "../components/pageBuilder/Content2Col"
import CustomCompany2Column from "../components/pageBuilder/CustomCompany2Column"

import "../styles/home.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query homeQuery {
      wpPage(slug: { eq: "home" }) {
        id
        ...pageBuilderFields
      }
    }
  `)

  return (
    <Layout headerMode="overlay" pageInfo={{ pageName: "index" }}>
      <Seo title="Home" />

      <div style={{ marginBottom: "100px" }}>
        <video
          className="video-player fullscreen"
          height="100%"
          width="100%"
          loop
          muted
          autoPlay
          poster="/homepage-poster.jpg"
          disableRemotePlayback
        >
          <source src="/hero.mp4" type="video/mp4" />
          <img
            src="/homepage-poster.jpg"
            title="Your browser does not support the <video> tag"
            alt=""
          />
        </video>
      </div>

      <div className="wrapper container-fluid">
        {data.wpPage.pageBuilder.layouts &&
          data.wpPage.pageBuilder.layouts.map((layout, index) => {
            if (
              layout.fieldGroupName ===
              "Page_Pagebuilder_Layouts_FullWidthImage"
            ) {
              return <FullWidthImage key={index} image={layout.image} />
            } else if (
              layout.fieldGroupName === "Page_Pagebuilder_Layouts_Content"
            ) {
              return <SimpleContent key={index} content={layout.content} />
            } else if (
              layout.fieldGroupName === "Page_Pagebuilder_Layouts_Content2Col"
            ) {
              return <Content2Col key={index} content={layout} />
            } else if (
              layout.fieldGroupName ===
              "Page_Pagebuilder_Layouts_CustomCompany2Column"
            ) {
              return (
                <CustomCompany2Column
                  key={index}
                  mode="homepage"
                  content={layout}
                />
              )
            } else {
              return null
            }
          })}

        <RecentProjects />
        <LeadershipGrid />
      </div>
      <div style={{ background: "#F9F9F9" }}>
        <div className="wrapper container-fluid">
          <FormHome />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
