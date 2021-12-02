import React, { useState, useEffect } from "react";
import Header from "../Header";
import Charts from "../Charts";

export default function Historic(){

    const [graphics, setGraphics] = useState([]);

    useEffect(() => {   
        buscaDadosHistorico();
    });

    async function buscaDadosHistorico(){

        const response = await fetch('https://graphics-api.herokuapp.com/api/graphics/1', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        });

        const data = await response.json();
        setGraphics(data.graphics);
        //console.log(data);

        data.graphics.forEach(element => {
            console.log(element);
        });

    }

    let userInput = [
        {
            "x": '1, 2, 3',
            "y": '1, 2, 3',
            "type": 'bar'
        }];

    const name = 'teste'

    //console.log(graphics.graphics[0])

    document.querySelector("#teste").innerHTML = graphics.graphics;

    return(
        <>
            <Header />
            <h2>Histórico de gráficos:</h2>
            <div id="teste">
            </div>
            <div id="charts">
                
            </div>
        </>
    )
}

/*{graphics.graphics.map(
                    //Monta grafico
                    graphics => <div key={graphics.graphicName}>{graphics.graphicName}</div>  
                )}
                
                
                <ul>{graphics.map(graphic => {
                    <li key={graphic.graphicName}>
                        <label>{graphic.graphicName}</label>
                    </li>
                })}
                </ul>*/