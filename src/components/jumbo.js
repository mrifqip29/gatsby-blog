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

const Jumbo = ({ title, nav, page }) => {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage: null,
        }}
      >
        <Container>
          <h1
            style={{
              padding: "0.75rem 1rem 0rem",
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
