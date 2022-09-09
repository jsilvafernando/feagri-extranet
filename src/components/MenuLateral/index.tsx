import { useState, useEffect } from "react";

interface MenuLateral {
    titleMenu: string;
}

interface ItemMenu {
    name: string,
    uri: string,
    selected: boolean,
    childs: []
}


export function MenuLateral(props: MenuLateral) {

    const [items, setItems] = useState([]);

    function toggleHide(item): void {

        items.forEach((i) => {
            if (i.name !== item.name) {
                i.selected = "false"
            } else {
                i.selected = "true"
            }
        });

        setItems(items);
    }


    useEffect(() => {
        let items = [
            {
                name: "Graduação",
                uri: "#",
                selected: 'false',
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
                selected: 'false',
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
            }
        ];

        setItems(items);

    }, [])


    return (
        <aside id="lateral" className="lateral d-none d-sm-block col-lg-3 col-md-4">
            <h3>{props.titleMenu}</h3>
            <nav className="menu-lateral">
                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <li className="item-parent has-child" key={index}>

                                    <span
                                        className={"far " + (item.selected === "false" ? 'fa-plus-square' : 'fa-minus-square')}
                                        onClick={() => toggleHide(item)}></span>

                                    <a href={item.uri}>{item.name}</a>

                                    <ul className={"nested " + (item.selected === "true" ? 'active' : '')}>
                                        {
                                            item.childs.map((c, key) => {
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