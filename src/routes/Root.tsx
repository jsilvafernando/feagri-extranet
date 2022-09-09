import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Protocolo } from '../components/Protocolo/Protocolo';
  
  export function Root() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Protocolo />} /> */}
          <Route path="graduacao/protocolo/solicitacao" element={<Protocolo />} />
        </Routes>
      </BrowserRouter>
    );
  }
