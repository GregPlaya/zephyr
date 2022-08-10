import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import rightArrow from "../../../static/arrow-right.svg"

// Import Swiper styles
//import "swiper/swiper.min.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "../../styles/recentProjects.css"
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper"
// install Swiper modules
SwiperCore.use([Navigation, Thumbs])

const RecentProjects = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const handleUpdateSwiper = sw => {
    setThumbsSwiper(sw)
  }

  const data = useStaticQuery(graphql`
    query recentProjects {
      allWpProject(filter: { status: { eq: "publish" } }, limit: 6) {
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
        }
      }
    }
  `)

  return (
    <section className="row" id="z-recentProjects">
      <div className="col-12">
        <hr />
        <div className="d-md-flex justify-content-between align-items-center mt-4 mb-50">
          <h2 className="line-height-reset my-0">Projects</h2>
          <div>
            <Link to="/projects" className="underline with-arrow-right">
              View Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="col-12 mb-30">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {/* Main slider here */}
          {data.allWpProject.nodes &&
            data.allWpProject.nodes.map(project => (
              <SwiperSlide key={project.id}>
                <Link to={project.uri}>
                  <div className="project-item">
                    <figure>
                      {project.featuredImage ? (
                        <GatsbyImage
                          fluid={
                            project.featuredImage.node.localFile.childImageSharp
                              .fluid
                          }
                          image={
                            project.featuredImage.node.localFile.childImageSharp
                              .gatsbyImageData
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
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="col-12">
        <div className="d-flex justify-content-between">
          <div className="swiper-button-prev-custom">
            <img
              src={rightArrow}
              alt="Previous Slide"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <h4 className="text-center text-blue text-normal my-0">
            Recent Projects
          </h4>
          <div className="swiper-button-next-custom">
            <img src={rightArrow} alt="Next Slide" />
          </div>
        </div>
      </div>
      {/* Thumbs here */}
      <div className="col-12">
        <Swiper
          onSwiper={swiper => handleUpdateSwiper(swiper)}
          spaceBetween={20}
          slidesPerView={2}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
          }}
        >
          {data.allWpProject.nodes &&
            data.allWpProject.nodes.map(project2 => (
              <SwiperSlide key={project2.id}>
                <div className="project-item">
                  <figure>
                    {project2.featuredImage ? (
                      <GatsbyImage
                        image={
                          project2.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={project2.title}
                      />
                    ) : (
                      <StaticImage
                        src="../../images/placeholder.png"
                        alt="image temporarily unavailable"
                      />
                    )}
                  </figure>
                  <div className="project-item_details d-flex flex-column justify-content-end">
                    <h4>
                      <span>{project2.title}</span>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="text-center my-4">
        <Link to="/projects" className="text-center underline font-dark-hover">
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export default RecentProjects
