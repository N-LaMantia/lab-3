//imports
import { useState, useEffect } from 'react';
import './topicPick.css';
import { readJsonFile } from './fileReader.js';

//MATH SUBJECTS

function CalculusQuiz() {
    const [quizData, setQuizData] = useState(null);

    useEffect(() => {
        readJsonFile('public/calculusQ.json').then(data => {
            setQuizData(data);
        });
    }, []);
    return (
        console.log(quizData),
        <div className="calc-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>

        </div>
    );

}


function AlgebraQuiz() {
    const [quizData, setQuizData] = useState(null);

    useEffect(() => {
        readJsonFile('algebraQ.json').then(data => {
            setQuizData(data);
        });
    }, []);

    return (
        <div className="alg-quiz-container">
            <h1>{quizData ? quizData.title : 'Loading...'}</h1>
        </div>
    );
}

function GeometryQuiz() {
    console.log("Geometry Quiz selected.");
    return (
        <>
            <div className="geo-quiz-container">
                <h1>Geometry Quiz</h1>
            </div>
        </>
    )
}
export { CalculusQuiz };
export { AlgebraQuiz };
export { GeometryQuiz };

//HISTORY SUBJECTS
function CanadaHistoryQuiz() {
    console.log("Canada History Quiz selected.");
}
function UsaHistoryQuiz() {
    console.log("USA History Quiz selected.");
}
function JapanHistoryQuiz() {
    console.log("Japan History Quiz selected.");
}
export { CanadaHistoryQuiz };
export { UsaHistoryQuiz };
export { JapanHistoryQuiz };

//SCIENCE SUBJECTS
function PhysicsQuiz() {
    console.log("Physics Quiz selected.");
}
function ChemistryQuiz() {
    console.log("Chemistry Quiz selected.");
}
function BiologyQuiz() {
    console.log("Biology Quiz selected.");
}
export { PhysicsQuiz };
export { ChemistryQuiz };
export { BiologyQuiz };

//LITERATURE SUBJECTS
function PoetryQuiz() {
    console.log("Poetry Quiz selected.");
}
function NovelQuiz() {
    console.log("Novel Quiz selected.");
}
function PlayQuiz() {
    console.log("Play Quiz selected.");
}
export { PoetryQuiz };
export { NovelQuiz };
export { PlayQuiz };