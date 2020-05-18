import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import blogStyles from "../pages/blog.module.scss"
import Pager from "../components/paginator"
import Kategori from "../components/kategori"
import Insta from "../components/insta"

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <div className="h1 text-center"> Kabar Terkini</div>
      <div className="row">
        <div className="col-md-9 col-lg-9">
          <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map(edge => {
              return (
                // <div className="col-lg-3 col-md-6 col-sm-12 py-1">
                <div
                  className="card"
                  style={{ minHeight: "100px", marginBottom: "30px" }}
                >
                  <div className="card-body text-center">
                    <li className={blogStyles.post}>
                      <Link to={`/kabarterkini/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                      </Link>
                    </li>
                  </div>
                </div>
              )
            })}
          </ol>
          <Pager pageContext={pageContext} />
          {/* <Kategori /> */}
        </div>
        <div className="col-md-3 col-lg-3">
          <Insta />
        </div>
      </div>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query($skip: Int, $limit: Int) {
    allContentfulBlogPost(
      sort: { fields: title, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
          gambarArtikel {
            file {
              url
            }
          }
        }
      }
    }
  }
`
export default Blog
