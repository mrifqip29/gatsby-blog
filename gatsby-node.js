const _ = require('lodash')
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
  const tagTemplate = path.resolve("./src/templates/tags-template.js")
  const MAX_POST = 2

  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
            tags
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

  const posts = result.data.allContentfulBlogPost.edges;

result.data.allContentfulBlogPost.edges.forEach(edge =>  {
  paginate({
    createPage,
    items: result.data.allContentfulBlogPost.edges,
    itemsPerPage: MAX_POST,
    pathPrefix : '/kabarterkini',
    component: path.resolve(`./src/templates/blog.js`),
    });
  })

  result.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/kabarterkini/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  let tags = [];    // Iterate through each post, putting all found tags into `tags` 



  _.each(posts, edge => {      
    if (_.get(edge, 'node.tags')) {        
      tags = tags.concat(edge.node.tags);
      }    
    });    

  tags = _.uniq(tags); // Eliminate duplicate tags 
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tag/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });
}

