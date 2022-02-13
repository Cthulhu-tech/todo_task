import { ServerResponse } from "http";

export const ResponseLogic = (response:ServerResponse, status:number, message:[string, boolean, string]) => {

  response.writeHead(status, {
    'Content-Type': 'text/json; application/json',
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Expose-Headers": "Authorization",
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  });
  response.end(JSON.stringify({"message": message[2],[message[0]]: message[1]}));

}