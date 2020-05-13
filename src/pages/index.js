import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"

import halamanStyles from "./halaman.module.scss"
import Countdown from "../components/countdown"
import DalamAngka from "../components/dalamangka"

const currentDate = new Date()
const year =
  currentDate.getMonth() === 11 && currentDate.getDate() > 23
    ? currentDate.getFullYear() + 1
    : currentDate.getFullYear()

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCountdown {
        judul
        tenggatWaktu
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Beranda" />

      <Banner />

      <div className="container text-center my-5 py-5">
        <div className="lead bold">
          <h1
            style={{
              fontWeight: 100,
              fontSize: "1rem",
              letterSpacing: "15px",
            }}
          >
            PROFIL
          </h1>
        </div>
        <div className="display-4">Sekolah Cendekia BAZNAS</div>
        <p className="m-5 m-5 ">
          Sekolah Cendekia BAZNAS adalah sekolah inklusi bebas biaya dan
          berasrama bagi dhuafa dan yatim untuk putra-putri Indonesia yang
          berada di bawah pengelolaan Badan Amil Zakat Nasional (BAZNAS).
        </p>
        
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 py-2">
          <span className="px-3">
            <Button style={{
              minWidth:"177px"
            }}
              href="#scbdalamangka"
              className={halamanStyles.greenButton}
              variant="outline-primary"
            >
              SCB dalam Angka
            </Button>
          </span>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 py-2">
          <span className=" px-3">
            <Button style={{
              minWidth:"177px"
            }}
              href="#agenda"
              className={halamanStyles.greenButton}
              variant="outline-primary"
            >
              Agenda
            </Button>
          </span>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 py-2">
          <span className="px-3">
            <Button style={{
              minWidth:"177px"
            }}
              href="#beritaterkini"
              className={halamanStyles.greenButton}
              variant="outline-primary"
            >
              Berita terkini
            </Button>
          </span>
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-12 py-2">
          <span className="px-3">
            <Button style={{
              minWidth:"177px"
            }}
              href="#scbdalam24jam"
              className={halamanStyles.greenButton}
              variant="outline-primary"
            >
              SCB dalam 24 Jam
            </Button>
          </span>
        </div>
      </div>
      </div>

      <DalamAngka />

      <div className="container text-center my-5 py-5">
        <div className="lead bold">
          <div className="display-4">{data.contentfulCountdown.judul}</div>
        </div>
        <div
          className="display-4"
          style={{
            fontWeight: 100,
            fontSize: "1rem",
            letterSpacing: "15px",
            marginTop: "5px",
            marginBottom: "30px",
          }}
        >
          HITUNG MUNDUR
<<<<<<< HEAD
        </div>  
        <Countdown date={data.contentfulCountdown.tenggatWaktu} />
=======
        </div>
        <Countdown
          className="col-lg-12 col-md-6 col-sm-6"
          date={data.contentfulCountdown.tenggatWaktu}
        />
>>>>>>> ba85ee86db28baf4a3e76e312c64c25247ca168c
      </div>

      <div id="agenda" className="container my-5 py-5">
        <div className="display-4">Agenda</div>
        <div className="row pt-5 pb-2">
<<<<<<< HEAD

          <div className="col-md-3 col-sm-12 py-2">
=======
          <div className="col-lg-3 col-md-6 col-sm-12 py-2">
>>>>>>> ba85ee86db28baf4a3e76e312c64c25247ca168c
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="h4">20</div>
                    <div className="h3">Nov</div>
                  </div>
                  <div className="col">
                    <div>Gema Akbar</div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem, ipsum.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="col-md-3 col-sm-12 py-2">
=======
          <div className="col-lg-3 col-md-6 col-sm-12 py-2">
>>>>>>> ba85ee86db28baf4a3e76e312c64c25247ca168c
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="display-4">20</div>
                    <div className="h3">Nov</div>
                  </div>
                  <div className="col">
                    <div>Gema Akbar</div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem, ipsum.</div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div><div className="col-md-3 col-sm-12 py-2">
=======
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-2">
>>>>>>> ba85ee86db28baf4a3e76e312c64c25247ca168c
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="display-4">20</div>
                    <div className="h3">Nov</div>
                  </div>
                  <div className="col">
                    <div>Gema Akbar</div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem, ipsum.</div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div><div className="col-md-3 col-sm-12 py-2">
=======
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-2">
>>>>>>> ba85ee86db28baf4a3e76e312c64c25247ca168c
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="display-4">20</div>
                    <div className="h3">Nov</div>
                  </div>
                  <div className="col">
                    <div>Gema Akbar</div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem, ipsum.</div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        <div className="float-right">Lihat lebih lengkap</div>
      </div>
    </Layout>
  )
}

export default IndexPage
