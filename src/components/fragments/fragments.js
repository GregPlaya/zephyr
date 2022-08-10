import { graphql } from "gatsby"

// https://www.gatsbyjs.com/docs/static-vs-normal-queries/

export const pageBuilderFields = graphql`
  fragment pageBuilderFields on WpPage {
    pageBuilder {
      layouts {
        ... on WpPage_Pagebuilder_Layouts_CustomCompany2Column {
          description
          fieldGroupName
          statement
          rightImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            altText
          }
        }
        ... on WpPage_Pagebuilder_Layouts_FullWidthImage {
          fieldGroupName
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        ... on WpPage_Pagebuilder_Layouts_Content2Col {
          contentLeft
          contentRight
          headline
          fieldGroupName
        }
        ... on WpPage_Pagebuilder_Layouts_Content {
          content
          fieldGroupName
        }
      }
    }
  }
`
