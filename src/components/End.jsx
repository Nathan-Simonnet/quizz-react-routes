import { useScore } from '../ScoreContext';
import { useNavigate } from "react-router-dom";
import data from '../assets/data/data.json';
import "../styles/End.css"

const End = () => {

    const { score } = useScore();
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate("/Quiz");
    }

    return (
        <div id="end-page">
            <h1><span id="first-letter">Y</span>our score: <span>{score}/{data.length}</span></h1>
            <button onClick={handleButtonClick}>Restart</button>
        </div>
    );
};

export default End;