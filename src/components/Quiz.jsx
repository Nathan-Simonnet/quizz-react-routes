import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

import logo from "../assets/images/question-mark-title.png"
import dataQuestions from '../assets/data/data.json';
import "../styles/Quiz.css"
//** */ let totalPoints = 0;

const Quiz = () => {
    // At then end of the questions, we go to /end with this
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    //**more react way, but it worked anyway, track the good answer
    const [totalPoints, setTotalPoints] = useState(0);
    //* Same as let "playOnce" = true ect
    const [initialRender, setInitialRender] = useState(false);

    useEffect(() => {
        // if answer = choice, add correct class to color green or red
        const handleButtonClick = (event) => {
            const clickedButton = event.target.id;
            const answer = dataQuestions[counter].answer;

            if (clickedButton == answer) {
                document.getElementById(clickedButton).classList.add('good-response');
                //**  totalPoints++;
                setTotalPoints((prevPoints) => prevPoints + 1);
            } else {
                document.getElementById(clickedButton).classList.add('bad-response');
                document.getElementById(answer).classList.add('good-response');
            }

            // /prevent the user from clicking during the transition
            document.getElementById('quiz').style.pointerEvents = "none"

            // in x seconde, change the counter, and so the render
            setTimeout(() => {

                if (counter < dataQuestions.length - 1) {
                    setCounter(prevCounter => prevCounter + 1);
                } else {
                    //** */ totalPoints = 0;
                    setTotalPoints(0)
                    navigate("/End");
                }
                document.getElementById('quiz').style.pointerEvents = "auto";
                document.getElementById(clickedButton).classList.remove('bad-response');
                document.getElementById(answer).classList.remove('good-response');
            }, 10);
        };

        // The event for calling handleButtonClick when buttons are clicked
        document.querySelectorAll('button').forEach((btn) => {
            btn.addEventListener('click', handleButtonClick);
        });

        // Ah, you will have to work the 3 phases of components (Mounting, updating, dismounting) and their sub phases
        // You don't HAVE to dismount obviously, but for this one... welle i didn't try to keep it... hmmm, test tiiiime (pray for me)
        // WOOOOOOOOOOOW ok non non non we keep it, on va avoir des devoir à faire pour bien comprendre tout ce bazar 
        return () => {
            document.querySelectorAll('button').forEach((btn) => {
                btn.removeEventListener('click', handleButtonClick);
            });
        };
    }, [counter, navigate, totalPoints]);

    // Track the total point, i had to encapsulate it in his corner, alone... without friend... Otherwise it was launched before initialRender, obviously, the names... 
    useEffect(() => {
        //* playOnce ect
        if (initialRender) {
            console.log('Total Points:', totalPoints);
        } else {
            setInitialRender(true);
        }
    }, [totalPoints, initialRender]);

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
                        <button id={dataQuestions[counter].choices[0]} >{dataQuestions[counter].choices[0]}</button>
                        {/* Another method too, not for this one... oooor perhaps... another test héhé */}
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </div>
                    <div className="button-container">
                        <button id={dataQuestions[counter].choices[1]}>{dataQuestions[counter].choices[1]}</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </div>
                    <div className="button-container">
                        <button id={dataQuestions[counter].choices[2]} >{dataQuestions[counter].choices[2]}</button>
                        {/* <button id="ready" onClick={handleButtonClick}>Ready?</button> */}
                    </div>
                    <div className="button-container">
                        <button id={dataQuestions[counter].choices[3]} >{dataQuestions[counter].choices[3]}</button>
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