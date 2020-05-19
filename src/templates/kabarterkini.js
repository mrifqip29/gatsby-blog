import React from "react"
import { graphql , useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"
import Jumbo from "../components/jumbo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      gambarArtikel{
        file{
          url
        }
      }
      body {
        json
      }
    }

    contentfulJumbotronHalaman(
      jumbotronHalaman: { eq: "Default" }
    ) {
      jumbotronHalaman
      jumbotronGambar {
        fixed {
          srcWebp
        }
      }
    }
  
  }
`

const KabarTerkini = props => {
  
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} style={{ maxWidth :'800px'}} />
      },
    },
  }
  return (
    <Layout>
      {props.data.contentfulBlogPost.gambarArtikel === null ? (
        
      <Jumbo
      title={props.data.contentfulBlogPost.title}
      nav="Kabar Terkini"
      page={props.data.contentfulBlogPost.title}
      image={props.data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
      />

      )
      :(
      <Jumbo
      title={props.data.contentfulBlogPost.title}
      nav="Kabar "
      page={props.data.contentfulBlogPost.title}
      image={props.data.contentfulBlogPost.gambarArtikel.file.url}
      />      
      )}




      <Head title={props.data.contentfulBlogPost.title} />
      <div className='container'>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
      )}

      </div>
      
    </Layout>
  )
}

export default KabarTerkini
