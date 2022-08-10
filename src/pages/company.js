import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import SimpleContent from "../components/pageBuilder/simpleContent"
import FullWidthImage from "../components/pageBuilder/fullWidthImage"
import Content2Col from "../components/pageBuilder/Content2Col"
import CustomCompany2Column from "../components/pageBuilder/CustomCompany2Column"

const CompanyPage = () => {
  const data = useStaticQuery(graphql`
    query companyQuery {
      wpPage(slug: { eq: "company" }) {
        id
        ...pageBuilderFields
      }
    }
  `)

  return (
    <Layout pageInfo={{ pageName: "company" }}>
      <Seo title="Company" />

      <div className="wrapper container-fluid mb-100">
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
                  mode="normal"
                  content={layout}
                />
              )
            } else {
              return null
            }
          })}
      </div>
    </Layout>
  )
}

export default CompanyPage
