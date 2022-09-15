import React from "react";

interface Breadcrumb{
    title: string;
    icon: string;
    subTitle: string;
}

export function Breadcrumbs({title, icon }: Breadcrumb){
    return (
        <div className="row">
        <section id="breadcrumbs" className="col-md-12">
            <nav className="breadcrumbs">
                <ol>
                    <li><a href="/extranet/"><span className={icon}></span></a></li>
                    <li className="active">{title}</li>
                </ol>
            </nav>
        </section>
    </div>
)    
}