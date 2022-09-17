import React from "react"
import QnACard from "./QnACard.js";

export default function QuestionAndAnswersPage(props){
 
    const [allQna, setAllQna] = React.useState([])

    async function getAllQna() {
        const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        const data = await res.json()
        setAllQna(data.results)
    }

    React.useEffect(() => {
        getAllQna()

        return () => {
            
        };
    }, [])

    const qna = allQna.map(qnaElem => {
    return <QnACard
        question = {qnaElem.question}
        correct_answer = {qnaElem.correct_answer}
        incorrect_answers = {qnaElem.incorrect_answers}
        />
    })

    //zastosować na buttonie e.preventDefault - nie odświeżać strony

    return (
    <div className="qna-page">
        <div className="top-shape qna__top-shape"></div>
        <div className="quiz-container">
            <form>
                {qna}
                <div className="qna__summary">
                    <p className="qna__summary-scores">You scored 2/ {qna.length} correct answers</p>
                    <button onClick={getAllQna} className="qna__summary-button">Check answers</button>
                </div>
            </form>
        </div>
        <div className="bottom-shape qna__bottom-shape"></div>
    </div>
    )
}