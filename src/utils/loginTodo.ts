import { IncomingMessage, ServerResponse } from "http";
import { AuthType } from "../interface/authType";
import { ResponseLogic } from "./response";
const { parse } = require("querystring");
const jwt = require('jsonwebtoken');
const fileSystem = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');

const Login = (request:IncomingMessage, response:ServerResponse) => {
  
  let DATA_REGIST:string = "";

  request.on("data", (data) => {

    DATA_REGIST += data.toString(); 

  }).on("error", (err) => {
    
    ResponseLogic(response, 500 , ["login" , false , `${err.message}`])

  }).on("end", async () => {

    const params:AuthType = await JSON.parse(DATA_REGIST);

    if(params.password && !!/^[a-zA-Z0-9]+$/.exec(params.username)){

      const pathFile:string = path.join(__dirname, '../file/', `${params.username}`);
    
      if(fileSystem.existsSync(`${pathFile}/${params.username}.json`)){
  
  
        readFile(pathFile, params, response);
  
  
      }else{
  
        ResponseLogic(response, 410 , ["login" , false , 'you folder not found'])
  
      }

    }else{

      ResponseLogic(response, 410 , ["login" , false , 'need login and password'])

    }

  })
  
}

const readFile = async(pathFile: string, params: AuthType, response:ServerResponse) => {
  try
  {
    const data = JSON.parse(fileSystem.readFileSync(`${pathFile}/${params.username}.json`, "utf8"));
    const validation = await bcrypt.compare(params.password, data.password);


    if(validation){

      const token = await generateAccessToken(params);
      fileSystem.writeFileSync(`${pathFile}/${params.username}.json`, JSON.stringify({username: data.username , password: data.password , jwt: token}));
      
      response.writeHead(200, {
        'Content-Type': 'text/json; application/json',
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Expose-Headers": "Authorization",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization",
        'Set-Cookie': `token=${token};SameSite=None; Secure`
      })

      response.end(JSON.stringify({login : true, message: 'OK'}));

    }else{

      ResponseLogic(response, 401 , ["login" , false , 'login or password not valid'])

    }

  }catch{

    ResponseLogic(response, 500 , ["login" , false , 'you file not found'])

  }
}

const generateAccessToken = (params: AuthType) => {

  const payload = {
    username: params.username
  }

  return jwt.sign(payload, "secret", {expiresIn: "24h"})

}

module.exports = Login;