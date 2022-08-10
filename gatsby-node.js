/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  // code for the next steps will go in here.
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPost } = result.data

  // Define the template to use
  const template = require.resolve(`./src/templates/WpPost.js`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        path: post.slug,
        component: template,
        context: post,
      })
    })
  }

  const resultProject = await graphql(`
    {
      allWpProject {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (resultProject.errors) {
    reporter.error("There was an error fetching posts", resultProject.errors)
  }

  const { allWpProject } = resultProject.data

  // Define the template to use
  const templateProject = require.resolve(
    `./src/templates/WpCustomPostProject.js`
  )

  if (allWpProject.nodes.length) {
    allWpProject.nodes.map(post => {
      actions.createPage({
        path: "project/" + post.slug,
        component: templateProject,
        context: post,
      })
    })
  }

  // Leadership
  const resultLeadership = await graphql(`
    {
      allWpLeadership {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (resultLeadership.errors) {
    reporter.error("There was an error fetching posts", resultLeadership.errors)
  }

  const { allWpLeadership } = resultLeadership.data

  // Define the template to use
  const templateLeadership = require.resolve(
    `./src/templates/WpCustomPostLeadership.js`
  )
  if (allWpLeadership.nodes.length) {
    allWpLeadership.nodes.map(post => {
      actions.createPage({
        path: "leadership/" + post.slug,
        component: templateLeadership,
        context: post,
      })
    })
  }
}

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WP_MediaItem: {
      imageFile: {
        type: `File`,
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl), // if encoding is unnecessary just replace with source.sourceUrl
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
