import React from "react";

interface MenuLateral{
    titleMenu: string;
}



export function MenuLateral(props: MenuLateral){
    var toggler = document.getElementsByClassName("fa-plus-square");

    function toggleClick(){
        for (var i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("click", function () {
                this.parentElement.querySelector(".nested").classList.toggle("active");
                if (toggler.classList.contains("fa-plus-square")) {
                    toggler.classList.remove("fa-plus-square");
                    toggler.classList.add("fa-minus-square");
                } else if (toggler.classList.contains("fa-minus-square")) {
                    toggler.classList.remove("fa-minus-square");
                    toggler.classList.add("fa-plus-square");
                }
            });
        }
    }
    
    return (
        <aside id="lateral" className="lateral d-none d-sm-block col-lg-3 col-md-4">
        <h3>{props.titleMenu}</h3>
        <nav className="menu-lateral">
            <ul>
                <li className="item-parent has-child">
                    <span className="far fa-plus-square" onClick={toggleClick}></span>
                    <a href="#">Graduação</a>
                    <ul className="nested">
                        <li><a href="#">Objetivo</a></li>
                        <li><a href="#">Histórico</a></li>
                    </ul>
                </li>
                <li className="item-parent has-child">
                    <span className="far fa-plus-square" onClick={toggleClick}></span>
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
                        <li>
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
        </nav>
    </aside>
    )    
}