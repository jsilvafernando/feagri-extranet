import React, { useState } from "react";
import { Header } from "../src/components/Header";
import { Breadcrumbs } from "../src/components/Breadcrumbs";
import { MenuLateral } from "../src/components/MenuLateral";
import { IntranetContent } from "../src/components/IntranetContent";
import { Footer } from "../src/components/Footer";
import { FooterMenu } from "../src/components/FooterMenu";
import { useParams } from "react-router-dom";
import { Root } from "./routes/Root";

// import { Protocolo } from './components/Protocolo/Protocolo'

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  const { title, menu } = useParams();
  console.log(title);
  console.log(menu);

  return (
    <>
      <Header />
      <div className="container">
        <main className="main-wrapper">
          <Breadcrumbs title="Extranet" icon="fa fa-home" subTitle="" />
          <div className="row">
            <MenuLateral titleMenu={title ?? ""} menuitems={menu ?? ""} />

            {/* <MenuLateral titleMenu="FEAGRI" menuitems='menu-feagri'/> */}
            {/* <MenuLateral titleMenu="GRADUAÇÃO" menuitems='menu-feagri-graduacao'/> */}
            {/* <MenuLateral titleMenu="PÓS-GRADUAÇÃO" menuitems='menu-feagri-posgraduacao'/> */}
            {/* <MenuLateral titleMenu="PESQUISA" menuitems='menu-feagri-pesquisa'/> */}
            <IntranetContent>
              <Root />
            </IntranetContent>
          </div>
        </main>
      </div>
      <FooterMenu />
      <Footer />
    </>
  );
}

export default App;
