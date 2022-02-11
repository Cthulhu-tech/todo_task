import { IncomingMessage, ServerResponse } from "http";
import { ResponseLogic } from "./src/utils/response";
const Regist = require("./src/utils/registTodo");
const Unknown = require("./src/utils/unknown");
const Login = require("./src/utils/loginTodo");
const Save = require("./src/utils/saveTodo");
const Load = require("./src/utils/loadTodo");
const fileSystem = require('fs');
const http = require('http');
const port = 3300;

http.createServer((request:IncomingMessage, response:ServerResponse) => {
  switch(request.method) {
    case 'POST':
        POST(request, response);
      break;
    case 'GET':
        GET(request, response);
      break;
    default:
        DEFAULT(response);
      break;
  }
}).listen(port);

const POST = (request:IncomingMessage, response:ServerResponse) => {
  switch(request.url){
    case '/save':
      Save(request, response);
      break;
    case '/load':
      Load(request, response);
      break;
    case '/regist':
      Regist(request, response);
      break;
    case '/login':
      Login(request, response);
      break;
    default:
      Unknown(request, response);
      break;
  }
}

const GET = (request:IncomingMessage, response:ServerResponse) => {
  response.writeHead(200, {'Content-Type': 'text/html',});
  response.end("<p>HELLO!</p>");
}

const DEFAULT = (response:ServerResponse) => {

  ResponseLogic(response, 501, ['method: false', "Not Implemented"]);

}