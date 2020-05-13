import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Button, Image, Card, CardDeck, Breadcrumb } from "react-bootstrap"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import Jumbo from "../components/jumbo"


const PageFasilitas = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulFasilitasScb{
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

      <ol className={blogStyles.posts}>
        {data.allContentfulFasilitasScb.edges.map(edge => {
          return (
            <Card style={{ width: '25rem', }}>
              <Card.Img variant="top" src={edge.node.gambarFasilitas.file.url} alt={edge.node.namaFasilitas} />
              <Card.Body>
                <Card.Title>{edge.node.namaFasilitas}</Card.Title>
              </Card.Body>
            </Card>
            
            
            // <li className={blogStyles.post}>
            //   <img src={edge.node.gambarFasilitas.file.url} alt={edge.node.namaFasilitas}/>
                
            // </li>
                  )
                }
              )
            }
      </ol>
    </Layout>
  )
}

export default PageFasilitas
