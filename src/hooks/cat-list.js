import { graphql, useStaticQuery } from "gatsby"

const KategoriList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulKategori {
          nodes{ 
            namaKategori
          }
        }
      }
    `)

    return data.allContentfulKategori.nodes.map(node => ({
      namaKategori: node.namaKategori
    }))
  }

export default KategoriList