const AuthhentificationCheck = require(__dirname + "/authenticationCheck");
import { IncomingMessage, ServerResponse } from "http";
import { Todo } from "../interface/authType";
import { ResponseLogic } from "./response";
const { parse } = require("querystring");
const fileSystem = require('fs');
const path = require('path');

const Save = async (request:IncomingMessage, response:ServerResponse) => {

  const status = await AuthhentificationCheck(request, response);

  switch (status[0]) {
    case 200:

      const pathFile = await path.join(__dirname , "/../file", status[1] , `${status[1]}Data.json`);

      if(!fileSystem.existsSync(pathFile)){

        SaveResponse(request, response, status , pathFile);

      }else{
        
        SaveResponse(request, response, [501, "you file not found"] , pathFile);

      }

      break;
    case 410:

      ResponseLogic(response , status[0], ["save" , false , `${status[1]}`]);

      break;
    case 401:

      ResponseLogic(response , status[0], ["save" , false  , `${status[1]}`]);

      break;
    case 500:
    
      ResponseLogic(response , status[0], ["save" , false , `${status[1]}`]);

      break;
    default:

      ResponseLogic(response, 501, ["method" , false , "I don't know what happened ;("]);

      break;
  }
  
}

const SaveResponse = (request:IncomingMessage, response:ServerResponse , status:[number, string] ,pathFile: string) => {
  
  if(pathFile === undefined){

    ResponseLogic(response , status[0], ["save" , false , `${status[1]}`]);

  }else{

    let DATA_REGIST:string = "";

    request.on("data", (data) => {

      DATA_REGIST += data.toString(); 
  
    }).on("error", (err) => {

      ResponseLogic(response , 500, ["save" , false , "todo not save ;("]);

    }).on("end", async() => {

      const params:Todo[] = await parse(DATA_REGIST).todo;

      fileSystem.writeFileSync(pathFile, params);
      
      ResponseLogic(response , status[0], ["save" , true , "todo save!"]);

    })
  }
}

module.exports = Save;