import React from "react"
import { Link , useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"

const SilabusPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulJumbotronHalaman(
        jumbotronHalaman: { eq: "Halaman Silabus" }
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
        <Jumbo title="SILABUS" nav="Informasi" page="Silabus" image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}/>
      </Layout>
    </div>
  )
}

export default SilabusPage
