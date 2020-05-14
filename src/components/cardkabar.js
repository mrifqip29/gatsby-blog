import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import layoutStyles from "./layout.module.scss"

const CardKabar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
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
    }
  `)

  return (
    <div id="agenda" className="container my-5 py-5">
      <div className="row">
        <div className="display-4">Kabar Terkini</div>
        <p className="m-5 m-5">
          Kumpulan berita yang memuat berita terkini Sekolah Cendikia BAZNAS
          mengenai prestasi, kegiatan kesiswaan, dsb.
        </p>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-12 py-1">
              <div className="card" style={{ minHeight: "200px" }}>
                <img
                  className="card-img-top"
                  src={edge.node.gambarArtikel.fixed.src}
                  alt={edge.node.title}
                  object-fit="contain"
                ></img>

                <div className="card-body text-center">
                  <Link
                    to={`/kabarterkini/${edge.node.slug}`}
                    className={layoutStyles.selengkapnya}
                  >
                    <h2
                      className="card-title font-weight-bold"
                      className={layoutStyles.selengkapnya}
                    >
                      {edge.node.title}
                    </h2>
                    <p className="card-title">{edge.node.publishedDate}</p>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardKabar
