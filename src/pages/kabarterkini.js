import React from "react"
import { Link, graphql} from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
<<<<<<< HEAD

=======
import Pager from "../components/paginator"
>>>>>>> 75ff498e64715633675e09d98059bdd409cc29b3

const PageKabar = ({data, pageContext}) => {
    return (
      <Layout>
        <SEO title= "Blog Posts" />
        <h1> Blog Posts </h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/kabarterkini/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
        <Pager pageContext= {pageContext} />
      </Layout>
    )
  }

PageKabar.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const query = graphql`
query ($skip: Int!, $limit:Int!) {
      allContentfulBlogPost(
      sort: {fields: title, order: DESC}
      skip : $skip
      limit: $limit
      ) {
        edges {
          node {
            id
            title
            slug
            publishedDate
            gambarArtikel{
              file{url}
            }
          }
        }
      }
    }
<<<<<<< HEAD
  `)
  return (
    <Layout>

      <SEO title="Kabar Terkini" />

      <h1>Kabar Terkini</h1>
      
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/kabarterkini/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <Kategori/>
    </Layout>
  )
}
=======
`
  
>>>>>>> 75ff498e64715633675e09d98059bdd409cc29b3

export default PageKabar