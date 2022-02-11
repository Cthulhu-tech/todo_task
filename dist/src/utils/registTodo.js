"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("./response");
const { parse } = require("querystring");
const fileSystem = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const Regist = (request, response) => {
    let DATA_REGIST = "";
    request.on("data", (data) => {
        DATA_REGIST += data.toString();
    }).on("error", (err) => {
        response.writeHead(500, { 'Content-Type': 'text/json' });
        response.end(`{registration : true, message: ${err.message}}`);
    }).on("end", async () => {
        const params = await parse(DATA_REGIST);
        if (!!/^[a-zA-Z0-9]+$/.exec(params.username) && params.password) {
            const pathFile = path.join(__dirname, '../file/', `${params.username}`);
            if (!fileSystem.existsSync(pathFile)) {
                console.log('1');
                await createFolderAndFiles(pathFile, params);
                console.log('2');
                await (0, response_1.ResponseLogic)(response, 201, ['registration: true', "registration complete"]);
            }
            else {
                (0, response_1.ResponseLogic)(response, 208, ['registration: false', "registration error, this name use"]);
            }
        }
        else {
            (0, response_1.ResponseLogic)(response, 208, ['registration: false', "registration error, need password and login"]);
        }
    });
};
const createFolderAndFiles = async (pathFile, params) => {
    const hash = await bcrypt.hash(params.password, 10);
    await console.log(hash);
    fileSystem.mkdirSync(pathFile, { recursive: true });
    await console.log(pathFile);
    fileSystem.appendFileSync(`${pathFile}/${params.username}.json`, JSON.stringify({ username: params.username, password: hash }));
    fileSystem.appendFileSync(`${pathFile}/${params.username}Data.json`, '');
};
module.exports = Regist;
