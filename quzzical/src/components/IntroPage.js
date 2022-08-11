export default function IntroPage(props){
    return (
    <div className="intro-page">
        <div className="top-shape intro-page__top-shape"></div>
        <div className="intro-page__text">
            <h1>
                Quizzical
            </h1>
            <p>
                Test your knowledge about different topics
            </p>
            <button onClick={props.handleClick} className="button button_intro-page">
                Start quiz
            </button>
        </div>
        <div className="bottom-shape intro-page__bottom-shape"></div>
    </div>
    )
}