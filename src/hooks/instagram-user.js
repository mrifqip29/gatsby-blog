import { graphql, useStaticQuery } from "gatsby"

const InstagramUser = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaUserNode {
          nodes{ 
            id
            full_name
            biography
            profile_pic_url
            profile_pic_url_hd
            username
          }
        }
      }
    `)

    return data.allInstaUserNode.nodes.map(node => ({
      id: node.id,
      fullname: node.full_name,
      biography: node.biography,
      username: node.username,
    }))
  }

export default InstagramUser