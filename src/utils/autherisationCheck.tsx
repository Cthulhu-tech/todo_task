export const autherisationCheck = () => {
    if(process.env.REACT_APP_URL_SITE_CHEKED){
        return fetch(process.env.REACT_APP_URL_SITE_CHEKED, 
            {
                method: 'POST',
                credentials: 'include',
                headers : { 
                    'Content-Type': 'text/json',
                    'Accept': 'text/json'
                },
                body : JSON.stringify({"username": "null"})
            }
            )
        .catch((error:Error) => {

            return {login: false, message: error.message};
        })
        .then( async (data:any) => {

               return await data.json();
            
        })
    }else{
        return {login: false, message: 'need .env key'}
    }
}