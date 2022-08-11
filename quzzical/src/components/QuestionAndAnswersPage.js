export default function QuestionAndAnswersPage(props){
    return (
    <div className="qna-page">
        <div className="top-shape qna__top-shape"></div>
        <div className="quiz-container">
            <div className="qna">
                <p className="qna__question">Pytanie 1</p>
                <ul className="qna__answers">
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 1</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 2</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 3</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 4</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 5</button>
                    </li>
                </ul>
            </div>

            <div className="qna">
                <p className="qna__question">PYTANIE 1</p>
                <ul className="qna__answers">
                    <li className="qna__answer">
                        <button  className="qna__answer-button">smth 1</button>
                    </li>
                    <li className="qna__answer">
                        <button  className="qna__answer-button">smth 2</button>
                    </li>
                    <li className="qna__answer">
                        <button  className="qna__answer-button">smth 3</button>
                    </li>
                    <li className="qna__answer">
                        <button  className="qna__answer-button">smth 4</button>
                    </li>
                    <li className="qna__answer">
                        <button  className="qna__answer-button">smth 5</button>
                    </li>
                </ul>
            </div>

            <div className="qna">
                <p className="qna__question">PYTANIE 1</p>
                <ul className="qna__answers">
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 1</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 2</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 3</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 4</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 5</button>
                    </li>
                </ul>
            </div>

            <div className="qna">
                <p className="qna__question">PYTANIE 1</p>
                <ul className="qna__answers">
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 1</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 2</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button qna__answer-button--disable">smth 3</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 4</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button qna__answer-button--correct">smth 5</button>
                    </li>
                </ul>
            </div>

            <div className="qna">
                <p className="qna__question">PYTANIE 1</p>
                <ul className="qna__answers">
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 1</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button qna__answer-button--correct">smth 2</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 3</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 4</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 5</button>
                    </li>
                </ul>
            </div>

            <div className="qna">
                <p className="qna__question">PYTANIE 1</p>
                <ul className="qna__answers">
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 1</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 2</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button ">smth 3</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button qna__answer-button--incorrect">smth 4</button>
                    </li>
                    <li className="qna__answer">
                        <button className="qna__answer-button">smth 5</button>
                    </li>
                </ul>
            </div>
            <div className="qna__summary">
                  <p className="qna__summary-scores">You scored 3/5 correct answers</p>
                  <button className="qna__summary-button">Check answer</button>
            </div>
        </div>
        <div className="bottom-shape qna__bottom-shape"></div>
    </div>
    )
}