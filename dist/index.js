"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("./src/utils/response");
const Regist = require("./src/utils/registTodo");
const Unknown = require("./src/utils/unknown");
const Login = require("./src/utils/loginTodo");
const Save = require("./src/utils/saveTodo");
const Load = require("./src/utils/loadTodo");
const http = require('http');
const port = 3300;
http.createServer((request, response) => {
    switch (request.method) {
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
const POST = (request, response) => {
    switch (request.url) {
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
};
const GET = (request, response) => {
    (0, response_1.ResponseLogic)(response, 404, ['url: false', `unknown - page: ${request.url}`]);
};
const DEFAULT = (response) => {
    (0, response_1.ResponseLogic)(response, 501, ['method: false', "Not Implemented"]);
};
