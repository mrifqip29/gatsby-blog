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

import Layout from "../components/layout"

const Jumbo = ({ props }) => {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage: null,
        }}
      >
        <Container>
          <h1>PROFIL SEKOLAH</h1>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/"> Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{props}</Breadcrumb.Item>
            <Breadcrumb.Item active>Profil Sekolah</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Jumbo
