import React, { useState, useEffect } from "react";
import Header from "../Header";
import Charts from "../Charts";

export default function Historic(){

    const [graphics, setGraphics] = useState([]);

    let fetchData = 'https://graphics-api.herokuapp.com/api/graphics/1';

    useEffect(() => {    
        const jwtValue = localStorage.getItem('jwt');
        fetch(fetchData, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': jwtValue},
            
        })

        .then((r)=>r.json())
            .then(
                (r)=>{
                    const teste = r;
                    //console.log(teste.graphics[0]);
                    //setGraphics(teste.graphics[1]);
                    console.log(teste.graphics[0].graphicName);
                    for (let i; i < teste.graphics.length ; i++){
                        console.log(teste[i])
                    }
                    setGraphics(teste);
                }
            )
        .catch(error => console.error(error))

    }, []);

    /*let userInput = [
        {
            "x": '1,2,3,4,5',
            "y": '1,2,3,4,5',
            "type": 'bar'
        }];*/

    let name = 'teste'

    /*graphics.graphics.forEach(element => {
        console.log(element)
    });
    let a = []
    graphics.graphics[0].forEach(element => 
        console.log(element)
    );*/

    function teste(){
        for (let i; i < graphics.graphics.length ; i++){
            console.log(graphics.graphics)
        }
    }
    //console.log("grafico useState: ",graphics.graphics.length);
    
    
    //document.querySelector("#teste").innerHTML = graphics.graphics[0].values[0].values;

    return(
        <>
            <Header />
            <h2>Histórico de gráficos:</h2>
            <div>
                <button onClick={teste}>teste</button>
            </div>
        </>
    )
}