import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const FullWidthImage = props => {
  return (
    <section className="row">
      <div className="col text-center">
        <GatsbyImage
          image={props.image.localFile.childImageSharp.gatsbyImageData}
          alt={props.image.altText}
        />
      </div>
    </section>
  )
}

export default FullWidthImage
