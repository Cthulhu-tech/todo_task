"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseLogic = void 0;
const ResponseLogic = (response, status, message) => {
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
};
exports.ResponseLogic = ResponseLogic;
