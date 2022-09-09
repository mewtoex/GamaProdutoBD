import React from "react";
import { Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { CNavbar, CNavbarBrand, CNavbarToggler, CNavItem, CContainer, CCollapse, CNavbarNav, CButton, CNavLink } from '@coreui/react'

const Menu = () => {
  //<Link to={"/placar"}>{"placar"}</Link>

  return (


    <div id="menu">


      <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarToggler
            aria-label="Toggle navigation"
          />
          <CCollapse className="navbar-collapse" visible={false}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  HOME
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#/produto">
                  Produto
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>

    </div>

  )
}; export default Menu;