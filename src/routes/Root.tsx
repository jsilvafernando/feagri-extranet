import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import { Protocolo } from '../components/Protocolo/Protocolo';
import { ProtocoloConsulta } from '../components/Protocolo/ProtocoloConsulta';
  
  export function Root() {
    return (
        <Routes>
          <Route path="extranet/graduacao/protocolo/solicitacao" element={<Protocolo />} />
          <Route path="extranet/graduacao/protocolo/solicitacao/consulta" element={<ProtocoloConsulta />} />
        </Routes>
    );
  }
