export const autherisationCheck = () => {
    if(process.env.REACT_APP_URL_SITE_LOGIN){
        return fetch(process.env.REACT_APP_URL_SITE_LOGIN, 
            {
                method: 'POST',
                headers : { 
                    'Accept': 'application/json'
                }
            }
            )
        .catch((error:Error) => {

            return {login: false, message: error.message};
        })
        .then((data:any) => {
            
               return data.json();
            
        })
    }else{
        return {login: false, message: 'need .env key'}
    }
}