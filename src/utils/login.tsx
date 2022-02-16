import { FormCheck } from "../interface/interface";

export const LoginUser = async(authInfo:FormCheck) => {

  if(process.env.REACT_APP_URL_SITE_LOGIN && !!/^[a-zA-Z0-9]+$/.exec(authInfo.username) && authInfo.password.trim().length >= 1){
    console.log(authInfo)
    const response:any = await fetch(process.env.REACT_APP_URL_SITE_LOGIN, 
          { 
              method: 'POST',
              credentials: 'include',
              headers: { 
                'Content-Type': 'text/json',
                'Accept': 'text/json',
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


    return response;

  }else{

    return {login: false, message: 'need .env key or password and login'}

  }
}