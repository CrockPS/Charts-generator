import React from 'react';
import Plot from 'react-plotly.js'

/**
 * Create two arrays num length with random values from 0 to mul
 *
 * @param {*} num
 * @param {*} mul
 * @returns
 */
function randomValues(num, mul) {
  const arr = [];
  const index = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random() * mul)
    index.push(i);
  }
  return {index, arr};
}

/**
 * Main application component
 *
 * @returns
 */
const Charts = () => {
  const traces = Array(3).fill(0).map((_, i) => {
    const {index, arr} = randomValues(20, 3);
    return {
      x: Array(20).fill(i),
      y: index,
      z: arr,
      type: 'scatter3d',
      mode: 'lines'
    }
  });
//[1, 1, 1, 1, 1, 1, 1, 1, 1],
  return (
    <>
        <Plot
        data={traces}
            layout={{
                width: 500,
                height: 500,
                title: `Simple 3D Scatter`
            }}
        />
        <Plot
        data={[
          {
            x: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            y: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro'],
            z: [3, 4, 2, 6, 8, 2, 9, 3, 5],
            type: 'scatter3d',
            mode: 'lines',
            marker: {color: 'red'},
          },
          {
            x: [2, 2, 2, 2, 2, 2, 2, 2, 2],
            y: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro'],
            z: [5, 9, 4, 1, 8, 2, 4, 1, 3],
            type: 'scatter3d',
            mode: 'lines',
            marker: {color: 'green'},
          },
        ]}
        layout={ {width: 500, height: 500, title: 'A Fancy Plot'} }
      />
    </>
  );
}

export default Charts;