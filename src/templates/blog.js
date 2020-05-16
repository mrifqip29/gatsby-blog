import React from "react"
import { Link, graphql} from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import blogStyles from "../pages/blog.module.scss"
import Pager from "../components/paginator"

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
}`  



export default Blog