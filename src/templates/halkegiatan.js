import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import blogStyles from "../pages/blog.module.scss"
import Pager from "../components/paginator"
import Kategori from "../components/kategori"
import Insta from "../components/insta2"
import Jumbo from "../components/jumbokegiatan"

const Halkegiatan = ({ data, pageContext }) => {
  return (
    <Layout>
      <Jumbo
        title="KEGIATAN"
        page="Halaman Kegiatan"
        image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
      />

      <div className="row text-center px-5">
        <div className=" col-md-8 col-lg-9 ">
          {data.allContentfulAgenda.edges.map(edge => {
            return edge.node.gambarKegiatan === null ? (
              <Link to={`/kegiatan/${edge.node.slug}`}>
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
                        <div className="col-sm-12 col-md-8 col-lg-10 text-left pl-3 pb-3">
                          <h4 style={{ color: "#005131" }}>
                            {edge.node.konten}
                          </h4>
                        </div>

                        <div className="col-sm-12 col-md-4 pl-0 col-lg-2 text-left mb-3">
                          {edge.node.tanggalm}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={`/kegiatan/${edge.node.slug}`}>
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
                    src={edge.node.gambarKegiatan.file.url}
                    style={{
                      height: "20rem",
                      objectFit: "cover",
                      borderRadius: "45px 45px 0px 0px",
                    }}
                  ></img>
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-10 text-left pl-3 pb-3">
                          <h4 style={{ color: "#005131" }}>
                            {edge.node.konten}
                          </h4>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-2 pl-0 text-left mb-3">
                          {edge.node.tanggalm}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
          <Insta />
        </div>
      </div>
    </Layout>
  )
}

Halkegiatan.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query($skip: Int, $limit: Int) {
    allContentfulAgenda(
      sort: { fields: tanggalm, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          konten
          tanggalm(formatString: "MMMM Do, YYYY")
          tanggals
          lokasi
          slug
          body {
            json
          }
          gambarKegiatan {
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
export default Halkegiatan
