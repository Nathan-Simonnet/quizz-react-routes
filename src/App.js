
import "./style.css"

const App = () => {
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
                    <button id="ready">Ready?</button>
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

export default App;