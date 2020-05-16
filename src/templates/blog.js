import React from "react"
import { Link, graphql} from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"
import Pager from "../components/paginator"
import Kategori from "../components/kategori"


const Blog =  ({data, pageContext}) => {
    return (
      <Layout>
        <SEO title= "Blog Posts" />
        <div className="h1 text-center"> Kabar Terkini</div>
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

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}



export const query = graphql`
query ($skip: Int, $limit:Int) {
allContentfulBlogPost(
          sort: {fields: title, order: DESC}
          skip: $skip
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
<<<<<<< HEAD:src/pages/kabarterkini.js
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
=======
}`  


>>>>>>> 3d56a62d1a2180b591f4e7c5b9e845234f89de0d:src/templates/blog.js

export default Blog