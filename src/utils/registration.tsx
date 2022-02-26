import { FormCheck } from "../interface/interface";

export const RegistrationUser = async(authInfo:FormCheck) => {

  if(process.env.REACT_APP_URL_SITE_REGISTRATION && !!/^[a-zA-Z0-9]+$/.exec(authInfo.username) && authInfo.password.trim().length >= 1){
    const response:any = await fetch(process.env.REACT_APP_URL_SITE_REGISTRATION, 
          { 
              method: 'POST',
              credentials: 'include',
              headers: { 
                'Content-Type': 'text/json',
                'Accept': 'text/json'
              },
              body : JSON.stringify(authInfo)
          }
        )
    .catch((error:Error) => {

      return {login: false, message: error.message};

    })
    .then((data:any) => {

      return data.json();

    })

    
    return response

  }else{

    return {login: false, message: 'need .env key or password and login'}

  }
}