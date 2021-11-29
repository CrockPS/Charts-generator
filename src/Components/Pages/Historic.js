import React, { useState, useEffect } from "react";
import Header from "../Header";

export default function Historic(){

    const [graphics, setGraphics] = useState([]);

    useEffect(() => {    
        fetch('https://graphics-api.herokuapp.com/api/graphics/1', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        })

        .then((r)=>r.json())
            .then(
                (r)=>{
                    setGraphics(r)
                }
            )
        .catch(error => console.error(error))

        console.log(graphics)
    });

    return(
        <>
            <Header />
            <h2>Histórico de gráficos:</h2>
            <div>
                {Object.keys(graphics).map(
                    graphics => <div key={graphics.graphics}>{graphics.graphicName}</div>
                )}
            </div>
        </>
    )
}