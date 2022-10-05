import { useState, useEffect } from "react";
import {
    BrowserRouter,
    Link,
  } from "react-router-dom";
import api from '../../services/api';


interface MenuLateral {
    titleMenu: string;
    menuitems: string;
}  
interface ItemMenu {
    title: string,
    uri: string,
    selected: boolean,
    alias: string,
    note: string,
    path: string,
    link: string,
    type: string,
    level: Number,
    childs: IChild[]
}

interface IChild {
    title: string,
    uri: string,
    selected: boolean,
    alias: string,
    note: string,
    path: string,
    link: string,
    type: string,
    level: number,
}




export function MenuLateral({titleMenu, menuitems}: MenuLateral) {


    let [menu, setMenu] = useState<ItemMenu[]>([]);
    const [optMenu, setOptMenu ] = useState([])
    let [optMenuLateral, setOptMenuLateral] = useState(menuitems);

    const getMenu = async () =>{

        const header = {
            'Content-Type': 'application/json'
        }

        await api.get(`/jmenu/alltype?menu=${optMenuLateral}` )
            .then( (response) => {
                console.log(response.data)
                setOptMenu(response.data);
            }).catch( (err) =>{
                if (err.response){
                    return console.log(`Erro: ${err.response}`)
                } else {
                    console.log('Erro: tente mais tarde !!!')
                }
            })
      }
    
// "title": "Graduação",
// "uri": "https://www.feagri.unicamp.br/portal/",
// "alias": "a-graduacao",
// "note": "Conheça mais sobre o nosso Curso de Graduação",
// "path": "a-graduacao",
// "link": "index.php?option=com_content&view=article&id=117",
// "type": "component",
// "level": 1,
// "childs": [
//   {
//     "title": "Objetivo",
//     "uri": "https://www.feagri.unicamp.br/portal/",
//     "alias": "objetivo",
//     "note": "",
//     "path": "a-graduacao/objetivo",
//     "link": "index.php?option=com_content&view=article&id=117",
//     "type": "component",
//     "level": 2
//   },

    useEffect(() => {

        // integracao com API (json axios)

        let resultApi = [
            {
                title: "Graduação",
                uri: "#",
                alias: "",
                note: "",
                path: "",
                link: "",
                type: "",
                level:1,
                selected: false,
                childs: [
                    {
                        title: "Objetivo",
                        uri: "https://www.feagri.unicamp.br/portal/",
                        note: "",
                        level: 2,
                        path: "a-graduacao/objetivo",
                        alias: "a-graduacao/objetivo",
                        link: "",
                        selected: false,                        
                        type: "component"
                    },
                    {
                        title: "Histórico",
                        uri: "https://www.feagri.unicamp.br/portal/",
                        note: "",
                        level: 2,
                        path: "a-graduacao/historico",
                        alias: "a-graduacao/historico",
                        link: "",
                        selected: false,                        
                        type: "component"
                    },
                    {
                        title: "Formas de Ingresso(DAC)",
                        uri: "",
                        note: "",
                        level: 2,
                        path: "",
                        alias: "",
                        link: "https://www.dac.unicamp.br/portal/graduacao/regimento-geral",
                        selected: false,                        
                        type: "url"

                    },
                    {
                        title: "Catálogos do curso (DAC)",
                        uri: "",
                        note: "",
                        level: 2,
                        path: "",
                        alias: "",
                        link: "https://www.dac.unicamp.br/portal/graduacao/catalogos-de-cursos",
                        selected: false,                        
                        type: "url"

                    }

                ]
            },
            {
                title: "Comissão",
                uri: "#",
                alias: "",
                note: "",
                path: "",
                link: "",
                type: "",
                level:1,
                selected: false,
                childs: [
                    {
                        title: "Comissão",
                        uri: "#",
                        note: "",
                        level: 2,
                        path: "",
                        alias: "",
                        link: "",
                        selected: false,                        
                        type: "component"
                    },
                    {
                        title: "Composição",
                        uri: "#",
                        note: "",
                        level: 2,
                        path: "",
                        alias: "",
                        link: "",
                        selected: false,                        
                        type: "component"
                    }
                ]
            },
            {
                title: "Protocolo",
                uri: "#",
                alias: "",
                note: "",
                path: "",
                link: "",
                type: "",
                level:1,
                selected: false,
                childs: [
                    {
                        title: "Solicitações",
                        uri: "",
                        note: "/extranet/",
                        level: 2,
                        path: "",
                        alias: "",
                        link: "graduacao/protocolo/solicitacao",
                        selected: false,                        
                        type: "url"
                    },
                    {
                        title: "Consulta solicitações",
                        uri: "",
                        note: "/extranet/",
                        level: 2,
                        path: "",
                        alias: "",
                        link: "graduacao/protocolo/solicitacao/consulta",
                        selected: false,                        
                        type: "url"
                    }
                ]
            }

        ];

        setMenu(resultApi);
        getMenu();

    }, []);

    function toggle(item: ItemMenu): void {

        let accordion: any = [];

        menu.forEach((i) => {
            let m : any;
            // console.log(i.title);
            if (i.title !== item.title) {
                m = {
                    title: i.title,
                    uri: i.uri,
                    selected: false,
                    childs: i.childs
                }
                accordion.push();
            } else {
                m = {
                    title: i.title,
                    uri: i.uri,
                    selected: !i.selected,
                    childs: i.childs
                };
            }
            accordion.push(m);
        });
        // console.log(accordion)
        setMenu(accordion);
    }

    return (
        <aside id="lateral" className="lateral d-none d-sm-block col-lg-3 col-md-4">
            <h3>{titleMenu}</h3>
            <nav className="menu-lateral">
                <ul>
                    {
                        // Object.values(menu).map((item: ItemMenu, index: number) => {
                        menu.map((item: ItemMenu, index: number) => {
                            return (
                                <li className="item-parent has-child" key={index}>

                                    <span
                                        className={"far " + (!item.selected ? 'fa-plus-square' : 'fa-minus-square')}
                                        onClick={() => toggle(item)}></span>

                                    <a href={item.uri} onClick={() => toggle(item)}>{item.title}</a>

                                    <ul className={"nested " + (item.selected ? 'active' : '')}>
                                        {
                                            item.childs.map((c: IChild, key: number) => {
                                                return (
                                                    <li key={key}>
                                                        { c.type === 'url' && c.note ==='' 
                                                            ? <a href={c.link}>{c.title}</a>
                                                            : c.type === 'url' && c.note !== '' 
                                                                ? <Link to ={c.note+c.link}>{c.title}</Link>
                                                                : <a href={c.uri+c.path}>{c.title}</a>
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside >
    )
};


    