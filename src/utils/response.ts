import { ServerResponse } from "http";

export const ResponseLogic = (response:ServerResponse, status:number, message:string[]) => {

  response.writeHead(status, {'Content-Type': 'text/json'});
  response.end(`{${message[0]} , message: ${message[1]}}`);

}