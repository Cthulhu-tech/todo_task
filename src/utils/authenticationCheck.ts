import { IncomingMessage, ServerResponse } from "http";
import { AuthType } from "../interface/authType";
const jwt = require('jsonwebtoken');
const fileSystem = require('fs');
const path = require('path');

const AuthhentificationCheck = (request:IncomingMessage, response:ServerResponse) => {
  try
  {
      const authorization = request.headers.cookie?.split('=')[1];

      if(authorization){

          const verifyInformation  = jwt.verify(authorization, "secret");

          fileCheck(verifyInformation, authorization);
    
      }else{

        console.log('auth need')

      }

  }
  catch
  {
      
  }
}

const fileCheck = (verifyInformation:any, authorization:string) => {

  const pathFile:string = path.join(__dirname, '../file/', `${verifyInformation.username}`);

  if(fileSystem.existsSync(`${pathFile}/${verifyInformation.username}.json`)){

    const data:AuthType = JSON.parse(fileSystem.readFileSync(`${pathFile}/${verifyInformation.username}.json`, "utf8"));
    const currentTime = Math.round(Date.now() / 1000);

    if(verifyInformation.iat < currentTime && verifyInformation.exp > currentTime && data.jwt === authorization){

      console.log('norm')

    }else{

      console.log('hyita')

    }
  }
}




module.exports = AuthhentificationCheck;