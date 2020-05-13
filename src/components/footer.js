import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"
import { AlertHeading } from "react-bootstrap/Alert"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <>

      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#004547" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,256C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

        <div className={`col-md-12 ${footerStyles.containerFooter}`}>
          <ul className={footerStyles.footerkiri} >
              <li className={footerStyles.title}>Narahubung</li>
              <li className={footerStyles.content}>
                <img
                    src='https://svgshare.com/i/KzK.svg'
                    style={{paddingRight:'10px'}}
                  />
                  081298408698 (Dani)</li>
              <li className={footerStyles.content}>
              <img
                    src='https://svgshare.com/i/KzK.svg'
                    style={{paddingRight:'10px'}}
                  />
                081298408698 (Dani)</li>
              <li className={footerStyles.content}>
              <img
                    src='https://svgshare.com/i/KzK.svg'
                    style={{paddingRight:'10px'}}
                  />
                081298408698 (Dani)</li>
          </ul>

          <ul className={footerStyles.footertengah}>
              <li className={footerStyles.titleCentered}>Social Media</li>
              <li>
              <a title="Website" href="#">
                  <img
                    src="https://svgshare.com/i/L1H.svg"
                    alt="Website"
                    style={{ padding:'0.5rem' }}
                  />
                </a>

                <a title="Twitter" href="#">
                  <img
                    src="https://svgshare.com/i/L1H.svg"
                    alt="Twitter"
                    style={{ padding:'0.5rem' }}
                  />
                </a>              
                
                <a title="Line" href="#">
                  <img
                    src="https://svgshare.com/i/L1H.svg"
                    alt="Line"
                    style={{ padding:'0.5rem' }}
                  />
                </a>              
                
                <a title="Instagram" href="#">
                  <img
                    src="https://svgshare.com/i/L1H.svg"
                    alt="Instagram"
                    style={{ padding:'0.5rem' }}
                  />
                </a>              
                
                <a title="Facebook" href="#">
                  <img
                    src="https://svgshare.com/i/L1H.svg"
                    alt="Facebook"
                    style={{ padding:'0.5rem' }}
                  />
                </a>
              </li>
          </ul>

          <ul className={footerStyles.footerkanan}> 
              <li className={footerStyles.title}>Informasi Sekolah</li>
              <li className={footerStyles.content}>Sekolah Cendekia BAZNAS
                                                  K.H. Umar Cirangkong RT. 18 RW. 07,
                                                  Desa Cemplang, Kec. Cibungbulang,
                                                  Kab. Bogor, 16630 </li>
          </ul> 
        </div>


        
        <div className={footerStyles.footerBottom}>
          <p>Created by {data.site.siteMetadata.author}©{" "}
              {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
              </p>
        </div>
    </>
  )
}

export default Footer
