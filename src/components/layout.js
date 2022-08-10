/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"
import "../styles/spacings.css"
import "../styles/buttons.css"

const Layout = ({ headerMode, children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header
          headerMode={headerMode}
          pageInfo={pageInfo}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "linear",
            duration: 0.5,
            delay: 0,
          }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
