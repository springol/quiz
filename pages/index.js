import Quiz from "../components/Quiz"
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