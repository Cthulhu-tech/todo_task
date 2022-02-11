import { IncomingMessage, ServerResponse } from "http";
import { AuthType } from "../interface/authType";
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

    response.writeHead(500, {'Content-Type': 'text/json'});
    response.end(`{Error: ${err.message}}`);

  }).on("end", async () => {

    const params:AuthType = await parse(DATA_REGIST);
    const pathFile:string = path.join(__dirname, '../file/', `${params.username}`);
    
    if(fileSystem.existsSync(`${pathFile}/${params.username}.json`)){


      readFile(pathFile, params, response);


    }else{

      response.writeHead(403, {'Content-Type': 'text/json'});
      response.end("{login : false, message: 'you folder not found'}");

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
        'Content-Type': 'application/json',
        'Set-Cookie': `jwt=${token}; httponly;`
      });

      response.end("{login : true, message: 'OK'}");

    }else{

      response.writeHead(403, {'Content-Type': 'text/json'});
      response.end("{login : false, message: 'login or password not valid'}");

    }

  }catch{

    response.writeHead(500 , {'Content-Type': 'text/json'});
    response.end("{login : false, message: 'you file not found'}");

  }
}

const generateAccessToken = (params: AuthType) => {

  const payload = {
    username: params.username
  }

  return jwt.sign(payload, "secret" ,{expiresIn: "24h"})

}

module.exports = Login;