import React from "react"
export default function QnACard(props){

    const [qnaCard, setQnaCard] = React.useState({
        question: props.question,
        correct_answer: props.correct_answer,
        incorrect_answers: props.incorrect_answers
    })

    const randomArr = [];
    const numberOfAnswers = props.incorrect_answers.length + 1;

    function randomOrder(){
        for (let i = 0; i < numberOfAnswers; i++) {
            randomArr[i] = Math.floor(Math.random()*4) 
        }
        return randomArr 
    }

    randomOrder()

    const normalize = text => text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");

    function handleClick(event) {
        console.log(randomArr)
        console.log(event.target)
    }

    return (
        <div className="qna">
            <p className="qna__question">{normalize(qnaCard.question)}</p>
            <ul className="qna__answers">
                <li className="qna__answer">
                    <button onClick={handleClick} className="qna__answer-button">{normalize(qnaCard.incorrect_answers[0])}</button>
                </li>
                <li className="qna__answer">
                    <button onClick={handleClick} className="qna__answer-button">{normalize(qnaCard.incorrect_answers[2])}</button>
                </li>
                <li className="qna__answer">
                    <button onClick={handleClick} className="qna__answer-button">{normalize(qnaCard.correct_answer)}</button>
                </li>
                <li className="qna__answer">
                    <button onClick={handleClick} className="qna__answer-button">{normalize(qnaCard.incorrect_answers[1])}</button>
                </li>
            </ul>
        </div>
    )
}