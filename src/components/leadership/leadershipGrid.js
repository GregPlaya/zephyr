import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "../../styles/leadership.css"

const LeadershipGrid = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpLeadership(
        filter: { status: { eq: "publish" } }
        sort: { order: ASC, fields: date }
      ) {
        nodes {
          leadershipFields {
            contact
            title
          }
          id
          slug
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const leaders = data.allWpLeadership.nodes

  return (
    <section className="row" id="z-leadershipGrid">
      <div className="col">
        <hr className="mb-15" />
        <h3 className="mt-0 mb-60">Leadership</h3>
        <div className="row leaders">
          {leaders &&
            leaders.map((leader, index) => (
              <div
                className="col-6 col-md-4 leader"
                key={leader.id}
                data-sal="slide-up"
                data-sal-delay={Math.floor(((index % 3) + 1) * 100)}
                data-sal-duration="1000"
                data-sal-easing="ease-out-expo"
              >
                {leader.featuredImage && (
                  <Link to={"/leadership/" + leader.slug}>
                    <GatsbyImage
                      fluid={
                        leader.featuredImage.node.localFile.childImageSharp
                          .fluid
                      }
                      image={
                        leader.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={leader.title}
                    />
                  </Link>
                )}
                <Link to={"/leadership/" + leader.slug}>
                  <h4 className="text-normal">{leader.title}</h4>
                  <div className="leader-title">
                    {leader.leadershipFields.title}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipGrid
