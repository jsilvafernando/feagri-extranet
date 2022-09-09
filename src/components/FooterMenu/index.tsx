import React, {useState} from "react";

export function FooterMenu(){
    const[clickBottomMenu, setClickBottomMenu] = useState<Boolean>(false);

    function toggleClick(): void {
        clickBottomMenu ? setClickBottomMenu(false) : setClickBottomMenu(true)
    }



    return (
        <>
        <section className={clickBottomMenu ? "bottom d-none d-sm-block open" : "bottom d-none d-sm-block closed"} onClick={toggleClick}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Conecte</h4>
                        <p>Comunidade</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Telefones</h4>
                        <p>Entre em contato</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Siga-nos</h4>
                        <p>Fique por dentro</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Intranet</h4>
                        <p>Acesse</p>
                    </div>
                </div>
            </div>
        </section>  
        <section className={clickBottomMenu ? "bottom-detail d-none d-sm-block open" : "bottom-detail d-none d-sm-block closed"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            <li><a href="#">Webmail</a></li>
                            <li><a href="#">Ensino Médio</a></li>
                            <li><a href="#">Sigad</a></li>
                            <li><a href="#">Informática</a></li>
                            <li><a href="#">RH/Concursos</a></li>
                            <li><a href="#">Zeladoria</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li><a href="#">Telefones</a></li>
                            <li><a href="#">Diretoria</a></li>
                            <li><a href="#">Graduação</a></li>
                            <li><a href="#">Pós-graduação</a></li>
                            <li><a href="#">Pesquisa</a></li>
                            <li><a href="#">Extensão</a></li>
                            <li><a href="#">Como chegar?</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li><a href="#"><img
                                        src="https://www.feagri.unicamp.br/portal/images/icones/icones-circular-34x34px-facebook.png"
                                        alt="Facebook"/>Facebook</a>
                            </li>
                            <li><a href="#"><img
                                        src="https://www.feagri.unicamp.br/portal/images/icones/icones-circular-34x34px-twitter.png"
                                        alt="Twitter"/>Twitter</a>
                            </li>
                            <li><a href="#"><img
                                        src="https://www.feagri.unicamp.br/portal/images/icones/icones-circular-34x34px-youtube.png"
                                        alt="Youtube"/>Youtube</a>
                            </li>
                            <li><a href="#"><img
                                        src="https://www.feagri.unicamp.br/portal/images/icones/icones-circular-34x34px-pinterest.png"
                                        alt="Pinterest"/>Pinterest</a>
                            </li>
                            <li><a href="#"><img
                                        src="https://www.feagri.unicamp.br/portal/images/icones/icones-circular-20x20px-instagram.png"
                                        alt="Instagram"/>Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li><a href="#">Agendas</a></li>
                            <li><a href="#">Almoxarifado</a></li>
                            <li><a href="#">Intranet/Sistemas 2022.06.20B</a></li>
                            <li><a href="#">Esqueceu sua senha?</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>              
        </>
    )    
}