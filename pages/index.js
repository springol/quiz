import Quiz from "../components/quiz"
import styles from "./index.module.css"


export default function IndexPage(){
    return (
        <div className={styles.index}>
            <h1>Spiele das Quiz</h1> 
            <Quiz/>
        </div>
    )
}