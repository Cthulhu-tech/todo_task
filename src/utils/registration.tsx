import { FormCheck } from "../interface/interface";

export const RegistrationUser = (authInfo:FormCheck) => {

  if(process.env.REACT_APP_URL_SITE_REGISTRATION && !!/^[a-zA-Z0-9]+$/.exec(authInfo.username) && authInfo.password.trim().length >= 1){
    return fetch(process.env.REACT_APP_URL_SITE_REGISTRATION, 
          { 
              method: 'POST',
              headers: { 
                'Accept': 'application/json',
                'content-type': 'application/json'
              },
              body : JSON.stringify(authInfo)
          }
        )
    .catch((error:Error) => {
        return {login: false, message: error.message};
    })
    .then((data:any) => {
      console.log(data.json());
      return data.json();
    })
  }else{

    return {login: false, message: 'need .env key or password and login'}

  }
}