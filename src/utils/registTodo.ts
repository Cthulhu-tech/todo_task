import { IncomingMessage, ServerResponse } from "http";
import { AuthType } from "../interface/authType";
import { ResponseLogic } from "./response";
const { parse } = require("querystring");
const fileSystem = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');


const Regist = (request:IncomingMessage, response:ServerResponse) => {

  let DATA_REGIST:string = "";

  request.on("data", (data) => {

    DATA_REGIST += data.toString(); 

  }).on("error", (err) => {

    response.writeHead(500, {
      'Content-Type': 'text/json; application/json',
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Allow-Credentials": "true",
    });
    response.end(JSON.stringify(`{registration : false, message: ${err.message}}`));

  }).on("end", async () => {

    const params:AuthType = await JSON.parse(DATA_REGIST);


    if(!!/^[a-zA-Z0-9]+$/.exec(params.username) && params.password.trim().length >= 1){

      const pathFile:string = path.join(__dirname, '../file/', `${params.username}`);
    
      if(!fileSystem.existsSync(pathFile)){

        await createFolderAndFiles(pathFile, params)

        await ResponseLogic(response, 201, ["registration" , true , "registration complete"]);
  
      }else{
  
        ResponseLogic(response, 208, ["registration" , true , "registration error, this name use"]);
  
      }

    }else{

      ResponseLogic(response, 208, ["registration" , true , "registration error, need password and login"]);

    }

  })
}


const createFolderAndFiles = async (pathFile:string, params:AuthType) => {

  const hash = await bcrypt.hash(params.password, 10);
  fileSystem.mkdirSync(pathFile, { recursive: true });
  fileSystem.appendFileSync(`${pathFile}/${params.username}.json`, JSON.stringify({username: params.username , password: hash}));
  fileSystem.appendFileSync(`${pathFile}/${params.username}Data.json`, '');

}

module.exports = Regist;