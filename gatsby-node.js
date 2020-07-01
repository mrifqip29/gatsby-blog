const _ = require("lodash")
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/kabarterkini.js")
  const agendaTemplate = path.resolve("./src/templates/kegiatan.js") //Bikin dlu file kegiatannya di templates
  const tagTemplate = path.resolve("./src/templates/tags-template.js")
  const MAX_POST = 4

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
      allContentfulAgenda {
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
  //Bikin postingan kabar terkini dan agenda/kegiatan
  const posts = result.data.allContentfulBlogPost.edges
  const agenda = result.data.allContentfulAgenda.edges

  posts.forEach(edge => {
    paginate({
      createPage,
      items: posts,
      itemsPerPage: MAX_POST,
      pathPrefix: "/kabarterkini",
      component: path.resolve(`./src/templates/blog.js`),
    })
  })

  posts.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/kabarterkini/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  //
  let tags = [] // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, "node.tags")) {
      tags = tags.concat(edge.node.tags)
    }
  })

  tags = _.uniq(tags) // Eliminate duplicate tags
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/kabarterkini/tag/${_.kebabCase(tag)}`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })

  agenda.forEach(edge => {
    //Ini paginate khusus buat bikin pagination doang
    paginate({
      createPage,
      items: agenda,
      itemsPerPage: MAX_POST,
      pathPrefix: "/kegiatan",
      component: path.resolve(`./src/templates/halkegiatan.js`),
    })
  })

  // Ini buat bikin agenda templatesnya bakal diambil dari file agenda di folder template (bikin dlu)
  agenda.forEach(edge => {
    createPage({
      component: agendaTemplate,
      path: `/kegiatan/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
