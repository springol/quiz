import QuestionAPI from "../lib/Question";
import { router } from "next/router";
import Link from "next/link";


export default function ShowQuestions({questions}){



    const handleDelete = (e) => {
        e.preventDefault();
        console.log(e.target.name)

        let id = e.target.name

        




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

    <table>
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
                <td><button onClick={handleUpdate} name={question.id}>Ändern</button></td>
                <td> <Link  href={`/edit/${question.id}`}><button onClick={handleDelete} name={question.id}>Löschen</button></Link></td>

                </tr>
            )

        })
       }</tbody>
</table>
        
        <h1>Alle Fragen</h1>
    
        
        </div>
    )

}