import React from "react";

export function Header(){
    return (
        <header>
            <section className="top-bar">
                <div className="container">
                    <div className="row">
                        <nav id="top-bar-submenu" className="top-bar-submenu col">
                            <ul>
                                <li><a href="#">Empreendedorismo</a></li>
                                <li><a href="#">Produtos Sociais</a></li>
                                <li><a href="#">Comunidade</a></li>
                                <li><a href="#">Wiki</a></li>
                                <li><a href="#">Webmail</a></li>
                                <li><a href="#">Informações</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <section id="mobile-header" className="mobile-header d-block d-sm-none">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="logos d-flex justify-content-center">
                                <a href="#">
                                    <img className="sp-default-logo" src="https://www.feagri.unicamp.br/portal/images/Logos/lg_feagricompleto_homenova-fdbrc.svg" alt="FEAGRI - Faculdade de Engenharia Agrícola" />
                                </a>
                                <a href="https://www.unicamp.br/">
                                    <img src="https://www.feagri.unicamp.br/portal/images/Logos/unicamp.png" alt="unicamp"/>
                                </a>
                            </div>

                            <div className="block">
                                <h3 className="header-menu-title">Menu Principal</h3>
                                <ul className="principal main-menu-mobile" id="main-menu-mobile">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Feagri</a></li>
                                    <li><a href="#">Graduação</a></li>
                                    <li><a href="#">Pós-Graduação</a></li>
                                    <li><a href="#">Pesquisa</a></li>
                                    <li><a href="#">Extensão</a></li>
                                    <li><a href="#">Vida acadêmica</a></li>
                                </ul>
                            </div>
                            <div className="block">
                                <h3 className="header-menu-title">Graduação</h3>
                                <ul className="tree-menu">
                                    <li className="item-parent has-child">
                                        <span className="far fa-plus-square"></span>
                                        <a href="#">Graduação</a>
                                        <ul className="nested">
                                            <li><a href="#">Objetivo</a></li>
                                            <li><a href="#">Histórico</a></li>
                                        </ul>
                                    </li>
                                    <li className="item-parent has-child">
                                        <span className="far fa-plus-square"></span>
                                        <a href="#">Comissão</a>
                                        <ul className="nested">
                                            <li><a href="#">Comissão</a></li>
                                            <li><a href="#">Composição</a></li>
                                        </ul>
                                    </li>
                                    <li className="item-parent has-child">
                                        <span className="far fa-plus-square"></span>
                                        <a href="#">Normas</a>
                                        <ul className="nested">
                                            <li><a href="#">Regimento geral (DAC)</a></li>
                                            <li><a href="#">Regimento interno</a></li>
                                        </ul>
                                    </li>

                                    <li className="item-parent has-child">
                                        <span className="far fa-plus-square"></span>
                                        <a href="#">Disciplinas</a>
                                        <ul className="nested">
                                            <li><a href="#">Obrigatórias</a></li>
                                            <li><a href="#">Eletivas</a></li>
                                            <li className="has-child">
                                                <span className="far fa-plus-square"></span>
                                                <a href="#">Certificados de Estudos</a>
                                                <ul className="nested">
                                                    <li><a href="#">Comissão</a></li>
                                                    <li><a href="#">Composição</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="item-parent has-child">
                                        <span className="far fa-plus-square"></span>
                                        <a href="#">Professores</a>
                                        <ul className="nested">
                                            <li><a href="#">Calendário Feagri</a></li>
                                            <li><a href="#">Avaliação do curso</a></li>
                                        </ul>
                                    </li>
                                    <li className="item-parent has-child">
                                        <span className="far fa-plus-square"></span>
                                        <a href="#">Alunos</a>
                                        <ul className="nested">
                                            <li><a href="#">Avaliação disciplinas</a></li>
                                            <li><a href="#">Avaliação curso</a></li>
                                        </ul>
                                    </li>
                                    <li className="item-parent has-child">
                                        <span className="far fa-plus-square"></span>
                                        <a href="#">Protocolo</a>
                                        <ul className="nested">
                                            <li><a href="#">Solicitações</a></li>
                                            <li><a href="#">Consulta solicitações</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="main-menu" className="main-menu d-none d-sm-block">
                <div className="container">
                    <div className="row mx-0">
                        <section id="logo" className="logo col-xs-8 col-sm-2 col-md-2">
                            <a href="#">
                                <h1>
                                    <img src="https://www.feagri.unicamp.br/portal/images/Logos/lg_feagricompleto_homenova-fdbrc.svg"
                                        alt="FEAGRI - Faculdade de Engenharia Agrícola" />
                                </h1>
                            </a>
                        </section>
                        <section id="menu" className="menu col-xs-4 col-sm-9 col-md-9">
                            <nav>
                                <ul className="megamenu-parent">
                                    <li className="menu-item has-child"><a href="#">Feagri</a>
                                        <div className="dropdown dropdown-main menu-right">
                                            <div className="dropdown-inner">
                                                <ul className="dropdown-items">
                                                    <li className="menu-item"><a href="#">A FEAGRI</a></li>
                                                    <li className="menu-item"><a href="#">Estrutura
                                                            Organizacional</a></li>
                                                    <li className="menu-item"><a href="#">CONSELHOS</a></li>
                                                    <li className="menu-item"><a href="#">ADMINISTRAÇÃO</a>
                                                    </li>
                                                    <li className="menu-item"><a href="#">Protocolo de uso dos
                                                            Laboratórios
                                                            -
                                                            COVID-19</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item has-child"><a href="#">Graduação</a>
                                        <div className="dropdown dropdown-main menu-right">
                                            <div className="dropdown-inner">
                                                <ul className="dropdown-items">
                                                    <li className="menu-item"><a href="#">A Graduação</a></li>
                                                    <li className="menu-item"><a href="#">Comissão</a></li>
                                                    <li className="menu-item"><a href="#">Normas</a></li>
                                                    <li className="menu-item"><a href="#">Disciplinas</a></li>
                                                    <li className="menu-item"><a href="#">Professores</a></li>
                                                    <li className="menu-item"><a href="#">Alunos</a></li>
                                                    <li className="menu-item"><a href="#">Protocolo</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item has-child"><a href="#">Pós-graduação</a>
                                        <div className="dropdown dropdown-main menu-right">
                                            <div className="dropdown-inner">
                                                <ul className="dropdown-items">
                                                    <li className="menu-item"><a href="#">A Pós-Graduação</a></li>
                                                    <li className="menu-item"><a href="#">Internacionalização</a></li>
                                                    <li className="menu-item"><a href="#">Áreas de Concentração</a></li>
                                                    <li className="menu-item"><a href="#">Regimento Geral</a></li>
                                                    <li className="menu-item"><a href="#">Regulamento Interno</a></li>
                                                    <li className="menu-item"><a href="#">Planejamento Estratégico</a>
                                                    </li>
                                                    <li className="menu-item"><a href="#">Projeto Pedagógico</a></li>
                                                    <li className="menu-item"><a href="#">Normas</a></li>
                                                    <li className="menu-item"><a href="#">Informações Covid-19</a></li>
                                                    <li className="menu-item"><a href="#">Calendário, atas e pautas</a>
                                                    </li>
                                                    <li className="menu-item"><a href="#">CORPO DOCENTE</a></li>
                                                    <li className="menu-item"><a href="#">Disciplinas</a></li>
                                                    <li className="menu-item"><a href="#">Estudante Especial</a></li>
                                                    <li className="menu-item"><a href="#">Perguntas Frequentes DAC</a>
                                                    </li>
                                                    <li className="menu-item"><a href="#">Guia do Pós-Graduando</a></li>
                                                    <li className="menu-item"><a href="#">Processo Seletivo</a></li>
                                                    <li className="menu-item"><a href="#">PROTOCOLO</a></li>
                                                    <li className="menu-item"><a href="#">Recursos Financeiros</a></li>
                                                    <li className="menu-item"><a href="#">Dissertações e Teses</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item has-child"><a href="#">Pesquisa</a>
                                        <div className="dropdown dropdown-main menu-right">
                                            <div className="dropdown-inner">
                                                <ul className="dropdown-items">
                                                    <li className="menu-item"><a href="#">A Pesquisa</a></li>
                                                    <li className="menu-item"><a href="#">Comissão</a></li>
                                                    <li className="menu-item"><a href="#">Colaboradores</a></li>
                                                    <li className="menu-item"><a href="#">Boletim Técnico Científico</a>
                                                    </li>
                                                    <li className="menu-item"><a href="#">Espaço da Escrita</a></li>
                                                    <li className="menu-item"><a href="#">Grupos</a></li>
                                                    <li className="menu-item"><a href="#">Informativos</a></li>
                                                    <li className="menu-item"><a href="#">Ingresso na Pesquisa</a></li>
                                                    <li className="menu-item"><a href="#">Laboratórios Núcleo</a></li>
                                                    <li className="menu-item"><a href="#">Normas</a></li>
                                                    <li className="menu-item"><a href="#">Núcleo Interno de Economia e
                                                            Administração Rural</a></li>
                                                    <li className="menu-item"><a href="#">LINKS ÚTEIS</a></li>
                                                    <li className="menu-item"><a href="#">Oportunidades</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item has-child"><a href="#">Extensão</a>
                                        <div className="dropdown dropdown-main menu-right">
                                            <div className="dropdown-inner">
                                                <ul className="dropdown-items">
                                                    <li className="menu-item"><a href="#">A Extensão</a></li>
                                                    <li className="menu-item"><a href="#">Comissão</a></li>
                                                    <li className="menu-item"><a href="#">Cursos</a></li>
                                                    <li className="menu-item"><a href="#">Convenios</a></li>
                                                    <li className="menu-item"><a href="#">Prestação de Serviços</a></li>
                                                    <li className="menu-item"><a href="#">Apoio ao Aluno</a></li>
                                                    <li className="menu-item"><a href="#">Apoio ao Docente</a></li>
                                                    <li className="menu-item"><a href="#">Normas</a></li>
                                                    <li className="menu-item"><a href="#">Destaques</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item has-child"><a href="#">Vida acadêmica</a>
                                        <div className="dropdown dropdown-main menu-right">
                                            <div className="dropdown-inner">
                                                <ul className="dropdown-items">
                                                    <li className="menu-item"><a href="#">Empresa Jr Agrológica</a></li>
                                                    <li className="menu-item"><a href="#">Atlética</a></li>
                                                    <li className="menu-item"><a href="#">Centro Acadêmico</a></li>
                                                    <li className="menu-item"><a href="#">Semeagri</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                        <section id="logo2" className="logo2 col-sm-1 col-md-1">
                            <a href="https://www.unicamp.br/" target="_blank">
                                <img src="https://www.feagri.unicamp.br/portal/images/Logos/BRANCO.png" alt="Unicamp" />
                            </a>
                        </section>
                    </div>
                </div>
            </section>
        </header>
    )    
}