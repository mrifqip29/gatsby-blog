import React from "react"
import { Link } from "gatsby"
import { Breadcrumb, Jumbotron, Container } from "react-bootstrap"

import halamanStyles from "../pages/halaman.module.scss"

const JumboEmpat = ({ title, nav, page, tags, image }) => {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(" +
            image +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h1
            style={{
              padding: "0.75rem 0rem 0rem",
              color: "white",
            }}
          >
            {title}
          </h1>

          <ol className={halamanStyles.breadcrumb}>
            <li className={halamanStyles.breadcrumbItem}>
              <Link
                to="/"
                style={{
                  color: "white",
                }}
              >
                Home
              </Link>
            </li>
            <li className={halamanStyles.breadcrumbItem}>{nav}</li>
            <li className={halamanStyles.breadcrumbItem}>{page}</li>
            <li
              className={halamanStyles.breadcrumbItem}
              style={{ color: "#005131" }}
            >
              {tags}
            </li>
          </ol>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default JumboEmpat
