import React from 'react';
import "./style.css"
import dataQuestions from './data.json';
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

console.log(dataQuestions[1].answer)

const Home = () => {

    // const navigate = useNavigate();
    // const handleButtonClick = () => {
    //     console.log('Button clicked');
    //     navigate("/Thank");
    // };

    return (
        <div id="first-child">
            <header>
                <div className="title-container">
                    <h1><span>Q</span>uiz</h1>
                    <div className="question-mark-container"><img src="../assets/images/question-mark-title.png" alt="" /></div>
                </div>
            </header>

            <main>
                <div className="presentation-container">
                    <p><span className="total-questions-counter">X </span>questions, no timer, javascript only (for the moment...)</p>
                </div>

                <div className="button-container">
                    <Link to="/Thank">
                        <button id="ready" >Ready?</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </Link>
                </div>
            </main>

            <footer>
                <div className="questions-counter-container">
                    <span id="current-question-counter">1</span> / <span className="total-questions-counter">X</span>
                </div>
            </footer>
        </div>
    );
};

export default Home;