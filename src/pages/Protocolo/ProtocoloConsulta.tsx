import React from "react";
import { Row, Col, Form, Button, FloatingLabel  } from 'react-bootstrap'

export function ProtocoloConsulta(){

    
    return (
        <div className="content">
            <h2>Protocolo de solicitação de serviços/Consulta</h2>
            <Form>
                <Row>
                    <Col>
                            <FloatingLabel
                                  controlId="floatingInput"
                                    label="Solicitante"
                                    className="mb-3"
                            >
                                <Form.Select aria-label="Solicitante" size="sm">
                                    <option>Selecione</option>
                                    <option value="Alunos">Alunos</option>
                                    <option value="Funcionarios">Funcionarios</option>
                                    <option value="Outros">Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                    </Col>                    
                    <Col>
                            <FloatingLabel
                                  controlId="floatingInput"
                                    label="Documento"
                                    className="mb-3"
                            >
                                <Form.Control size="sm" type="number" placeholder="Documento" />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Preencha somente com números
                                </Form.Text>
                            </FloatingLabel>
                    </Col>                    
                    <Col>
                            <FloatingLabel
                                  controlId="floatingInput"
                                    label="Número Protocolo"
                                    className="mb-3"
                            >
                                <Form.Control size="sm" type="number" placeholder="Número Protocolo" />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Preencha somente com números
                                </Form.Text>
                            </FloatingLabel>
                    </Col>                    
                </Row>
                <Row>
                    <Col sm={10}></Col>
                    <Col sm={2}>
                        <Button variant="primary" size="sm">
                        <i className="fas fa-search-plus"></i> Pesquisar
                        </Button>                    
                    </Col>
                </Row>
            </Form>


       </div>

    );
}