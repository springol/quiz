
import CreateQuestion from "../components/CreateQuestion"

import {router} from "next/router";



export default function NewQuestionPage(){


    return(
        <>
        <h1>Frage erfassen</h1>
            <CreateQuestion />
        </>
    )
}