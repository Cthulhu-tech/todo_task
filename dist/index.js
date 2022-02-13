"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthhentificationCheck = require(__dirname + "/src/utils/authenticationCheck");
const response_1 = require("./src/utils/response");
const Regist = require("./src/utils/registTodo");
const Unknown = require("./src/utils/unknown");
const Login = require("./src/utils/loginTodo");
const Save = require("./src/utils/saveTodo");
const Load = require("./src/utils/loadTodo");
const fileSystem = require('fs');
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
        case 'OPTIONS':
            OPTIONS(response);
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
        case '/authchecked':
            Checked(request, response);
            break;
        default:
            Unknown(request, response);
            break;
    }
};
const Checked = async (request, response) => {
    const auth = await AuthhentificationCheck(request);
    await (0, response_1.ResponseLogic)(response, auth[0], ["login", auth[1] === 'verify!' ? true : false, auth[1]]);
};
const GET = async (request, response) => {
    fileSystem.readFile('./index.html', 'utf-8', (err, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
};
const DEFAULT = (response) => {
    (0, response_1.ResponseLogic)(response, 501, ["method", false, "Not Implemented"]);
};
const OPTIONS = (response) => {
    (0, response_1.ResponseLogic)(response, 200, ["cors", false, "Not Implemented"]);
};
