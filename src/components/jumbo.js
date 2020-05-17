import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import {
  Button,
  Breadcrumb,
  Image,
  Cards,
  Jumbotron,
  Container,
} from "react-bootstrap"

import halamanStyles from "../pages/halaman.module.scss"

const Jumbo = ({ title, nav, page, image }) => {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(' + image + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          
          
        }}
      >
        <Container>
          <h1
            style={{
              padding: "0.75rem 1rem 0rem",
              color:'white'
            }}
          >
            {title}
          </h1>
          <Breadcrumb style={halamanStyles.breadcrumbJumbotron}>
            <Breadcrumb.Item>
              <Link to="/"> Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{nav}</Breadcrumb.Item>
            <Breadcrumb.Item active> {page}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Jumbo
