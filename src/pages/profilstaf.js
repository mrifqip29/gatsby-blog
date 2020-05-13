import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Button, Image, Card, CardDeck } from "react-bootstrap"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"

const ProfilStafPage = () => {
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

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>PEJABAT STRUKTURAL</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
        </div>

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>PROFIL TENAGA PENDIDIK</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
        </div>

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>PROFIL STAF</h1>
          </div>
          <div className="display-4">SMP CENDEKIA BAZNAS</div>
        </div>
      </Layout>
    </div>
  )
}

export default ProfilStafPage
