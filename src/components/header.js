import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import headerStyles from "./header.module.scss"

const Header = () => (
  <Navbar bg="white" expand="lg">
    <Navbar.Brand className="mx-5 px-5">
      <Link to="/">
        <img
          src="https://www.cendekiabaznas.sch.id/wp-content/uploads/2017/12/Logo-SCB_Hitam.png"
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
              <span className={headerStyles.navDropdownItem}>Tentang Kami</span>
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
              <Link to="/kabarterkini" className={headerStyles.dropdownContent}>
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

export default Header
