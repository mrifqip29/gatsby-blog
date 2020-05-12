import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"

import halamanStyles from "./halaman.module.scss"

const IndexPage = () => (
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
        Sekolah Cendekia Baznas adalah sekolah inklusi bebas biaya dan berasrama
        bagi dhuafa dan yatim untuk putra-putri Indonesia yang berada di bawah
        pengelolaan Badan Amil Zakat Nasional (BAZNAS).
      </p>
      <span className="px-3">
        <Button
          href="#scbdalamangka"
          className={halamanStyles.greenButton}
          variant="outline-primary"
        >
          SCB dalam Angka
        </Button>
      </span>
      <span className="px-3">
        <Button
          href="#agenda"
          className={halamanStyles.greenButton}
          variant="outline-primary"
        >
          Agenda
        </Button>
      </span>
      <span className="px-3">
        <Button
          href="#beritaterkini"
          className={halamanStyles.greenButton}
          variant="outline-primary"
        >
          Berita terkini
        </Button>
      </span>
      <span className="px-3">
        <Button
          href="#scbdalam24jam"
          className={halamanStyles.greenButton}
          variant="outline-primary"
        >
          SCB dalam 24 Jam
        </Button>
      </span>
    </div>

    <div id="scbdalamangka" className="container text-center my-5 py-5">
      <div className="lead bold">
        <h1
          style={{
            fontWeight: 100,
            fontSize: "1rem",
            letterSpacing: "15px",
          }}
        >
          JELAJAHI
        </h1>
      </div>
      <div className="display-4">SCB dalam Angka </div>
      <div className="row py-4">
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <div className="display-4">44</div>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <div className="display-4">44</div>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <div className="display-4">44</div>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <div className="display-4">44</div>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container text-center my-5 py-5">
      <div className="lead bold">
        <h1>Penerimaan Siswa Baru</h1>
      </div>
      <div
        className="display-4"
        style={{
          fontWeight: 100,
          fontSize: "1rem",
          letterSpacing: "15px",
        }}
      >
        HITUNG MUNDUR
      </div>
      <div className="card-group py-5">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <span className="display-4">00</span>
            </p>
            <p className="card-text">
              <small className="text-muted">HARI</small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <span className="display-4">00</span>
            </p>
            <p className="card-text">
              <small className="text-muted">JAM</small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <span className="display-4">00</span>
            </p>
            <p className="card-text">
              <small className="text-muted">MENIT</small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <span className="display-4">00</span>
            </p>
            <p className="card-text">
              <small className="text-muted">DETIK</small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="agenda" className="container my-5 py-5">
      <div className="display-4">Agenda</div>
      <div className="row pt-5 pb-2">
        <div className="col">
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
        </div>
        <div className="col">
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
        </div>
        <div className="col">
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
        </div>
        <div className="col">
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
        </div>
      </div>
      <div className="float-right">Lihat lebih lengkap</div>
    </div>
  </Layout>
)

export default IndexPage
