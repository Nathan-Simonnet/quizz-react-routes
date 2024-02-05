import React from 'react';
import { useEffect, useState } from 'react';
import logo from "../assets/images/question-mark-title.png"
import dataQuestions from '../assets/data/data.json';
import "../styles/Quiz.css"
// import { useNavigate } from "react-router-dom";
const counter = 0;

const Quiz = () => {
    // const navigate = useNavigate();

    useEffect(() => {

        // const handleButtonClick = () => {
        //     counter++;
        //     console.log(counter);
        //     console.log('Button clicked');
        //     if (counter == dataQuestions.length) {
        //         navigate("/Home");
        //     }
        // };

        const handleButtonClick = () => {
            console.log('clicked')
        };

        document.querySelectorAll('button').forEach((btn) => {
            btn.addEventListener('click',
                handleButtonClick);
        });

        return () => {
            document.querySelectorAll('button').forEach((btn) => {
                btn.removeEventListener('click', handleButtonClick);
            });
        };



    }, []);

    return (
        <div className='first-child' id='quiz'>
            <header>
                <div className="title-container" >
                    <h1><span>Q</span>uiz</h1>
                    <div className="question-mark-container"><img src={logo} alt="" /></div>
                </div>
            </header>

            <main>
                <div className="presentation-container">
                    <p>{dataQuestions[counter].question}</p>
                </div>

                <div className='buttons-container'>
                    <div className="button-container">
                        <button id="ready" >{dataQuestions[counter].choices[0]}</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </div>
                    <div className="button-container">
                        <button id="ready" >{dataQuestions[counter].choices[1]}</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </div>
                    <div className="button-container">
                        <button id="ready" >{dataQuestions[counter].choices[2]}</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </div>
                    <div className="button-container">
                        <button id="ready" >{dataQuestions[counter].choices[3]}</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </div>
                </div>
            </main>

            <footer>
                <div className="questions-counter-container">
                    <span id="current-question-counter">{counter + 1}</span> / <span className="total-questions-counter">{dataQuestions.length}</span>
                </div>
            </footer>
        </div>
    )
}

export default Quiz;