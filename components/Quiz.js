import { useEffect, useState } from "react"
import QuestionAPI from "../lib/Question";

import styles from "./Quiz.module.css"

const answeredQuestions = []
export default function Quiz(){

    



    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState("")
    const [solution, setSolution] = useState("")
    const [round, setRound] = useState(0)
    const [points, setPoints] = useState(0)
    const [solved, setSolved] = useState(false)
    const [feedback, setFeedback] = useState("")




    const getNextQuestion = async  () => {

        let data;
        console.log("Funktion wird aufgerufen")
        let newQuestion = true;
        while (newQuestion){

     try{
     data = await QuestionAPI.getRandomQuestion();
        console.log("Response in der Quiz-Komponente: " + data.question)
        if (!answeredQuestions.includes(data.question)){
            console.log("Frage ist neu!")
            answeredQuestions.push(data.question)
            console.log("Array mit schon beantworteten Fragen: " + answeredQuestions)
            newQuestion = false;
        }
     }catch{
        console.log("Request fehlgeschlagen")
     }
    }
     
     // FRAGEN SETZEN
     let q = data.question
     setQuestion(q)
     let s = data.rightAnswer
     setSolution(s)

     let questions = [data.rightAnswer, data.wrongAnswer1, data.wrongAnswer2, data.wrongAnswer3]
     shuffleArray(questions)
     setAnswers(questions)
     setFeedback("")
    
     console.log("Quiz Komponente fertig")

     setRound(round + 1)
     setSolved(false)
    
    }


    const checkAnswer = (e) => {
        let chosen = e.target.value
        console.log(chosen)

        //Richtige Antwort: Punkte um eins erhöhen

        if (chosen == solution){
            console.log("Richtige Antwort ausgewählt")
            setPoints(points + 1)
            setFeedback("Richtig!")
        }else{
            console.log("Falsche Antwort")
            setFeedback("Falsch")
        }
        

        setSolved(true)


    } 


    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }


      useEffect(()=>{

      }, [solved, feedback])
      



    return round == 0 ?  (
        <>
                        <button onClick={getNextQuestion}>Start Quiz</button>

        </>
    ) : round <= 5 ?  (
        <div>
            <h1>Quizfrage {round}/5</h1>
            <p>Punkte {points}</p>
            <h2>{question}</h2>

            {answers.map(answer => {
               return !solved ? 
                  (   
                        <button key={answer} value={answer} onClick={checkAnswer}>{answer}</button>
                    
                ) : (
                    <button disabled key={answer} value={answer} className={solution == answer ? styles.green : styles.red }>{answer}</button>
                )

                }
            )

            }
            



            <br></br> 
            <p>{feedback}</p>          

            {round == 5 ? <button onClick={() => setRound(round + 1)}>Zur Auswertung</button> : <button disabled={!solved} onClick={getNextQuestion}>Nächste Frage</button>  }
            




        
        </div>
    ) : (
        <div>
        <p>Quiz fertig</p>
        <p>Du hast  {points} {points == 1 ? "Punkt" : "Punkte"} geholt</p>

        </div>
        
    )

        


}


