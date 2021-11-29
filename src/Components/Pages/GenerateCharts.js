import React, { useState, useEffect } from "react";
import Header from "../Header";
import Charts from "../Charts";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import '../GenerateCharts.css';
import { MdCameraAlt } from 'react-icons/md';

const GenerateCharts = () => {

  //let [gerar, setGerar] = useState(0);

  const { handleSubmit, register, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  } 

  let [name, setName] = useState("");
  let [x, setX] = useState();
  let [y, setY] = useState();
  let [type, setType] = useState();

  function getInput(){
    const inputName = document.querySelector("#name");
    const inputX = document.querySelector("#x");
    const inputY = document.querySelector("#y");
    const inputType = document.querySelector("#type");

    const valueName = inputName.value;
    const valueVarX = inputX.value;
    const valueVarY = inputY.value;
    const valueType = inputType.value;

    const valueX = valueVarX.split(",");
    const valueY = valueVarY.split(",");

    setName(name = valueName);
    setX(x = valueX);
    setY(y = valueY);
    setType(type = valueType);

    fetch('https://graphics-api.herokuapp.com/api/graphics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          "nomeGrafico": name,
          "userId": 1,
          "values": [
            {
            "name": "x",
            "values": valueVarX
            },
            {
            "name": "y",
            "values": valueVarY
            },
            {
              "name": "type",
              "values": type
            }
          ]
        })
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
  }

  let userInput = [
    {
        "x": x,
        "y": y,
        "type": type
    }];

  /*useEffect(() => {
    if (gerar == 1) {
      
      setGerar(gerar = gerar + 1);    
    }
  })*/

  return (
    <>
        <Header />
        <h2>Preencha os dados desejados para gerar o gráfico:</h2>
        <div className="charts-form">
          <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                  <p>Digite o nome para o gráfico:</p>
                  <input className="input-focus" id="name" type="text" name="name"
                  {...register('name', { required: true})}/>
              </label>
              <label>
                  <p>Selecione o tipo de gráfico:</p>
                  <select className="input-focus select" id="type" type="text" name="type"
                  {...register('type', { required: true})}>
	                  <option value="bar" selected>Gráfico de barras</option>
	                  <option value="scatter">Gráfico de linhas</option>
                  </select>
              </label>
              <label>
                  <p>Digite os nomes/valores da coluna(parte inferior do gráfico) separando cada valor por vírgula:</p>
                  <input className="input-focus" id="x" type="text" name="x"
                  {...register('x', { required: true})}/>
              </label>
              <label>
                  <p>Digite os nomes/valores correspondentes aos dados inseridos anteriormente(parte lateral do gráfico) <br/> separando cada valor por vírgula:</p>
                  <input className="input-focus" id="y" type="text" name="y"
                  {...register('y', { required: true})}/>
              </label>
              <div>
                  <button id="submit-button" type="submit" onClick={getInput}>Gerar gráfico:</button>
              </div>
              <p id="download">Após gerar o gráfico clique no botão  <MdCameraAlt />  caso queira baixar uma cópia</p>
          </form>
        </div>
        <div id="charts">
          <Charts data={userInput} name={name}/>
        </div> 
    </>
  );
}

export default GenerateCharts;

//<Charts data={FormData}/>