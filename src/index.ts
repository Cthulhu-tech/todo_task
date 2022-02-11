import { IncomingMessage, ServerResponse } from "http";
const Delete = require("./utils/deleteTodo");
const Regist = require("./utils/registTodo");
const Unknown = require("./utils/unknown");
const Login = require("./utils/loginTodo");
const Save = require("./utils/saveTodo");
const Load = require("./utils/loadTodo");
const http = require('http');
const port = 3000

http.createServer((request:IncomingMessage, response:ServerResponse) => {

  switch(request.url){
    case '/save':
      Save(request, response);
      break;
    case '/load':
      Load(request, response);
      break;
    case '/delete':
      Delete(request, response);
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
}).listen(port);