import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Button, Image, Card, CardDeck, Breadcrumb } from "react-bootstrap"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"
import halamanStyles from "./halaman.module.scss"

const Annualreportpage = () => {
  return (
    <div>
      <Layout>
        <Jumbo
          title="PROFIL SEKOLAH"
          nav="Informasi"
          page="Annual Report"
        />

        {/* breadcrumb nya lom ada */}

        <div className="container text-center my-5 py-5">
          <div className="lead bold">
            <h1>PROFIL</h1>
          </div>
          <div className="display-4">SEKOLAH CENDEKIA BAZNAS</div>
          <span className="px-3">
            <a href="/web/viewer.html?file=%2fannual_report_maret.pdf" class="button">Annual Report 2020</a>
          </span>
        </div>
        </div>
      </Layout>
    </div>
  )
}

export default Annualreportpage
