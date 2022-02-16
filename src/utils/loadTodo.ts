const AuthhentificationCheck = require(__dirname + "/authenticationCheck");
import { IncomingMessage, ServerResponse } from "http";
import { ResponseLogic } from "./response";
const fileSystem = require('fs');
const path = require('path');

const Load = async(request:IncomingMessage, response:ServerResponse) => {

  const status = await AuthhentificationCheck(request, response);

  switch (status[0]) {
    case 200:

      const pathFile = await path.join(__dirname , "/../file", status[2] , `${status[2]}Data.json`);

      if(fileSystem.existsSync(pathFile)){

        fileRead(response, status, pathFile);

      }else{

        ResponseLogic(response , status[0], ["load" , false  , `${status[1]}`]);

      }

      break;
    case 410:

      ResponseLogic(response , status[0], ["load" , false  , `${status[1]}`]);

      break;
    case 401:

      ResponseLogic(response , status[0], ["load" , false , `${status[1]}`]);

      break;
    case 500:
    
      ResponseLogic(response , status[0], ["load" , false  , `${status[1]}`]);

      break;
    default:

      ResponseLogic(response, 501, ["method" , false , "I don't know what happened ;("]);

      break;
  }
  
}

const fileRead = (response:ServerResponse , status:[number, string] , pathFile: string[]) => {

  try
  {

    const fileContent = fileSystem.readFileSync(pathFile, "utf8");

    ResponseLogic(response , status[0], ["load" , true  , JSON.parse(fileContent)]);

  }
  catch
  {

    ResponseLogic(response , 500, ["load" , false  , "error reading file, please try again later"]);
  }
}

module.exports = Load;