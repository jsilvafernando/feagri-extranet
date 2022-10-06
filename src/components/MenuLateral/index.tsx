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
    let [optMenuLateral, setOptMenuLateral] = useState(menuitems);

    const getMenu = async () =>{

        const header = {
            'Content-Type': 'application/json'
        }

        await api.get(`/jmenu/alltype?menu=${optMenuLateral}` )
            .then( (response) => {
                // console.log(response.data.menus)
                setMenu(response.data.menus);
            }).catch( (err) =>{
                if (err.response){
                    return console.log(`Erro: ${err.response}`)
                } else {
                    console.log('Erro: tente mais tarde !!!')
                }
            })
      }
    

    useEffect(() => {
        if (!optMenuLateral)
            return;

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
                        menu.map((item: ItemMenu, index: number) => {
                            return (
                                <li className="item-parent has-child" key={index}>

                                    <span
                                        className={"far " + (!item.selected ? 'fa-plus-square' : 'fa-minus-square')}
                                        onClick={() => toggle(item)}></span>

                                    {
                                    item.path 
                                    ? <a href={item.uri+item.path}>{item.title}</a> 
                                    : <a href={item.uri} onClick={() => toggle(item)}>{item.title}</a>
                                    }
                                    

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


    