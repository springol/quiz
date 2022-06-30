import { useState, useEffect } from "react"
import QuestionAPI from "../lib/Question"
import styles from "./CreateQuestion.module.css"
import { router } from "next/router";
import Link from "next/link";





export default function CreateFunction({givenQuestion}) {


 

    const [question, setQuestion] = useState(givenQuestion ? givenQuestion : {})

    const handleChange = (e) => {

        const key = e.target.name
        const value = e.target.value

        setQuestion({
            ...question, ...{[key]: value}})
        console.log(question)
    }


    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(question)

        //Wenn QuestionGiven = null, wird frage neu erstellt:
        if (givenQuestion == null){
        try{
            console.log("Senden geklickt")
            QuestionAPI.create(question)
            console.log("Frage erstellt")



        }catch{
            console.log("Frage erstellen fehlgeschlagen")


        }
    }else{
        try{
            QuestionAPI.update(question)
            console.log("Frage geupdated")
            
        }catch{
            console.log("Update fehlgeschlagen")
        }
        
    }

    router.push("/allQuestions")

    }


    return (
        <div>

        <form>
        <div>
        <p>Frage:</p>
        <input onChange={handleChange} type="text" name="question" value={question ? question.question : ""} placeholder= "Wie hoch ist der Mt. Everest?" />
        </div>

        <div>
        <p>Richtige Antwort:</p>
        <input onChange={handleChange} type="text" value={question ? question.rightAnswer : ""} name="rightAnswer" />
        </div>
        
        <div>
        <p>Falsche Antwort 1:</p>
        <input onChange={handleChange} type="text" value={question ? question.wrongAnswer1 : ""} name="wrongAnswer1"  />
        </div>
        

        <div>
        <p>Falsche Antwort 2:</p>
        <input onChange={handleChange} type="text" value={question ? question.wrongAnswer2 : ""} name="wrongAnswer2"  />
        </div>
        

        <div>
        <p>Falsche Antwort 3:</p>
        <input onChange={handleChange} type="text" value={question ? question.wrongAnswer3 : ""} name="wrongAnswer3" />
        </div>

        <button class="btn-primary" onClick={handleSubmit} >Frage absenden</button>
        <Link  href={`/allQuestions`}><button class="btn-danger" >Abbrechen</button></Link>
  

        </form>

        </div>

    )




}