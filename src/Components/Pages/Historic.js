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

        /*data.graphics.forEach(element => {
            console.log(element);
        });*/

    }

    let [name, setName] = useState("");
    let [x, setX] = useState();
    let [y, setY] = useState();
    let [type, setType] = useState();

    function geraGrafico(graphic){
        console.log(graphic.graphicName);
        setName(graphic.graphicName);
        setX(graphic.values[0].values);
        setY(graphic.values[1].values);
        setType(graphic.values[2].values);
    }

    let userInput = [
        {
            "x": x,
            "y": y,
            "type": type
        }];

    //console.log(graphics.graphics[0])

    return(
        <>
            <Header />
            <h2>Histórico de gráficos:</h2>
            <ul>
                {graphics.map(graphic => (
                <li key={graphic.graphicName}>
                    <label>{graphic.graphicName}</label>
                    <button type="button" onClick={geraGrafico(graphic)}>
                        Gerar gráfico
                    </button>
                </li>
                ))}
            </ul>
            <div id="charts">
                <Charts data={userInput} name={name}/>
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