import './App.css';
import { useState } from 'react';

function App() {
  const perguntas = [
    {
    questao: "Em que ano morreu John Lennon",
    opcoes:[
      {opcao: "1980", isCorrect: true},
      {opcao: "1977", isCorrect: false},
      {opcao: "1970", isCorrect: false},
      {opcao: "1975", isCorrect: false}
    ]
  },
    {
      questao: "Qual é a capital da Espanha?",
        opcoes:[
          {opcao: "Barcelona", isCorrect: false},
          {opcao: "Washington", isCorrect: false},
          {opcao: "Londres", isCorrect: false},
          {opcao: "Madri", isCorrect: true},
        ]
      } ,
      {
        questao: "Em que ano morreu Ayrton Senna?",
          opcoes:[
            {opcao: "1987", isCorrect: false},
            {opcao: "1994", isCorrect: true},
            {opcao: "1989", isCorrect: false},
            {opcao:"1992", isCorrect: false}
          ]
        },
        {
        questao: "Quantos eram os integrantes dos Beatles?",
          opcoes:[
            {opcao: "4", isCorrect: true },
            {opcao: "3", isCorrect: false},
            {opcao: "5", isCorrect: false},
            {opcao: "6", isCorrect: false}
          ]
        }
      
      ]
    
    const[showScore, setShowScore] = useState(false);
    const[score, setScore] = useState(0);
    const[currentQuestion, setCurrentQuestion] = useState(0);

    const handleClick = (isCorrect) =>{
      if(isCorrect){
        setScore(score+1);
      }
      const nextQuestion = currentQuestion + 1;
      if(nextQuestion < perguntas.length){
        setCurrentQuestion(nextQuestion);
      }
      else{
        setShowScore(true);
      }

    }
    return (
    <div className='app'>
    {showScore ? (
      <div className='score-section'>
        You scored {score} out of {perguntas.length}
      </div>
    ) : (
      <>
      <div className='cabecalho'>
      <h1>Quiz do BTC</h1>
          Quiz de conhecimentos em Bitcoin. Você acha que conhece tudo de BTC? Teste seus conhecimentos sobre a rede, protocolos, wallets, etc
        </div>
        <div className='questionario'>
          <div className='question-text'>{perguntas[currentQuestion].questao}</div>
        
        <div className='answer-section'>
          {perguntas[currentQuestion].opcoes.map((option) => (
            <button onClick={() => handleClick(option.isCorrect)}>{option.opcao}</button>
          ))}
        </div>
        </div>
      </>
    )}
  </div>
);
          }

export default App;