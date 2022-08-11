import IntroPage from "../src/components/IntroPage.js"
import QuestionAndAnswersPage from "../src/components/QuestionAndAnswersPage.js"
import '../src/styles/IntroPage.css'
import '../src/styles/QuestionAndAnswers.css'
import React from "react"

export default function App() {
  const [swapPage, setSwapPage] = React.useState(true)

  function changePage(){
    setSwapPage(!swapPage)
    console.log(whatToRender)
  }

  const whatToRender = swapPage ? <IntroPage handleClick={()=>changePage()} isClicked={swapPage}/> : <QuestionAndAnswersPage />

  return (
    <div>
      {whatToRender}
    </div>
  );
}