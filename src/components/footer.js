import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
      contentfulFooter{
          narahubung1
          narahubung2
          linkWebsite
          linkTwitter
          linkFacebook
          linkInstagram
          linkLine
          alamatSekolah
      }
      
    }
  `)
  return (
    <div >
    <svg className='col-12 px-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#004547" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,256C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    
    <div className={`row d-flex justify-content-md-center justify-content-sm-start px-4 m-0 ${footerStyles.containerFooter}`} >
      <div className='col-md-4 col-sm-12 pr-0' >
         <h1 className={footerStyles.title}>Narahubung</h1>
        
        <h5 className={footerStyles.content}>
         <img
          src='https://svgshare.com/i/KzK.svg'
          style={{width:'2.2rem'}}
        />  {data.contentfulFooter.narahubung1}
        </h5>
        <h5 className={footerStyles.content}>
         <img
          src='https://svgshare.com/i/KzK.svg'
          style={{width:'2.2rem'}}
        /> {data.contentfulFooter.narahubung2}
        </h5>
        
      </div>


      <div className='col-md-4 col-sm-12 '>
        <h1 className={footerStyles.contentSocial}>Social Media</h1>
  
        <div className='d-flex ' href="#">
          <a href={data.contentfulFooter.linkWebsite}>
            <img
                    src="https://svgshare.com/i/L1H.svg"
                    alt="Website"
                    style={{ padding:'0.5rem' , width:'3.4rem' }}
                  />
          </a>
          <a href={data.contentfulFooter.linkTwitter}>
            <img
                      src="https://svgshare.com/i/LD3.svg"
                      alt="Twitter"
                      style={{ padding:'0.5rem', width:'3.4rem' }}
                    />
          </a>
          <a href={data.contentfulFooter.linkLine}>
          <img
                    src="https://svgshare.com/i/LE8.svg"
                    alt="Line"
                    style={{ padding:'0.5rem', width:'3.4rem' }}
                  />
          </a>
          <a href={data.contentfulFooter.linkInstagram}>
          <img
                    src="https://svgshare.com/i/LDw.svg"
                    alt="Instagram"
                    style={{ padding:'0.5rem', width:'3.4rem' }}
                  />
          </a>
          <a href={data.contentfulFooter.linkFacebook}>
          <img
                    src="https://svgshare.com/i/LDF.svg"
                    alt="Facebook"
                    style={{ padding:'0.5rem', width:'3.4rem' }}
                  />
          </a>
                  
        </div>
      </div>
      
      <div className='col-md-4 col-sm-12 pr-0'>
        <h1 className={footerStyles.title}>Informasi Sekolah</h1>
        <h5 className={footerStyles.content}>Sekolah Cendekia BAZNAS</h5>
        <h5 className={footerStyles.content}>{data.contentfulFooter.alamatSekolah} </h5>
      </div>

    </div>
    </div>
  )
}

export default Footer
