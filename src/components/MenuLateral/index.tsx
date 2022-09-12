import { useState, useEffect } from "react";

interface MenuLateral {
    titleMenu: string;
}

export function MenuLateral(props: MenuLateral) {

    let [menu, setMenu]: any = useState([]);

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
                        uri: "#"
                    },
                    {
                        name: "Histórico",
                        uri: "#"
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
                        uri: "#"
                    },
                    {
                        name: "Composição",
                        uri: "#"
                    }
                ]
            },
            {
                name: "Teste 3",
                uri: "#",
                selected: false,
                childs: [
                    {
                        name: "Filho 01",
                        uri: "#"
                    },
                    {
                        name: "Filho 02",
                        uri: "#"
                    }
                ]
            },
            {
                name: "Teste 4",
                uri: "#",
                selected: false,
                childs: [
                    {
                        name: "Filho 01",
                        uri: "#"
                    },
                    {
                        name: "Filho 02",
                        uri: "#"
                    }
                ]
            }
        ];

        setMenu(api);

    }, []);

    function toggle(item: any): void {

        let accordion: any = [];

        menu.forEach((i: any) => {
            let m : any;
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

        setMenu(accordion);
    }

    return (
        <aside id="lateral" className="lateral d-none d-sm-block col-lg-3 col-md-4">
            <h3>{props.titleMenu}</h3>
            <nav className="menu-lateral">
                <ul>
                    {
                        menu.map((item: any, index: any) => {
                            return (
                                <li className="item-parent has-child" key={index}>

                                    <span
                                        className={"far " + (!item.selected ? 'fa-plus-square' : 'fa-minus-square')}
                                        onClick={() => toggle(item)}></span>

                                    <a href={item.uri} onClick={() => toggle(item)}>{item.name}</a>

                                    <ul className={"nested " + (item.selected ? 'active' : '')}>
                                        {
                                            item.childs.map((c: any, key: any) => {
                                                return (
                                                    <li key={key}>
                                                        <a href="#">{c.name}</a>
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
}