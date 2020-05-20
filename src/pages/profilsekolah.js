import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Image, Card, CardDeck} from "react-bootstrap"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"
import halamanStyles from "./halaman.module.scss"

const ProfilSekolahPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulJumbotronHalaman(
        jumbotronHalaman: { eq: "Halaman Profile Sekolah" }
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
        <SEO title="Profil Sekolah" />
        <Jumbo
          title="PROFIL SEKOLAH"
          nav="Tentang Kami"
          page="Profil Sekolah"
          image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
        />

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>PROFIL</h1>
          </div>
          <div className="display-4">SEKOLAH CENDEKIA BAZNAS</div>
          <p className="m-5 m-2">
            Sekolah Cendekia BAZNAS (SCB) merupakan sekolah tingkat SMP
            berkonsep asrama, bebas biaya untuk anak dhuafa berprestasi yang
            lolos seleksi dari berbagai wilayah di Indonesia.
          </p>
          <span className="px-3">
            <Button href="#sejarah" className={halamanStyles.greenButton}>
              Sejarah
            </Button>
          </span>
          <span className="px-3">
            <Button href="#visimisi" className={halamanStyles.greenButton}>
              Visi - Misi
            </Button>
          </span>
        </div>

        <div id="sejarah" className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>SEJARAH</h1>
          </div>
          <div className="display-4">SEKOLAH CENDEKIA BAZNAS</div>
          <p className="m-5 m-2">
            Sekolah Cendekia BAZNAS (SCB) merupakan sekolah tingkat SMP
            berkonsep asrama, bebas biaya untuk anak dhuafa berprestasi yang
            lolos seleksi dari berbagai wilayah di Indonesia.
          </p>
        </div>

        <div id="visimisi" className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>VISI & MISI</h1>
          </div>
          <div className="display-4">SEKOLAH CENDEKIA BAZNAS</div>
          <CardDeck className="m-5 m-2">
            <Card className="text-center" style={{borderRadius:'45px', boxShadow:'4px 4px 9px rgba(0, 0, 0, 0.15), -4px -4px 9px rgba(0, 0, 0, 0.15)'}}>
              <Card.Img variant="top" src="https://svgshare.com/i/LEV.svg"  style={{paddingTop:'5rem' ,width:'116px' , display:'block', margin:'auto', }}/>
              <Card.Body>
                <Card.Title>Visi</Card.Title>
                <Card.Text className="m-3 pb-5 text-left">
                  <strong>Sekolah Cendekia BAZNAS (SCB)</strong> merupakan sekolah tingkat SMP
                  berkonsep asrama, bebas biaya untuk anak dhuafa berprestasi
                  yang lolos seleksi dari berbagai wilayah di Indonesia
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{borderRadius:'45px', boxShadow:'4px 4px 9px rgba(0, 0, 0, 0.15), -4px -4px 9px rgba(0, 0, 0, 0.15)'}}>
              <Card.Img variant="top" src="https://svgshare.com/i/LCj.svg" style={{paddingTop:'5rem' ,width:'116px' , display:'block', margin:'auto', }}/>
              <Card.Body>
                <Card.Title>Misi</Card.Title>
                <Card.Text className="m-3 pb-5 text-left">
                  <ol>
                    <li>Mengembangkan Sekolah Model</li>
                    <br />
                    <li>
                      Mengembangkan pendidikan dan pengajran bermutu berdasarkan
                      nilai-nilai islami
                    </li>
                    <br />
                    <li>
                      Menumbuhkan budaya yang bersumber dari nilai-nilai zakat
                      bagi seluruh pemangku kepentingan an mendorong mereka
                      bermental muzaki
                    </li>
                    <br />
                    <li>Mengembangkan potensi peserta didik secara optimal</li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>

      </Layout>
    </div>
  )
}

export default ProfilSekolahPage
