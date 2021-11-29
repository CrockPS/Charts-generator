import React, { useState, useEffect } from "react";
import Header from "../Header";

const Historic = () => {

    const [teste, setTeste] = useState([]);

    useEffect(()=> {
        fetch('https://graphics-api.herokuapp.com/api/graphics/1', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })

    .then((r)=>r.json)
    .then(
            console.log(r)
        )

    //.then(function(res){ console.log(res) })
    //.catch(function(res){ console.log(res) })
        })

    function testeB(){
    console.log("aqui" + teste);}

    return(
        <>
            <Header />
            <button onClick={testeB}>Teste</button>
        </>
    )
}

export default Historic;