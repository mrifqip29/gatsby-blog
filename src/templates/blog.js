import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import blogStyles from "../pages/blog.module.scss"
import Pager from "../components/paginator"
import Kategori from "../components/kategori"
import Insta from "../components/insta"
import Jumbo from "../components/jumbo"

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <Jumbo
        title="KABAR TERKINI"
        nav="Informasi"
        page="Halaman Kabar Terkini"
        image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
      />

      <div className="row text-center px-5">
        <div className=" col-md-8 col-lg-9 ">
          {data.allContentfulBlogPost.edges.map(edge => {
            return edge.node.gambarArtikel === null ? (
              <div
                className="card"
                style={{
                  borderRadius: "45px",
                  minHeight: "100px",
                  marginBottom: "30px",
                }}
              >
                <img
                  className="card-img-top"
                  src={
                    data.contentfulJumbotronHalaman.jumbotronGambar.fixed
                      .srcWebp
                  }
                  style={{
                    height: "20rem",
                    objectFit: "cover",
                    borderRadius: "45px 45px 0px 0px",
                  }}
                ></img>
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-8 col-lg-10 text-left pl-0">
                        <p>{edge.node.title}</p>
                      </div>

                      <div className="col-sm-12 col-md-4 pl-0 col-lg-2 text-left mb-3">
                        {edge.node.publishedDate}
                      </div>
                    </div>

                    <div className="row">
                      <p>deskripisi</p>
                    </div>
                    <div className="row">
                      <p>button</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="card"
                style={{
                  borderRadius: "45px",
                  minHeight: "100px",
                  marginBottom: "30px",
                }}
              >
                <img
                  className="card-img-top"
                  src={edge.node.gambarArtikel.file.url}
                  style={{
                    height: "20rem",
                    objectFit: "cover",
                    borderRadius: "45px 45px 0px 0px",
                  }}
                ></img>
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-8 col-lg-10 text-left pl-0">
                        <p>{edge.node.title}</p>
                      </div>

                      <div className="col-sm-12 col-md-4 col-lg-2 pl-0 text-left mb-3">
                        {edge.node.publishedDate}
                      </div>
                    </div>

                    <div className="row">
                      <p>deskripisi</p>
                    </div>
                    <div className="row">
                      <p>button</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/*          
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
                </div> */}

          <Pager pageContext={pageContext} />
        </div>
        <div className="col-md-4 col-lg-3 text-left">
          <Kategori />
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
      sort: { fields: publishedDate, order: DESC }
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
    contentfulJumbotronHalaman(
      jumbotronHalaman: { eq: "Halaman Kabar Terkini" }
    ) {
      jumbotronHalaman
      jumbotronGambar {
        fixed {
          srcWebp
        }
      }
    }
  }
`
export default Blog
