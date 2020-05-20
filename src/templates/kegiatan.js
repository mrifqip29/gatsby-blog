import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"
import Jumbo from "../components/jumbo"

export const query = graphql`
  query($slug: String!) {
    contentfulAgenda(slug: { eq: $slug }) {
      tanggalm
      tanggals
      konten
      lokasi
      slug
      body {
        json
      }
      gambarKegiatan {
        file {
          url
        }
      }
    }

    contentfulJumbotronHalaman(jumbotronHalaman: { eq: "Default" }) {
      jumbotronHalaman
      jumbotronGambar {
        fixed {
          srcWebp
        }
      }
    }
  }
`

const Kegiatan = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.konten["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      {props.data.contentfulAgenda.gambarKegiatan === null ? (
        <Jumbo
          title={props.data.contentfulAgenda.konten}
          nav="Halaman Kegiatan"
          page={props.data.contentfulAgenda.konten}
          image={
            props.data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp
          }
        />
      ) : (
        <Jumbo
          title={props.data.contentfulAgenda.konten}
          nav="Kegiatan"
          page={props.data.contentfulAgenda.konten}
          image={props.data.contentfulAgenda.gambarKegiatan.file.url}
        />
      )}

      <Head title={props.data.contentfulAgenda.konten} />
      <div className="container">
        <h1>{props.data.contentfulAgenda.konten}</h1>
        <h1></h1>
        <p>{props.data.contentfulAgenda.tanggalm}</p>
        {documentToReactComponents(
          props.data.contentfulAgenda.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default Kegiatan
