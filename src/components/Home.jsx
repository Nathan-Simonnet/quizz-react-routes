import React from 'react';
import "../styles/Home.css"
import logo from "../assets/images/question-mark-title.png"
import dataQuestions from '../assets/data/data.json';
import { Link } from "react-router-dom";

// TOUT le code en commentaire représente une autre possibilité (à étudier)
// import { useNavigate } from "react-router-dom";

export const Home = () => {

    // const navigate = useNavigate();
    // const handleButtonClick = () => {
    //     console.log('Button clicked');
    //     navigate("/Quiz");
    // };

    return (
        <div className='first-child' id="home" >
            <header>
                <div className="title-container">
                    <h1><span>Q</span>uiz</h1>
                    <div className="question-mark-container"><img src={logo} alt="" /></div>
                </div>
            </header>

            <main>
                <div className="presentation-container">
                    <p><span className="total-questions-counter">{dataQuestions.length} </span>questions, no timer, javascript only (for the moment...)</p>
                </div>

                <div className="button-container">
                    <Link to="/Quiz">
                        <button id="ready" >Ready?</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </Link>
                </div>
            </main>

            <footer>
                <div className="questions-counter-container">
                    <span id="current-question-counter">0</span> / <span className="total-questions-counter">{dataQuestions.length}</span>
                </div>
            </footer>
        </div>
    );
};

export default Home;