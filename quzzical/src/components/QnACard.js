import React from "react"
export default function QnACard(props){

    const [qnaCard, setQnaCard] = React.useState({
        question: props.question,
        correct_answer: props.correct_answer,
        incorrect_answers: props.incorrect_answers,
        answers: [...props.incorrect_answers, props.correct_answer]
    })

    //Co jest do zrobienia ?
    /*
    
     - rozlosowanie odpowiedzi -> zrobione (czy aby na pewno ?)
     - zmiana ul na zestaw formularzowy (input, label) -> type = "radio"
     - zliczanie poprawnych odpowiedzi -> zmienny state w componencie <QuestionAndAnswersPage />, który będzie counterem
     - możliwość ponownego rozlosowania kart quizowaych
     - podsumowanie wyniku po kliknięciu check answers -> nowa funckja

    */

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // function handleClick(e) {
    //     e.preventDefault();
    //     console.log(this)
    // }

    const normalize = text => text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");

    return (
        <div className="qna">
            <p className="qna__question">{normalize(qnaCard.question)}</p>
            <ul className="qna__answers">
                <li className="qna__answer">
                    <button className="qna__answer-button">{normalize(qnaCard.answers[0])}</button>
                </li>
                <li className="qna__answer">
                    <button className="qna__answer-button">{normalize(qnaCard.answers[1])}</button>
                </li>
                <li className="qna__answer">
                    <button className="qna__answer-button">{normalize(qnaCard.answers[2])}</button>
                </li>
                <li className="qna__answer">
                    <button className="qna__answer-button">{normalize(qnaCard.answers[3])}</button>
                </li>
            </ul>
        </div>
    )
}