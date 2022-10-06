import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import { Protocolo } from '../components/Protocolo/Protocolo';
import { ProtocoloConsulta } from '../pages/Protocolo/ProtocoloConsulta';
  
  export function Root() {
    return (
        <Routes>
          <Route path="extranet" element="" />
          <Route path="extranet/graduacao/protocolo/solicitacao/:titleMenu/:menuitems" element={<Protocolo />} />
          <Route path="extranet/graduacao/protocolo/solicitacao/consulta/:titleMenu/:menuitems" element={<ProtocoloConsulta />} />
        </Routes>
    );
  }
