import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Button, Image, Card, CardDeck } from "react-bootstrap"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"

const ProfilSekolahPage = () => {
  return (
    <div>
      <Layout>
        <Jumbo props="Tentang Kami" />

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>PROFIL</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
          <p className="m-5 m-2">
            SMP Cendekia BAZNAS (SCB) merupakan sekolah tingkat SMP berkonsep
            asrama, bebas biaya untuk anak dhuafa berprestasi yang lolos seleksi
            dari berbagai wilayah di Indonesia.
          </p>
          <span className="px-3">
            <Button className="px-4 py-3 " variant="outline-primary">
              Sejarah
            </Button>
          </span>
          <span className="px-3">
            <Button className="px-4 py-3" variant="outline-primary">
              Visi-Misi
            </Button>
          </span>
          <span className="px-3">
            <Button className="px-4 py-3" variant="outline-primary">
              Akreditas
            </Button>
          </span>
        </div>

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>SEJARAH</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
          <p className="m-5 m-2">
            SMP Cendekia BAZNAS (SCB) merupakan sekolah tingkat SMP berkonsep
            asrama, bebas biaya untuk anak dhuafa berprestasi yang lolos seleksi
            dari berbagai wilayah di Indonesia.
          </p>
        </div>

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>VISI & MISI</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
          <CardDeck className="m-5 m-2">
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Visi</Card.Title>
                <Card.Text className="m-3">
                  SMP Cendekia BAZNAS (SCB) merupakan sekolah tingkat SMP
                  berkonsep asrama, bebas biaya untuk anak dhuafa berprestasi
                  yang lolos seleksi dari berbagai wilayah di Indonesia
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Misi</Card.Title>
                <Card.Text className="m-3 text-left">
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

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>AKREDITASI</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
          <Image className="m-4" src="holder.js/100px250" thumbnail />
        </div>
      </Layout>
    </div>
  )
}

export default ProfilSekolahPage
