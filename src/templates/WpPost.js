import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

const WpPost = ({
  data: {
    wpPost: { title, content, id },
  },
}) => {
  return (
    <Layout>
      <div className="wrapper wrapper-xs margin-top--50">
        <header className="">
          <h1 className="headline-4">{title}</h1>
        </header>
        <div
          className={"margin-top--50"}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="block"></div>
    </Layout>
  )
}

export default WpPost
