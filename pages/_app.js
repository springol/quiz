import "../styles/globals.css";
import Layout from "../components/Layout"




export default function App({ Component, pageProps}){

    return (
        
        <div>
            <Layout>
            <Component {...pageProps} />
            </Layout><link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
        </div>
    )
}