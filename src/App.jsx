import { useState } from 'react'
import './App.css'
import { mathButtonClick } from './genTopics';
import { historyButtonClick } from './genTopics';
import { scienceButtonClick } from './genTopics';
import { literatureButtonClick } from './genTopics';


function App() {
  const [viewMathTopics, setViewMathTopics] = useState(false)
  const [viewHistoryTopics, setViewHistoryTopics] = useState(false)
  const [viewScienceTopics, setViewScienceTopics] = useState(false)
  const [viewLiteratureTopics, setViewLiteratureTopics] = useState(false)


  //functions to handle general button clicks 
  function handleMathClick() {
    mathButtonClick();
    setViewMathTopics(true);
    setViewHistoryTopics(false);
    setViewScienceTopics(false);
    setViewLiteratureTopics(false);
  }

  function handleHistoryClick() {
    historyButtonClick();
    setViewHistoryTopics(true);
    setViewMathTopics(false);
    setViewScienceTopics(false);
    setViewLiteratureTopics(false);
  }

  function handleScienceClick() {
    scienceButtonClick();
    setViewScienceTopics(true);
    setViewMathTopics(false);
    setViewHistoryTopics(false);
    setViewLiteratureTopics(false);
  }

  function handleLiteratureClick() {
    literatureButtonClick();
    setViewLiteratureTopics(true);
    setViewMathTopics(false);
    setViewHistoryTopics(false);
    setViewScienceTopics(false);
  }


  //RETURN STATEMENT
  return (
    <>
      <h1 className="page-title">Welcome to Quick Quizzes!</h1>
      <br></br>
      <br></br>
      <div className="topic-container">
        <button className="math-button" onClick={handleMathClick}>Math</button>
        <button className="history-button" onClick={handleHistoryClick}>History</button>
        <button className="science-button" onClick={handleScienceClick}>Science</button>
        <button className="literature-button" onClick={handleLiteratureClick}>Literature</button>
      </div >
      {viewMathTopics && (
        <>
          <h1 className="math-title">Math Topics</h1>
          <br></br>
          <br></br>
          <div className="math-topic-container">

            <button className="Calculus Quiz">Calculus</button>

            <button className="Algebra Quiz">Algebra</button>

            <button className="Geometry Quiz">Geometry</button>
          </div >
        </>
      )}
      {viewHistoryTopics && (
        <>
          <h1 className="history-title">History Topics</h1>
          <br></br>
          <br></br>
          <div className="history-topic-container">
            <button className="Canada History Quiz">Canadian History</button>
            <button className="USA History Quiz">USA History</button>
            <button className="Japan History Quiz">Japan History</button>
          </div >
        </>
      )}
      {viewScienceTopics && (
        <>
          <h1 className="science-title">Science Topics</h1>
          <br></br>
          <br></br>
          <div className="science-topic-container">
            <button className="Physics Quiz">Physics</button>
            <button className="Chemistry Quiz">Chemistry</button>
            <button className="Biology Quiz">Biology</button>
          </div >
        </>
      )}
      {viewLiteratureTopics && (
        <>
          <h1 className="literature-title">Literature Topics</h1>
          <br></br>
          <br></br>
          <div className="literature-topic-container">
            <button className="Poetry Quiz">Poetry</button>
            <button className="Novel Quiz">Novels</button>
            <button className="Play Quiz">Plays</button>
          </div >
        </>
      )}
    </>
  )
}

export default App
