"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthhentificationCheck = require(__dirname + "/authenticationCheck");
const response_1 = require("./response");
const { parse } = require("querystring");
const fileSystem = require('fs');
const path = require('path');
const Save = async (request, response) => {
    const status = await AuthhentificationCheck(request, response);
    switch (status[0]) {
        case 200:
            const pathFile = await path.join(__dirname, "/../file", status[1], `${status[1]}Data.json`);
            if (!fileSystem.existsSync(pathFile)) {
                SaveResponse(request, response, status, pathFile);
            }
            else {
                SaveResponse(request, response, [501, "you file not found"], pathFile);
            }
            break;
        case 410:
            (0, response_1.ResponseLogic)(response, status[0], ["save", false, `${status[1]}`]);
            break;
        case 401:
            (0, response_1.ResponseLogic)(response, status[0], ["save", false, `${status[1]}`]);
            break;
        case 500:
            (0, response_1.ResponseLogic)(response, status[0], ["save", false, `${status[1]}`]);
            break;
        default:
            (0, response_1.ResponseLogic)(response, 501, ["method", false, "I don't know what happened ;("]);
            break;
    }
};
const SaveResponse = (request, response, status, pathFile) => {
    if (pathFile === undefined) {
        (0, response_1.ResponseLogic)(response, status[0], ["save", false, `${status[1]}`]);
    }
    else {
        let DATA_REGIST = "";
        request.on("data", (data) => {
            DATA_REGIST += data.toString();
        }).on("error", (err) => {
            (0, response_1.ResponseLogic)(response, 500, ["save", false, "todo not save ;("]);
        }).on("end", async () => {
            const params = await parse(DATA_REGIST).todo;
            fileSystem.writeFileSync(pathFile, params);
            (0, response_1.ResponseLogic)(response, status[0], ["save", true, "todo save!"]);
        });
    }
};
module.exports = Save;
