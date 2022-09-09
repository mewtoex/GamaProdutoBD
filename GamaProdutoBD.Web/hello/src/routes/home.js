import React from "react";
import { Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { CNavbar, CNavbarBrand, CNavbarToggler, CNavItem, CAlert, CContainer, CCollapse, CNavbarNav, CButton, CNavLink } from '@coreui/react'

const Home = () => {
  //<Link to={"/placar"}>{"placar"}</Link>

  return (

    <div id="menu">
      <>
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
                <CNavItem>

                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>
        <div>
          <div className="w3-row  w3-center  w3-half" >
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="w3-row w3-half">&nbsp;</div>


          </div>


        </div>

      </>
    </div>)


}; export default Home;