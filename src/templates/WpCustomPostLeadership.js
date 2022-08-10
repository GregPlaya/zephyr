import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($id: String) {
    wpLeadership(id: { eq: $id }) {
      id
      title
      leadershipFields {
        contact
        title
      }
      slug
      content
      featuredImage {
        node {
          altText
          caption
          description
          id
          sourceUrl
          sizes
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const WpCustomPostLeadership = data => {
  const leader = data.data.wpLeadership
  return (
    <Layout>
      <Seo title={leader.title} />
      <div className="wrapper">
        <div className="row leader">
          <div className="col-12">
            <hr />
            <div className="mt-10 mb-20">
              <Link className="with-arrow-left" to="/leadership">
                Leadership
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 order-sm-2">
            {leader.featuredImage && (
              <GatsbyImage
                fluid={
                  leader.featuredImage.node.localFile.childImageSharp.fluid
                }
                image={
                  leader.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={leader.title}
              />
            )}
          </div>
          <div className="col-12 col-sm-8 leader-text-col">
            <h3 className="text-normal mt-0">{leader.title}</h3>
            <h4 className="text-grey mt-0 text-normal">
              {leader.leadershipFields.title}
            </h4>
            <div>
              <div dangerouslySetInnerHTML={{ __html: leader.content }} />
            </div>
            {leader.leadershipFields.contact && (
              <div className="mt-40">
                <a
                  className="underline font-dark-hover"
                  href={`mailto:${leader.leadershipFields.contact}`}
                >
                  Contact {leader.title.split(" ")[0]}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WpCustomPostLeadership
