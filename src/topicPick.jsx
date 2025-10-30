//imports 
import { useState, useEffect } from 'react';
import './topicPick.css';
import { readJsonFile } from './fileReader.js';

//MATH SUBJECTS --------------------------------------------------------------

function CalculusQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('calculusQ.json').then(data => {
            setQuizData(data);
        });
    }, []);

    // Helper to render a question with options and answer (function inside function!)
    // qIdx = question index
    // q = question object
    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="calc-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    );

}


function AlgebraQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('algebraQ.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );



    return (
        <div className="algebra-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    );
}

function GeometryQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('geometryQ.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="geometry-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

export { CalculusQuiz };
export { AlgebraQuiz };
export { GeometryQuiz };

//HISTORY SUBJECTS -------------------------------------------------------------
function CanadaHistoryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('canadaHistoryQ.json').then(data => {
            setQuizData(data);
        });
    }, []);


    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    console.log("Canada History Quiz selected.");
    return (
        <div className="canada-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function UsaHistoryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('usHistoryQ.json').then(data => {
            setQuizData(data);
        });
    }, []);

    console.log("USA History Quiz selected.");
    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );
    return (
        <div className="USA-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
function JapanHistoryQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('japanHistoryQ.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );
    console.log("Japan History Quiz selected.");
    return (
        <div className="japan-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
export { CanadaHistoryQuiz };
export { UsaHistoryQuiz };
export { JapanHistoryQuiz };

//SCIENCE SUBJECTS -------------------------------------------------------------
function PhysicsQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('physics.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    console.log("Physics Quiz selected.");
    return (
        <div className="physics-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function ChemistryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('chemistry.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    console.log("Chemistry Quiz selected.");
    return (
        <div className="chemistry-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
function BiologyQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('biologyQ.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    console.log("Biology Quiz selected.");
    return (
        <div className="biology-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

export { PhysicsQuiz };
export { ChemistryQuiz };
export { BiologyQuiz };

//LITERATURE SUBJECTS ----------------------------------------------------------
function PoetryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('poetry.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    console.log("Poetry Quiz selected.");
    return (
        <div className="poetry-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function NovelQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('novels.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    console.log("Novel Quiz selected.");
    return (
        <div className="novels-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function PlayQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        readJsonFile('plays.json').then(data => {
            setQuizData(data);
        });
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    console.log("Play Quiz selected.");
    return (
        <div className="plays-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
export { PoetryQuiz };
export { NovelQuiz };
export { PlayQuiz };