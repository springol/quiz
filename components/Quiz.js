import { useEffect, useState } from "react"
import QuestionAPI from "../lib/Question";

import styles from "./Quiz.module.css"
import { router } from "next/router";
import Link from "next/link";


const answeredQuestions = []
export default function Quiz(){

    



    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState("")
    const [solution, setSolution] = useState("")
    const [round, setRound] = useState(0)
    const [points, setPoints] = useState(0)
    const [solved, setSolved] = useState(false)
    const [feedback, setFeedback] = useState("")
    const [count, setCount] = useState(0)
    const [chosen, setChosen] = useState("")




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

    const handleReload = (e) =>{

        window.location.reload();
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
        setChosen(chosen)


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
        <div className={styles.center}>
                    <h1>Spiele das Quiz</h1> 
                        <button class="btn-primary" onClick={getNextQuestion}>Start Quiz</button>

                        </div>

        </>
    ) : round <= 5 ?  (
        <div>
            <h1>Quizfrage {round}/5</h1>
            <p>Punkte {points}</p>
            <div className={styles.center}>
                 <h2 className={styles.center}>{question}</h2>
            </div>
            
           

            <div className={styles.gridContainer}>
           
            {answers.map(answer => {
     
            
               return !solved ? 
                  (   
                        <button className={styles.gridItem} key={answer} value={answer} onClick={checkAnswer}>{answer}</button>
           
                  
                    
                ) : (
                    <button disabled key={answer} value={answer} className={[styles.gridItem, solution == answer && chosen == answer ? styles.darkGreen : solution == answer ? styles.green : chosen == answer ? styles.darkRed : styles.red].join(" ")}>{answer}</button>
                )

               
                

                }
            )

            }</div>

            <div className={styles.center}>

            <br></br> 
            <h3>{feedback}</h3>          

            {round == 5 ? <button class="btn-primary" onClick={() => setRound(round + 1)}>Zur Auswertung</button> : <button class="btn-primary" disabled={!solved} onClick={getNextQuestion}>Nächste Frage</button>  }
            
</div>



        
        </div>
    ) : (
        <div className={styles.center}>
        <h1>Quiz fertig</h1>
        <h2>Du hast  {points} {points == 1 ? "Punkt" : "Punkte"} geholt</h2>
        {points < 2 ? (
            <h3>Deine Leistung lässt schon etwas zu wünschen übrig</h3>
        ) : points < 4 ? (
            <h3>Gar nicht so schlecht, aber gut ist anders</h3>

        ) : points < 5 ? 
        (
            <h3>Das war ziemlich gut</h3>
        ) : 
        (
            <h3>Bravo, du hast alles richtig!</h3>
        )}
        <button class="btn-primary" onClick={handleReload} >Noch ne Runde</button>

        </div>
        
    )

        


}


