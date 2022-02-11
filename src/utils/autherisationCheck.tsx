export const autherisationCheck = () => {
    if(process.env.REACT_APP_URL_SITE){
        return fetch(process.env.REACT_APP_URL_SITE, {method: 'POST'})
        .catch((error:Error) => {
            console.log(error.message);
            return false;
        })
        .then((data:any) => {
            console.log(data.json());
            return true;
        })
    }
    return false;
}