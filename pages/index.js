import Quiz from "../components/quiz"
import styles from "./index.module.css"




export default function IndexPage(){
    return (
        
        <div class="container">
        <div className={styles.index}>

            <Quiz/>
            
        </div>
        </div>
    )
}