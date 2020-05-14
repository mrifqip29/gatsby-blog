import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const PageKabar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAgenda {
        edges {
          node {
            lokasi
            konten
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Kabar Terkini" />

      <div id="agenda" className="container my-5 py-5">
        <div className="row">
          <div className="display-4">Kegiatan</div>
          <ol>
            {data.allContentfulAgenda.edges.map(edge => {
              return (
                <div className="card" style={{ minHeight: "50px" }}>
                  <li>
                    <h2>{edge.node.konten}</h2>
                    <p>{edge.node.lokasi}</p>
                  </li>
                </div>
              )
            })}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default PageKabar
