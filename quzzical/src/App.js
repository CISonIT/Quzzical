import IntroPage from "../src/components/IntroPage.js"
import QuestionAndAnswersPage from "../src/components/QuestionAndAnswersPage.js"
import '../src/styles/IntroPage.css'
import '../src/styles/QuestionAndAnswers.css'
import React from "react"

export default function App() {
  const [swapPage, setSwapPage] = React.useState(true)

// Mam zaciągnięte API, które zwraca tablice 5 obiektów
// Teraz chce, żeby przekazać wartości pojedyńczego indeksu z tablicy do komponetu z <QuestionAndAnswersPage>
// A w komponencie QuestionAndAnswersPage ustawić wartość (zmienna, useState) dla każdego pytania
// Pamiętać, zeby nie wpaść w infinite loop
// Jeżeli to się uda, to potem "bawić się" w komonencie QnACard
// Wstępnie ak wyglądają zadania na jutro
// potem ogarnąć funkcjonalność quziową

// Zrobić szybki re-cap kursu

  function initGame(){
    setSwapPage(!swapPage)
  }

  const whatToRender = swapPage ?
    <IntroPage handleClick={()=>initGame()} isClicked={swapPage}/> :
    <QuestionAndAnswersPage/>

  return (
    <div>
      {whatToRender}
    </div>
  );
}