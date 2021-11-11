import React from 'react';
import Plot from 'react-plotly.js'


const Charts = () => {

  function cinco(){
    const contaInput = document.querySelector("#input1");
    const pessoaInput = document.querySelector("#input3");
    const conta = parseFloat(contaInput.value, 10);
    const pessoa = parseFloat(pessoaInput.value, 10);

    var tipAmount = conta * 0.05 / pessoa;
    var total = tipAmount + conta / pessoa;

    document.querySelector("#value1").innerHTML = "$"+parseFloat(tipAmount.toFixed(2));}

  var x = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var y = [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17]

  var tipo = 'bar'

  return (
      <>
        <Plot
          data={[
            {type: tipo, x: x, y: y},
          ]}
          layout={ {width: 500, height: 500, title: 'A Fancy Plot'} }
        />

        <input type="text" id="input1"/>
        <input type="text" id="input1"/>
        <p id="result">resultado</p>
      </>
    );
}

export default Charts;