import {GoogleLayout} from 'react-google-login'

const clientId="491084621491-g3kigduvu6rd653eeo8m5kvirctsf19o.apps.googleusercontent.com"


function Logout(){
      onSuccess=()=>{
        console.log("Log out successful")
      }
    return(
        <div id="signOutButton">
            <GoogleLayout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess} />
        </div>
    )
}

export default Logout;