import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Button, Image, Card, CardDeck } from "react-bootstrap"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"

// Kurang parameter role derajat untuk melakukan sorting
const ProfilStafPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulProfilTenagaDidik{
        edges{
          node{
            namaTenagaDidik
            jabatanTenagaDidik
            fotoTenagaDidik{
              file{url}
            }
          }
        }
      }
      allContentfulProfilStaf(sort: { fields: namaStaf, order: ASC }){
        edges{
          node{
            namaStaf
            jabatanStaf
          }
        }
      }
    }
  `)
  
  return (
    <div>
      <Layout>
        <SEO title="Profil Pendidik & Staf" />
        <Jumbo
          title="PROFIL PENDIDIK & STAF"
          nav="Tentang Kami"
          page="Profil Pendidik & Staf"
        />

        {/* breadcrumb nya lom ada */}





        <div className="container text-center my-5 py-5 ">
          <div className="lead bold">
            <div className="display-3 font-weight-bold"> PROFIL </div>
            <div className="display-3 font-weight-bold"> TENAGA PENDIDIK </div>
          </div>
          <div className="h1">SEKOLAH CENDEKIA BAZNAS</div>
        </div>

        <div className="col-3 border-top m-auto"></div> {/*Kacao karna marginnya auto, ganti bikin css aja*/}
        



        <div className="container my-5 py-5">
          <div className="row">
            {data.allContentfulProfilTenagaDidik.edges.map(edge=>{
              return (
                <div className="col-md-4 col-sm-4 py-3" >
                  <div className="card">
                    <img className="card-img-top" src={edge.node.fotoTenagaDidik.file.url} alt={edge.node.namaTenagaDidik} object-fit='contain' height="456.49px">
                    </img>
                    <div className="card-body text-center">
                      <h2 className="card-title font-weight-bold">{edge.node.namaTenagaDidik}</h2>
                      <h2 className="card-title">{edge.node.jabatanTenagaDidik}</h2>
                    </div>
                  </div>
                  
                    
                </div>
              )
            })}
          </div>
        </div>


        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <div className="display-3 font-weight-bold"> PROFIL STAFF </div>
          </div>
          <div className="h1">SEKOLAH CENDEKIA BAZNAS</div>
        </div>

        <div className="col-3 border-top m-auto"></div> {/*Kacao karna marginnya auto, ganti bikin css aja*/}


          {/*Belum bikin model buat stafnya*/}
         <div className="container my-5 py-5">
          <div className="row">
            {data.allContentfulProfilStaf.edges.map(edge => {
              return (
                <div className="col-md-4 col-sm-4 py-3" >
                  <div className="card">
                    <div className="card-body text-center">
                      <h2 className="card-title font-weight-bold">{edge.node.namaStaf} </h2>
                      <h2 className="card-title">{edge.node.jabatanStaf}</h2>
                    </div>
                  </div>
                  
                    
                </div>
              )
            })}
          </div>
        </div>



      </Layout>
    </div>
  )
}

export default ProfilStafPage
