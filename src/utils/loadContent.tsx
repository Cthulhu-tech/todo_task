export const LoadContent = async() => {

  if(process.env.REACT_APP_URL_SITE_LOAD_CONTENT){

    const response:any = await fetch(process.env.REACT_APP_URL_SITE_LOAD_CONTENT, 
          { 
              method: 'POST',
              credentials: 'include',
              headers: { 
                'Content-Type': 'text/json',
                'Accept': 'text/json',
              },
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