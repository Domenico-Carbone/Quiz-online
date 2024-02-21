import "./StartButton.css"

export default function StartButton({start}){
    return(
        <div className="start-container">
            <h2>ARE YOU READY TO START?</h2>
            <p>you will have to answer seven questions and there will be three options</p>
            <div className="options">
                <p>Skipped</p>
                <p>Correct</p>
                <p>Wrong</p>
            </div>
            <button onClick={start} className="button-start">Start</button>
        </div>
    );
}