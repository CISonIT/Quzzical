import React from "react"
import QnACard from "./QnACard.js";

export default function QuestionAndAnswersPage(props){

    return (
    <div className="qna-page">
        <div className="top-shape qna__top-shape"></div>
        <div className="quiz-container">
            <QnACard />
            <QnACard />
            <QnACard />
            <QnACard />
            <QnACard />
            <div className="qna__summary">
                  <p className="qna__summary-scores">You scored 3/5 correct answers</p>
                  <button className="qna__summary-button">Check answer</button>
            </div>
        </div>
        <div className="bottom-shape qna__bottom-shape"></div>
    </div>
    )
}