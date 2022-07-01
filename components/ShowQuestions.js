import QuestionAPI from "../lib/Question";
import { router } from "next/router";
import Link from "next/link";
import { useState } from "react";


export default function ShowQuestions({questions}){

    const [deleted, setDeleted] = useState("")



    const handleDelete = (e) => {
        e.preventDefault();
        console.log(e.target.name)

        let pw = prompt("Passwort zum Löschen");


        if (pw != "sml12345") {
          return
        } 

        let id = e.target.name.toString()
        console.log("id: " + id)

        QuestionAPI.delete(id)
        //neu rendern mit aufruf des UseState
        setDeleted(true)

        router.push("/allQuestions")

        




    }


    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(e.target.name)

        let id = e.target.name

        try{
            router.push("/edit/" + id)

        }catch{
            console.log("Router push fehlgeschlagen")
        }
    }


    return(
    
    
    <div>

    <table class="table  table-striped table-success table-hover">
    <thead>
            <tr>
                <th>Frage</th>
                <th>Richtige Antwort</th>
                <th>Falsche Antwort</th>
                <th>Falsche Antwort</th>
                <th>Falsche Antwort</th>
                </tr>
            </thead>
            <tbody >


       { questions.map(question => {

            return(
                <tr key={question.id}>
                <td>{question.question}</td>
                <td>{question.rightAnswer}</td>
                <td>{question.wrongAnswer1}</td>
                <td>{question.wrongAnswer2}</td>
                <td>{question.wrongAnswer3}</td>
                <td><button class="btn-primary" onClick={handleUpdate} name={question.id}>Ändern</button></td>
                <td> <Link  href={`/edit/${question.id}`}><button class="btn-danger" onClick={handleDelete} name={question.id}>Löschen</button></Link></td>

                </tr>
            )

        })
       }</tbody>
</table>
        
        </div>
    )

}