import ShowQuestions from "../components/ShowQuestions";
import QuestionAPI from "../lib/Question";



export default function AllQuestionsPage({questions}){


    return questions && (


        <div class="container">
          <h1>Alle Fragen</h1>

        <ShowQuestions questions={questions}></ShowQuestions>

        </div>

    )
}








export async function getStaticProps(){
    let questions;
    try{
      questions = await QuestionAPI.getAllQuestions(); 
      console.log("Fetch erfolgreich")
    }catch(e){
      questions = null;
      console.log("fetch nicht erfolgreich")
    
    }
    return{
      props: {questions }, revalidate: 30
    }
    
  }


  



  