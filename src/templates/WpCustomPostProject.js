import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

import rightArrow from "../../static/arrow-right.svg"

export const query = graphql`
  query ($id: String) {
    wpProject(id: { eq: $id }) {
      title
      id
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          id
          altText
          caption
          description
          sizes
          sourceUrl
        }
      }
      projectFields {
        description
        projectUrl
        projectHighlights {
          detail
          name
        }
        gallery {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          altText
          sourceUrl
          sizes
          caption
          description
        }
      }
    }
    allWpProject {
      nodes {
        id
        slug
        title
      }
    }
  }
`

const WpCustomPostProject = data => {
  const project = data.data.wpProject

  const allProjects = data.data.allWpProject.nodes
  const current = allProjects.findIndex(item => project.id === item.id)
  const previous =
    allProjects[current - 1 >= 0 ? current - 1 : allProjects.length - 1]
  const next = allProjects[(current + 1) % allProjects.length]

  return (
    <Layout>
      <Seo title={project.title} />
      <div className="wrapper" id="z-project">
        <div className="row">
          <div className="col-12 mb-45">
            <hr />
            <div className="mt-10 mb-50">
              <Link className="with-arrow-left" to="/projects">
                Projects
              </Link>
            </div>
            <h2 className="my-0">{project.title}</h2>
          </div>
          <div className="col-12 mb-45">
            <div className="row">
              <div
                className="col-12 col-md-5 mb-4"
                dangerouslySetInnerHTML={{
                  __html: project.projectFields.description,
                }}
              />
              <div className="col-12 col-md-6 offset-md-1">
                <div className="row g-0">
                  {project.projectFields.projectHighlights &&
                    project.projectFields.projectHighlights.map(
                      (item, index) => {
                        return (
                          <div
                            className="col-6 col-sm-4 col-md-6 col-lg-4 highlight-item"
                            key={index}
                          >
                            <div>{item.name}</div>
                            <div
                              dangerouslySetInnerHTML={{ __html: item.detail }}
                            />
                          </div>
                        )
                      }
                    )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            {project.featuredImage ? (
              <GatsbyImage
                fluid={
                  project.featuredImage.node.localFile.childImageSharp.fluid
                }
                image={
                  project.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={project.featuredImage.node.altText || ""}
              />
            ) : (
              <StaticImage
                src="../images/placeholder.png"
                alt="image temporarily unavailable"
              />
            )}
          </div>
        </div>
        <div className="row row-44">
          {project.projectFields.gallery &&
            project.projectFields.gallery.map((image, index) => {
              return (
                <div
                  className={`col-12 ${
                    index + 1 === project.projectFields.gallery.length
                      ? ""
                      : "col-sm-6"
                  }`}
                  key={index}
                >
                  <GatsbyImage
                    fluid={image.localFile.childImageSharp.fluid}
                    image={image.localFile.childImageSharp.gatsbyImageData}
                    alt={image.altText || ""}
                  />
                </div>
              )
            })}
        </div>
        <div className="row mb-75">
          <div className="col-12 mt-45">
            <div className="row project-navigation">
              <div className="col-12 order-sm-2 col-sm-4 text-center">
                {project.projectFields.projectUrl && (
                  <a
                    className="d-inline-block blue-line font-dark-hover"
                    href={project.projectFields.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.projectFields.projectUrl.split("://")[1]}
                  </a>
                )}
              </div>
              <div className="col-6 order-sm-1 col-sm-4 d-none d-sm-block text-left">
                <Link
                  to={`/project/${previous.slug}`}
                  className="font-dark-hover"
                >
                  <div>Previous</div>
                  <div>{previous.title}</div>
                </Link>
              </div>

              <div className="col-6 order-sm-3 col-sm-4 d-none d-sm-block text-right">
                <Link to={`/project/${next.slug}`} className="font-dark-hover">
                  <div>Next</div>
                  <div>{next.title}</div>
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to={`/project/${previous.slug}`}
                    className="prev-project-arrow"
                  >
                    <img
                      src={rightArrow}
                      alt="Previous Project"
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </Link>
                </div>
                <div>
                  <Link to="/projects" className="font-dark-hover d-block">
                    View All Projects
                  </Link>
                </div>
                <div>
                  <Link
                    to={`/project/${next.slug}`}
                    className="next-project-arrow"
                  >
                    <img src={rightArrow} alt="Next Project" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WpCustomPostProject
