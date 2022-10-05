import React from "react";


export function IntranetContent({children}:any){
    return (
        <section id="content" className="content col-lg-9 col-md-8">
        <div className="content">
            { children }
       </div>
    </section>

    )    
}