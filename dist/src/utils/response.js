"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseLogic = void 0;
const ResponseLogic = (response, status, message) => {
    response.writeHead(status, { 'Content-Type': 'text/json' });
    response.end(`{${message[0]} , message: ${message[1]}}`);
};
exports.ResponseLogic = ResponseLogic;
