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
      allContentfulProfilTenagaDidik(sort: {fields: [role, jabatanTenagaDidik, namaTenagaDidik], order: [ASC,ASC,ASC] }){
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
      allContentfulProfilStaf(sort: {fields: [role, jabatanStaf, namaStaf], order: [ASC,ASC,ASC] }){
        edges{
          node{
            namaStaf
            jabatanStaf
          }
        }
      }
      contentfulJumbotronHalaman(
        jumbotronHalaman: { eq: "Halaman Profile Tendik" }
      ) {
        jumbotronHalaman
        jumbotronGambar {
          fixed {
            srcWebp
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
          image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
        />

        {/* breadcrumb nya lom ada */}


        <div className="container text-center my-5 py-5 ">
          <div className="lead bold">
            <div className="display-4 font-weight-bold"> PROFIL </div>
            <div className="display-4 font-weight-bold"> TENAGA PENDIDIK </div>
          </div>
          <div className="h1">SEKOLAH CENDEKIA BAZNAS</div>
        </div>

        <div className="col-3 border-top m-auto"></div> {/*Kacao karna marginnya auto, ganti bikin css aja*/}
        



        <div className="container my-5 py-5">
          <div className="row">
            {data.allContentfulProfilTenagaDidik.edges.map(edge=>{
              return (
                <div className="col-md-4 col-sm-6 col-xs-12  py-3" >
                  <div className="card border-0">
                    <img className="card-img-top" src={edge.node.fotoTenagaDidik.file.url} alt={edge.node.namaTenagaDidik} object-fit="cover" height="525vh">
                    </img>
                    <div className="card-body text-center">
                      <h4 className="card-title font-weight-bold">{edge.node.namaTenagaDidik}</h4>
                      <h5 className="card-title">{edge.node.jabatanTenagaDidik}</h5>
                    </div>
                  </div>
                  
                    
                </div>
              )
            })}
          </div>
        </div>


        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1 className="display-4 font-weight-bold"> PROFIL STAFF </h1>
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
                  <div className="card border-0">
                    <div className="card-body text-center">
                      <h5 className="card-title font-weight-bold">{edge.node.namaStaf} </h5>
                      <h6 className="card-title">{edge.node.jabatanStaf}</h6>
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
