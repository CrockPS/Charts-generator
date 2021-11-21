import React from 'react';
import { Link } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Welcome.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ex1 from "./Images/ChartsExample1.png";
import ex2 from "./Images/ChartsExample2.png";
import ex3 from "./Images/ChartsExample3.png";
import ex4 from "./Images/ChartsExample4.png";

const Welcome = () => {

        return (
        <>
            <div id="welcome">
                <h1>Bem vindo ao nosso gerador de gráficos!</h1>
                <p id="welcome-p">Você insere os dados e nós convertemos em gráficos, simples assim! Escolha qual o melhor tipo de gráfico para se adequar as suas necessidades com base nos dados que forem fornecidos, rápido e fácil assim mesmo. Veja abaixo alguns exemplos de gráficos que podem ser gerados aqui ou então clique no botão abaixo para ir direto gerar seus gráficos:</p>
                <Link to="/GenerateCharts" id="link"> <h3>Gerar gráficos</h3> </Link>
                <div id="slide"><AliceCarousel autoPlay autoPlayInterval="1000" infinite>
                    <img src={ex1} className="sliderimg"/>
                    <img src={ex2} className="sliderimg"/>
                    <img src={ex3} className="sliderimg"/>
                    <img src={ex4} className="sliderimg"/>
                </AliceCarousel></div>
            </div>
        </>
        )
}

export default Welcome;