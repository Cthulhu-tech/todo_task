import { IncomingMessage, ServerResponse } from "http";
const AuthhentificationCheck = require(__dirname + "/authenticationCheck.ts");

const Save = (request:IncomingMessage, response:ServerResponse) => {

  AuthhentificationCheck(request, response);

  response.end("save");
  
}

module.exports = Save;