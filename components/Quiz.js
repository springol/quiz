import { useEffect, useState } from "react"
import QuestionAPI from "../lib/Question";


export default function Quiz(){

    let round = 0
    let solution = ""
    const [question, setQuestion] = useState()

    const [btnAnswers, setBtnAnswers] = useState([])




    const getNextQuestion = async  () => {

        let data;
        console.log("Funktion wird aufgerufen")

     try{
     data = await QuestionAPI.getRandomQuestion();
        console.log("Response in der Quiz-Komponente: " + data.question)
     }catch{
        console.log("Request fehlgeschlagen")
     }

     


     console.log("Quiz Komponente fertig")

     let json = JSON.stringify(data)
     console.log("gestringified json: " + json)
     setQuestion(json)

     setQuestions()

    }

    const setQuestions = () => {

        solution = question.rightAnswer
        console.log(question)

        let questions = [question.rightAnswer, question.wrongAnswer1, question.wrongAnswer2, question.wrongAnswer3]
        let answers = []
        
        for (let i = 0; i<questions.length; i++){
            let q = Math.floor(Math.random() * questions.length)
            answers[i] = questions[q]
            questions.pop(q)
            console.log(answers)
        }
        console.log(answers)

        setBtnAnswers(answers)

        


    }









    return   (
        <div>
            <h1>Quizfrage {round}</h1>
           
            <button onClick={getNextQuestion}>knopf</button>


        
        </div>
    )

        


}


