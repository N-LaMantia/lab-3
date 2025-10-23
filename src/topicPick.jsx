//imports
import calcQ from './data/calculusQ.json'
import './topicPick.css';

//MATH SUBJECTS

function CalculusQuiz() {
    console.log("Calculus Quiz selected.");
    return (
        <>
            <div className="calc-quiz-container">
                <h1>{calcQ.title}</h1>
            </div>
        </>
    )

}
function AlgebraQuiz() {
    console.log("Algebra Quiz selected.");
}
function GeometryQuiz() {
    console.log("Geometry Quiz selected.");
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