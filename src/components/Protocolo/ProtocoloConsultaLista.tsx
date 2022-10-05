import React from "react";
import { Table  } from 'react-bootstrap'

export function ProtocoloConsultaLista(){




    return (
        <div className="content">

            <Table striped bordered hover size="sm"  className="mt-3">
            <thead>
                <tr>
                <th> Protocolo <br/>
                    Data
                </th>
                <th>Serviço</th>
                <th>Anexo</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
            </Table>
       </div>

    );
}