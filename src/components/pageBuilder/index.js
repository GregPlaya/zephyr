// {useStaticQuery}s cannot be used in a component unless it is truly static.
// For example, the code below: where getting the pageBuilder content from ACF fields for a page/post type.
// I tried, as you can see.
// https://github.com/gatsbyjs/gatsby/issues/5069
// https://github.com/gatsbyjs/gatsby/discussions/10482
// https://www.gatsbyjs.com/docs/static-vs-normal-queries/
//
// Hence the name "static query"

// import React from "react"

// import { useStaticQuery, graphql } from "gatsby"

// import FullWidthImage from "./fullWidthImage"
// import SimpleContent from "./simpleContent"
// import Content2Col from "./Content2Col"
// import CustomCompany2Column from "./CustomCompany2Column"

// const PageBuilder = (layouts, slug) => {
//   const data = useStaticQuery(graphql`
//     query pageBuilderQuery {
//       wpPage(slug: { eq: "...slug" }) {
//         id
//         pageBuilder {
//           layouts {
//             ... on WpPage_Pagebuilder_Layouts_CustomCompany2Column {
//               description
//               fieldGroupName
//               statement
//             }
//             ... on WpPage_Pagebuilder_Layouts_FullWidthImage {
//               fieldGroupName
//             }
//             ... on WpPage_Pagebuilder_Layouts_Content2Col {
//               contentLeft
//               contentRight
//               headline
//               fieldGroupName
//             }
//             ... on WpPage_Pagebuilder_Layouts_Content {
//               content
//               fieldGroupName
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       {layouts && (
//         <div className="wrapper container-fluid">
//           {layouts.map((layout, index) => {
//             if (
//               layout.fieldGroupName ===
//               "Page_Pagebuilder_Layouts_FullWidthImage"
//             ) {
//               return <FullWidthImage key={index} image={layout.image} />
//             } else if (
//               layout.fieldGroupName === "Page_Pagebuilder_Layouts_Content"
//             ) {
//               return <SimpleContent key={index} content={layout.content} />
//             } else if (
//               layout.fieldGroupName === "Page_Pagebuilder_Layouts_Content2Col"
//             ) {
//               return <Content2Col key={index} content={layout} />
//             } else if (
//               layout.fieldGroupName ===
//               "Page_Pagebuilder_Layouts_CustomCompany2Column"
//             ) {
//               return (
//                 <CustomCompany2Column
//                   key={index}
//                   mode="normal"
//                   content={layout}
//                 />
//               )
//             }
//           })}
//         </div>
//       )}
//     </>
//   )
// }

// export default PageBuilder
