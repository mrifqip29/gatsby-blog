

const path = require("path")
const { paginate } = require('gatsby-awesome-pagination');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //     createItems({
  //       path:`page/${currentPage}`,
  //       component: path.resolve(`src/templates/blog.js`)
  //     })
  // }

  const blogTemplate = path.resolve("./src/templates/kabarterkini.js")
  const MAX_POST = 2

  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  paginate({
    createPage,
    items: result.data.allContentfulBlogPost.edges,
    itemsPerPage: MAX_POST,
    pathPrefix : '/kabarterkini',
    component: path.resolve(`./src/pages/kabarterkini.js`),
  });

  result.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/kabarterkini/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
