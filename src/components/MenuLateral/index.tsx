import { useState, useEffect } from "react";
import {
    BrowserRouter,
    Link,
  } from "react-router-dom";

interface MenuLateral {
    titleMenu: string;
}  
interface ItemMenu {
    name: string,
    uri: string,
    selected: boolean,
    childs: IChild[]
}

interface IChild {
    name: string,
    uri: string,
    note: string,
    path: string,
    type: string,
    link: string,
}

export function MenuLateral(props: MenuLateral) {

    let [menu, setMenu] = useState<ItemMenu[]>([]);

    useEffect(() => {

        // integracao com API (json axios)

        let api = [
            {
                name: "Graduação",
                uri: "#",
                selected: false,
                childs: [
                    {
                        name: "Objetivo",
                        uri: "https://www.feagri.unicamp.br/portal/",
                        note: "",
                        path: "a-graduacao/objetivo",
                        link: "",
                        type: "component"
                    },
                    {
                        name: "Histórico",
                        uri: "https://www.feagri.unicamp.br/portal/",
                        note: "",
                        path: "a-graduacao/historico",
                        link: "",
                        type: "component"
                    },
                    {
                        name: "Formas de Ingresso(DAC)",
                        uri: "",
                        note: "",
                        path: "",
                        link: "https://www.dac.unicamp.br/portal/graduacao/regimento-geral",
                        type: "url"

                    },
                    {
                        name: "Catálogos do curso (DAC)",
                        uri: "",
                        note: "",
                        path: "",
                        link: "https://www.dac.unicamp.br/portal/graduacao/catalogos-de-cursos",
                        type: "url"

                    }

                ]
            },
            {
                name: "Comissão",
                uri: "#",
                selected: false,
                childs: [
                    {
                        name: "Comissão",
                        uri: "#",
                        note: "",
                        path: "",
                        link: "",
                        type: "component"
                    },
                    {
                        name: "Composição",
                        uri: "#",
                        note: "",
                        path: "",
                        link: "",
                        type: "component"
                    }
                ]
            },
            {
                name: "Protocolo",
                uri: "#",
                selected: false,
                childs: [
                    {
                        name: "Solicitações",
                        uri: "",
                        note: "/extranet/",
                        path: "",
                        link: "graduacao/protocolo/solicitacao",
                        type: "url"
                    },
                    {
                        name: "Consulta solicitações",
                        uri: "",
                        note: "/extranet/",
                        path: "",
                        link: "graduacao/protocolo/solicitacao/consulta",
                        type: "url"
                    }
                ]
            }

        ];

        setMenu(api);

    }, []);

    function toggle(item: ItemMenu): void {

        let accordion: any = [];

        menu.forEach((i) => {
            let m : any;
            // console.log(i.name);
            if (i.name !== item.name) {
                m = {
                    name: i.name,
                    uri: i.uri,
                    selected: false,
                    childs: i.childs
                }
                accordion.push();
            } else {
                m = {
                    name: i.name,
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
            <h3>{props.titleMenu}</h3>
            <nav className="menu-lateral">
                <ul>
                    {
                        menu.map((item: ItemMenu, index: number) => {
                            return (
                                <li className="item-parent has-child" key={index}>

                                    <span
                                        className={"far " + (!item.selected ? 'fa-plus-square' : 'fa-minus-square')}
                                        onClick={() => toggle(item)}></span>

                                    <a href={item.uri} onClick={() => toggle(item)}>{item.name}</a>

                                    <ul className={"nested " + (item.selected ? 'active' : '')}>
                                        {
                                            item.childs.map((c: IChild, key: number) => {
                                                return (
                                                    <li key={key}>
                                                        { c.type === 'url' && c.note ==='' 
                                                            ? <a href={c.link}>{c.name}</a>
                                                            : c.type === 'url' && c.note !== '' 
                                                                ? <Link to ={c.note+c.link}>{c.name}</Link>
                                                                : <a href={c.uri+c.path}>{c.name}</a>
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
