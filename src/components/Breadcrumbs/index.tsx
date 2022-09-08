import React from "react";

interface Breadcrumb{
    title: string;
    icon: string;
}

export function Breadcrumbs(props: Breadcrumb){
    return (
        <div className="row">
        <section id="breadcrumbs" className="col-md-12">
            <nav className="breadcrumbs">
                <ol>
                    <li><a href="/"><span className={props.icon}></span></a></li>
                    <li className="active">{props.title}</li>
                </ol>
            </nav>
        </section>
    </div>
)    
}