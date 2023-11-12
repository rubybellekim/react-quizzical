import { useState, useEffect, React } from "react";
import axios from "axios";
import blueBlob from "./assets/blue.svg";
import yellowBlob from "./assets/yellow.svg";
import "./index.css";

function App() {
  const [show, setShow] = useState(false);
  const [allQuiz, setAllQuiz] = useState([]);

  useEffect(() => {
    async function getQuiz() {
      setAllQuiz(data.data.quizes);
    }
    getQuiz();
  }, []);

  function quizStart() {
    setShow(true);
    const quizPage = (
      <main className="quiz-page">
        <div className="quiz-contents"></div>
        <h1>TEST</h1>
      </main>
    );
    return quiz;
  }

  return (
    <div className="canvas">
      <img src={yellowBlob} className={show ? "yellowBlob-s" : "yellowBlob"} />
      {!show && (
        <main className="landing-page">
          <div className="contents">
            <h1 className="title">Quizzical</h1>
            <p>Some description if needed</p>
            <button className="start-btn" onClick={quizStart}>
              Start quiz
            </button>
          </div>
        </main>
      )}
      <img src={blueBlob} className={show ? "blueBlob-s" : "blueBlob"} />
    </div>
  );
}

export default App;
