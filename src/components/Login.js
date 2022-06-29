import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

const clientId="491084621491-g3kigduvu6rd653eeo8m5kvirctsf19o.apps.googleusercontent.com";
function Login(){

    const onSuccess=(res)=>{
        console.log("LOGIN SUCCESS! Current user:",res.profileObj);
        <Link to="/cart"></Link>
    }
const onFailure=(res)=>{
    console.log("LOGIN FAILED! RES:",res);
}

    return(
        <div id="signInButtom">
            <GoogleLogin
            clientId={clientId}
            buttonNext="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}
export default Login;