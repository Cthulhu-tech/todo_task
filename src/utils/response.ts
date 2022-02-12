import { ServerResponse } from "http";

export const ResponseLogic = (response:ServerResponse, status:number, message:string[]) => {

  response.writeHead(status, {
    'Content-Type': 'text/json ; application/json',
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "Authorization",
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  });
  response.write(`{${message[0]} , message: ${message[1]}}`);
  response.end();

}