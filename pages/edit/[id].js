
import CreateQuestion from "../../components/CreateQuestion"
import QuestionAPI from "../../lib/Question";


export default function editQuestionPage({question}){


    return question && (

        <div class="container">

        <h1>Frage bearbeiten</h1>
        <CreateQuestion givenQuestion={question}></CreateQuestion>

        </div>
    )

}



// Hier FRAGEN NACH ID HOLEN: QuestionAPI.getQuestion(id) mit params?
export async function getStaticProps(context){
    const id = context.params.id
    let question;
    try{
      question = await QuestionAPI.getQuestionById(id); 
      console.log("Fetch erfolgreich")
    }catch(e){
      question = null;
      console.log("fetch nicht erfolgreich")
    
    }
    return{
      props: {question}, revalidate: 30
    }
    
  }



export async function getStaticPaths() {
    const questions = await QuestionAPI.getAllQuestions()
    const paths = questions.map(question => (
        { 
            params: { id: question.id } 
        })
    )
    return { paths, fallback: true }
}