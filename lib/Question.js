import { getJSON, postJSON, putJSON, deleteJSON } from "."

const GET_RANDOM_URL = "https://javascript.azurewebsites.net/api/HttpTriggerTest"
const GET_QUESTION_BY_ID = "https://javascript.azurewebsites.net/api/GetbyID?id="
const POST_URL = "https://javascript.azurewebsites.net/api/PostQuestion?code=lIIMQnQ3kfe7UoWziNeZYAWwkwSundakVGNWu3ByFHkRAzFuwMtDfg=="
const GET_ALL_URL = "https://javascript.azurewebsites.net/api/HttpTrigger2"
const DELETE_URL = ""


const QuestionAPI = {


    getRandomQuestion(){
        return getJSON(GET_RANDOM_URL)
    },
    getAllQuestions(){
        return getJSON(GET_ALL_URL)
    },
    getQuestionById(id){
        return getJSON(`${GET_QUESTION_BY_ID}${id}`)
    },
    create(question){
        const data = postJSON(POST_URL, {body: question})
        return data;
    },
    delete(id){
        const data = deleteJSON(`${DELETE_URL}id=${id}`)
        return data
    }

}

export default QuestionAPI