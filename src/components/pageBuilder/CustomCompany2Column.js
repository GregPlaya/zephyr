import * as React from "react"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "../../styles/company.css"

const CustomCompany2Column = props => {
  return (
    <>
      <div className="row mb-105" id="z-company">
        {props.mode === "normal" ? (
          <div className="col-12">
            <hr />
            <h3 className="mt-15">Company</h3>
          </div>
        ) : null}
        <div className="col-12 col-md-7">
          {props.mode === "normal" ? null : (
            <>
              <hr />
              <h2 className="mt-20">Company</h2>
            </>
          )}

          <p
            className="text-lg mt-0"
            dangerouslySetInnerHTML={{ __html: props.content.statement }}
          />
          <p dangerouslySetInnerHTML={{ __html: props.content.description }} />
          {props.mode === "normal" ? (
            <Link
              to="/projects"
              className="underline with-arrow-right"
              style={{ marginTop: "50px" }}
            >
              View Projects
            </Link>
          ) : (
            <Link
              to="/contact"
              className="underline with-arrow-right"
              style={{ marginTop: "50px" }}
            >
              Contact Us
            </Link>
          )}
        </div>
        <div
          className={`col-12 col-md-4 offset-md-1 company-right-image ${props.mode}`}
        >
          <GatsbyImage
            image={
              props.content.rightImage.localFile.childImageSharp.gatsbyImageData
            }
            alt={props.content.rightImage.altText}
          />
        </div>
      </div>
    </>
  )
}

export default CustomCompany2Column
