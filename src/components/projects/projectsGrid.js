import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import { motion, AnimatePresence } from "framer-motion"

const m_projects = {
  hidden: { opacity: 1, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easing",
      duration: 0.3,
      delay: 0.1,
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
}

const m_project = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
}

const ProjectsGrid = () => {
  const [activeTag, setActiveTag] = useState("All Projects")

  const data = useStaticQuery(graphql`
    query allProjects {
      allWpProject(filter: { status: { eq: "publish" } }) {
        nodes {
          title
          id
          slug
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
              id
              sourceUrl
              sizes
              altText
              caption
              description
            }
          }
          terms {
            nodes {
              ... on WpProjectTag {
                id
                name
              }
            }
          }
        }
      }
      allWpProjectTag(
        filter: { count: { gt: 0 } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          count
        }
      }
    }
  `)

  const handleTag = tagName => {
    setActiveTag(tagName)
  }

  const projects = data.allWpProject.nodes
  const tags = data.allWpProjectTag.nodes
  return (
    <section>
      <div className="row" id="z-projectGrid">
        <div className="col">
          <hr className="mb-15" />
          <h3 className="mt-0 mb-25">Projects</h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              type: "easing",
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <div className="tags d-flex flex-row flex-wrap align-items-center">
              <div style={{ width: "100%" }}>Sort By</div>
              {/* <div className={`tag ${activeTag === null ? "active" : ""}`}>
                <button
                  className={`btn btn-sm ${
                    activeTag === null ? "btn-blue" : "btn-blue-outline"
                  }`}
                  onClick={() => handleTag(null)}
                >
                  All Projects
                </button>
              </div> */}
              {tags &&
                tags.map(tag => (
                  <div
                    key={tag.id}
                    className={`tag ${activeTag === tag.name ? "active" : ""}`}
                  >
                    <button
                      className={`btn btn-sm ${
                        activeTag === tag.name ? "btn-blue" : "btn-blue-outline"
                      }`}
                      onClick={() => handleTag(tag.name)}
                    >
                      {tag.name}
                    </button>
                  </div>
                ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={m_projects}>
            <div className="row projects mb-5">
              <AnimatePresence>
                {projects &&
                  projects.map(project => {
                    const tags = project.terms
                      ? project.terms.nodes.map(tag => tag.name)
                      : []
                    if (activeTag === null || tags.includes(activeTag)) {
                      return (
                        <motion.div
                          key={project.id}
                          className="col-12 col-sm-6 col-md-4"
                          variants={m_project}
                        >
                          <div className="project-item">
                            <Link to={project.uri}>
                              <figure>
                                {project.featuredImage ? (
                                  <GatsbyImage
                                    fluid={
                                      project.featuredImage.node.localFile
                                        .childImageSharp.fluid
                                    }
                                    image={
                                      project.featuredImage.node.localFile
                                        .childImageSharp.gatsbyImageData
                                    }
                                    alt={project.title}
                                  />
                                ) : (
                                  <StaticImage
                                    src="../../images/placeholder.png"
                                    alt="image temporarily unavailable"
                                  />
                                )}
                              </figure>
                              <div className="project-item_details">
                                <h4>
                                  <span>{project.title}</span>
                                </h4>
                              </div>
                            </Link>
                          </div>
                        </motion.div>
                      )
                    } else {
                      return null
                    }
                  })}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
