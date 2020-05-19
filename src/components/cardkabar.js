import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import layoutStyles from "./layout.module.scss"

const CardKabar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: ASC }
        limit: 3
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            gambarArtikel {
              file {
                url
              }
              fixed(width: 200, height: 200, quality: 80) {
                src
              }
            }
          }
        }
      }

      contentfulJumbotronHalaman(jumbotronHalaman: { eq: "Default" }) {
        jumbotronHalaman
        jumbotronGambar {
          fixed(width: 200, height: 200, quality: 80) {
            srcWebp
          }
        }
      }
    }
  `)

  return (
    <div id="agenda" className="container my-5 py-5">
      <div className="row pb-3">
        <div className="display-4">Kabar Terkini</div>
        <p className="my-5 mr-5">
          Kumpulan berita yang memuat berita terkini Sekolah Cendikia BAZNAS
          mengenai prestasi, kegiatan kesiswaan, dsb.
        </p>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-12 py-1 pl-0">
              <div className="card" style={{ minHeight: "200px" }}>
                {edge.node.gambarArtikel === null ? (
                  <div className="card-body text-left">
                    <img
                      className="card-img-top"
                      src={
                        data.contentfulJumbotronHalaman.jumbotronGambar.fixed
                          .srcWebp
                      }
                      alt={edge.node.title}
                    ></img>
                    <Link
                      to={`/kabarterkini/${edge.node.slug}`}
                      className={layoutStyles.selengkapnya}
                    >
                      <h3
                        className="card-title font-weight-bold"
                        className={layoutStyles.selengkapnya}
                      >
                        {edge.node.title}
                      </h3>
                    </Link>
                    <p className="card-title">{edge.node.publishedDate}</p>
                  </div>
                ) : (
                  <div className="card-body text-center">
                    <img
                      className="card-img-top"
                      src={edge.node.gambarArtikel.fixed.src}
                      alt={edge.node.title}
                      object-fit="contain"
                    ></img>

                    <div className="card-body text-left">
                      <Link
                        to={`/kabarterkini/${edge.node.slug}`}
                        className={layoutStyles.selengkapnya}
                      >
                        <h3
                          className="card-title font-weight-bold"
                          className={layoutStyles.selengkapnya}
                        >
                          {edge.node.title}
                        </h3>
                      </Link>
                      <p className="card-title">{edge.node.publishedDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <Link
        className={`float-right ${layoutStyles.selengkapnya}`}
        to="/kabarterkini"
      >
        Lihat Selengkapnya
      </Link>
    </div>
  )
}

export default CardKabar
