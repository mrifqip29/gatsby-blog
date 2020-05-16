import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: { id: { eq: "d90e6e31-c573-51a5-8cde-b6d9fca79a66" } }
      ) {
        edges {
          node {
            id
            title
            fixed {
              srcWebp
            }
          }
        }
      }
    }
  `)
  return (
    <Navbar bg="white" expand="lg" className="col-12">
      <Navbar.Brand className="col-md-12 col-sm-12 col-lg-6">
        <Link to="/">
          <img
            src={data.allContentfulAsset.edges[0].node.fixed.srcWebp}
            alt=""
            height="70px"
          />
        </Link>
      </Navbar.Brand>

      <Nav
        className="mx-auto justify-content-end"
        style={{
          color: "33775a",
        }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className={headerStyles.navItem}>
                Beranda
              </Link>
            </Nav.Link>

            <NavDropdown
              //warna nya gatau gmn
              title={
                <span className={headerStyles.navDropdownItem}>
                  Tentang Kami
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link
                  to="/profilsekolah"
                  className={headerStyles.dropdownContent}
                >
                  Profil Sekolah
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/profilstaf" className={headerStyles.dropdownContent}>
                  Profil Pendidik & Staf
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/fasilitas" className={headerStyles.dropdownContent}>
                  Fasilitas
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              //warna nya gatau gmn
              title={
                <span className={headerStyles.navDropdownItem}>Informasi</span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link
                  to="/kabarterkini"
                  className={headerStyles.dropdownContent}
                >
                  Kabar Terkini
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/silabus" className={headerStyles.dropdownContent}>
                  Silabus
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/report" className={headerStyles.dropdownContent}>
                  Annual Report
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="px-3">
              <Link to="/kegiatan" className={headerStyles.navItem}>
                Kegiatan
              </Link>
            </Nav.Link>

            <Nav.Link className="px-3">
              <Link to="/ppdb" className={headerStyles.navItem}>
                PPDB
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  )
}

export default Header
