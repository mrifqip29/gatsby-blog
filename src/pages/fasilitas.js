import React from "react"
import {  graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Jumbo from "../components/jumbo"


const PageFasilitas = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulFasilitasScb(sort: { fields: createdAt, order: ASC }){
        edges{
          node{
            namaFasilitas
            gambarFasilitas{
              file{url
                
            }
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <Jumbo title="Fasilitas SCB"
          nav="Tentang Kami"
          page="Fasilitas SCB"/>
      <Head title="Fasilitas Kami" />
        
        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>Fasilitas</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
        </div>
          
        <div className="container">
        <div className="row">
        {data.allContentfulFasilitasScb.edges.map(edge => {
          return (
              <div className="col-md-6 col-sm-6 py-3" >
                <div className="card" >
                  <img className="card-img-top" src={edge.node.gambarFasilitas.file.url} alt={edge.node.namaFasilitas} object-fit='contain' height="350rem"></img>
                    <div className="card-body">
                       <h5 className="card-title-center">{edge.node.namaFasilitas}</h5>

                    </div>
                </div>
              </div>
                  )
                }
              )
            }
        </div>
        </div>
    </Layout>
  )
}

export default PageFasilitas
