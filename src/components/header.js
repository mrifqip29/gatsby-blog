import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

import headerStyles from "./header.module.scss"

const Header = () => (
  <Navbar bg="white" expand="lg">
    <Navbar.Brand href="#home" className="mx-5 px-5">
      <img
        src="https://www.cendekiabaznas.sch.id/wp-content/uploads/2017/12/Logo-SCB_Hitam.png"
        alt=""
        height="70px"
      />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="px-3">
          <Link
            to="/"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            Beranda
          </Link>
        </Nav.Link>

        <NavDropdown
          //warna nya gatau gmn
          title="Tentang Kami"
          // id="basic-nav-dropdown"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          <NavDropdown.Item>
            <Link to="/profilsekolah" className={headerStyles.navDropdown}>
              Profil Sekolah
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/profilstaf" className={headerStyles.navDropdown}>
              Profil Pendidik & Staf
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/fasilitas" className={headerStyles.navDropdown}>
              Fasilitas
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          //warna nya gatau gmn
          title="Informasi"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          <NavDropdown.Item>
            <Link to="/kabarterkini" className={headerStyles.navDropdown}>
              Kabar Terkini
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/silabus" className={headerStyles.navDropdown}>
              Silabus
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/report" className={headerStyles.navDropdown}>
              Annual Report
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link className="px-3">
          <Link
            to="/kegiatan"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            Kegiatan
          </Link>
        </Nav.Link>

        <Nav.Link className="px-3">
          <Link
            to="/ppdb"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            PPDB
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
