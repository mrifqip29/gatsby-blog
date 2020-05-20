import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PropTypes from "prop-types"

import Head from "../components/head"
import Pager from "../components/paginator"
import Kategori from "../components/kategori"
import Insta from "../components/insta2"
import Jumbo from "../components/jumbo"

const Tags = ({ data,pageContext }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allContentfulBlogPost;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  }  berkategori "${tag}" :`;
  return (
    <Layout>
          <Jumbo
            title="KABAR TERKINI"
            nav="Informasi"
            page="Halaman Kabar Terkini"
            image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
          />
          <Head title="Halaman Kabar Terkini" />
          <div className=" col-md-8 col-lg-9 text-center">
            <h1 className=" px-5"> {tagHeader} </h1>
          </div>
          <div className="row text-center px-5 py-3">

            <div className=" col-md-8 col-lg-9 ">
              {data.allContentfulBlogPost.edges.map(edge => {
                return edge.node.gambarArtikel === null ? (
                  <Link to={`/kabarterkini/${edge.node.slug}`} style={{textDecoration:'none'}}>
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
                            <h4 style={ {color:'#005131'}}>{edge.node.title}</h4>
                          </div>

                          <div className="col-sm-12 col-md-4 pl-0 col-lg-2 text-left mb-3">
                            {edge.node.publishedDate}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  </Link>
                ) : (
                  <Link to={`/kabarterkini/${edge.node.slug}`} style={{textDecoration:'none'}}>
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
                          <div className="col-sm-12 col-md-8 col-lg-10 text-left pl-3 pb-3">
                            <h4 style={ {color:'#005131'}}>{edge.node.title}</h4>
                          </div>

                          <div className="col-sm-12 col-md-4 col-lg-2 pl-0 text-left mb-3">
                            {edge.node.publishedDate}
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
              <Kategori />
              <Insta />
            </div>
          </div>
        </Layout>
        )
      }

      Tags.propTypes = {
        data: PropTypes.object.isRequired,
        pageContext: PropTypes.object.isRequired,
      }

      
export const tagQuery = graphql`
  query($tag: String, $skip: Int, $limit: Int) {
    allContentfulBlogPost(
      sort: {fields: publishedDate, order: DESC }
      filter: { tags: {in: [$tag]} }
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
            id
            title
            tags
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            gambarArtikel {
              file {url}
            }
          }
        }
      }
      contentfulJumbotronHalaman(jumbotronHalaman: { eq: "Halaman Kegiatan" }) {
        jumbotronHalaman
        jumbotronGambar {
          fixed {
            srcWebp
          }
        }
      }
    }
  `
export default Tags;