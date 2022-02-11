"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthhentificationCheck = require(__dirname + "/authenticationCheck");
const response_1 = require("./response");
const fileSystem = require('fs');
const path = require('path');
const Load = async (request, response) => {
    const status = await AuthhentificationCheck(request, response);
    switch (status[0]) {
        case 200:
            const pathFile = await path.join(__dirname, "/../file", status[1], `${status[1]}Data.json`);
            if (fileSystem.existsSync(pathFile)) {
                fileRead(response, status, pathFile);
            }
            else {
                (0, response_1.ResponseLogic)(response, status[0], ["load : false", `${status[1]}`]);
            }
            break;
        case 410:
            (0, response_1.ResponseLogic)(response, status[0], ["load : false", `${status[1]}`]);
            break;
        case 401:
            (0, response_1.ResponseLogic)(response, status[0], ["load : false", `${status[1]}`]);
            break;
        case 500:
            (0, response_1.ResponseLogic)(response, status[0], ["load : false", `${status[1]}`]);
            break;
        default:
            (0, response_1.ResponseLogic)(response, 501, ['method: false', "I don't know what happened ;("]);
            break;
    }
};
const fileRead = (response, status, pathFile) => {
    try {
        const fileContent = fileSystem.readFileSync(pathFile, "utf8");
        (0, response_1.ResponseLogic)(response, status[0], ["load : true", `${fileContent}`]);
    }
    catch {
        (0, response_1.ResponseLogic)(response, 500, ["load : false", "error reading file, please try again later"]);
    }
};
module.exports = Load;
