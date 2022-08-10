import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

import "../../styles/hero.css"

const ProjectHero = props => {
  const image = getImage(props.image.localFile.childImageSharp.gatsbyImageData)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <div>
      <BackgroundImage
        Tag="section"
        className="hero-project d-flex align-items-center justify-content-center"
        style={{
          backgroundPosition: "top center",
        }}
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <div className="nav-fader"></div>

        <div className="wrapper">
          <h1 className="color-white hero-details caps">
            {props.content.headline}
          </h1>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default ProjectHero
