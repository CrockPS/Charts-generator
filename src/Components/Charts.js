import React from 'react';
import Plot from 'react-plotly.js';


const Charts = (props) => {

  
   /*var x = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   var y = [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17]
   var tipo = 'bar'*/

  return (
      <>
         <Plot
            data={props.data}
            layout={ {width: 500, height: 500, title: props.name} }
            config={{displayModeBar: true, displaylogo: false, scrollZoom: true, modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d']}}
         />
      </>
    );
}

export default Charts;

/*

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

|||||||||||||||||||||||||||||||||||||||||||||||||\

{
   "nomeGrafico":"grafico1",
   "valores":[
      {
         "nome":"x",
         "valores":"1, 2, 3, 4"
      },
      {
         "nome":"y",
         "valores":"10, 11, 12, 13"
      },
      {
         "nome":"size",
         "valores":"40, 60, 80, 100"
      },
      {
         "nome":"mode",
         "valores":"markers"
      }
   ]
}
*/