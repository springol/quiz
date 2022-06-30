
import CreateQuestion from "../components/CreateQuestion"

import {router} from "next/router";



export default function NewQuestionPage(){


    return(
        <div class="container">
        <h1>Frage erfassen</h1>
            <CreateQuestion />
        </div>
    )
}