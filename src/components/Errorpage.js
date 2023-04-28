import ErrorLogo from "../assets/img/Error_images.png"
import { useRouteError } from "react-router-dom";

const Errorpage =()=>{

    const err = useRouteError();
    console.log(err)
    return(
        <div className="error-container">
        <img  src={ErrorLogo} alt="img"/>
        <h2>Oops! Something went wrong!</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
        <h3>{err.data}</h3>
        </div>
    )
}

export default Errorpage;