import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Button, Image, Card, CardDeck, Breadcrumb } from "react-bootstrap"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"

const ReportPage = () => {
  return (
    <div>
      <Layout>
        <Jumbo
        title="Annual Report"
        nav="Informasi"
        page="Annual Report" />
        <div className="container text-center my-5 py-5">
        <a href="/web/viewer.html?file=annual_report_maret.pdf">ANNUAL PDF</a>
        </div>
      </Layout>
    </div>
  )
}

export default ReportPage
