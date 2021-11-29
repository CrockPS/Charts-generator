import React, { useState, useEffect } from "react";
import Header from "../Header";

export default function Historic(){

    const [graphics, setGraphics] = useState([]);

    let fetchData = 'https://graphics-api.herokuapp.com/api/graphics/1';

    useEffect(() => {    
        fetch(fetchData, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        })

        .then((r)=>r.json())
            .then(
                (r)=>{
                    const teste = r;
                    //console.log(teste.graphics[0]);
                    //setGraphics(teste.graphics[1]);
                    setGraphics(teste);
                }
            )
        .catch(error => console.error(error))

    }, []);

    console.log(graphics);

    return(
        <>
            <Header />
            <h2>Histórico de gráficos:</h2>
            <div>
            </div>
        </>
    )
}