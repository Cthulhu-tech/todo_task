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

    response.writeHead(500, {'Content-Type': 'text/json'});
    response.end(`{registration : true, message: ${err.message}}`);

  }).on("end", async () => {

    const params:AuthType = await parse(DATA_REGIST);

    if(!!/^[a-zA-Z0-9]+$/.exec(params.username) && params.password){

      const pathFile:string = path.join(__dirname, '../file/', `${params.username}`);
    
      if(!fileSystem.existsSync(pathFile)){
  
        createFolderAndFiles(pathFile, params)
  
        ResponseLogic(response, 201, ['registration: true', "registration complete"]);
  
      }else{
  
        ResponseLogic(response, 208, ['registration: false', "registration error, this name use"]);
  
      }

    }else{

      ResponseLogic(response, 208, ['registration: false', "registration error, need password and login"]);

    }

  })
}


const createFolderAndFiles = async (pathFile:string, params:AuthType) => {

  fileSystem.mkdirSync(pathFile);
  const hash = await bcrypt.hash(params.password, 10);
  fileSystem.appendFileSync(`${pathFile}/${params.username}.json`, JSON.stringify({username: params.username , password: hash}));
  fileSystem.appendFileSync(`${pathFile}/${params.username}Data.json`, '');

}

module.exports = Regist;