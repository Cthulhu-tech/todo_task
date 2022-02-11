"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("./response");
const { parse } = require("querystring");
const jwt = require('jsonwebtoken');
const fileSystem = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const Login = (request, response) => {
    let DATA_REGIST = "";
    request.on("data", (data) => {
        DATA_REGIST += data.toString();
    }).on("error", (err) => {
        (0, response_1.ResponseLogic)(response, 500, ["login : false", `${err.message}`]);
    }).on("end", async () => {
        const params = await parse(DATA_REGIST);
        if (params.password && !!/^[a-zA-Z0-9]+$/.exec(params.username)) {
            const pathFile = path.join(__dirname, '../file/', `${params.username}`);
            if (fileSystem.existsSync(`${pathFile}/${params.username}.json`)) {
                readFile(pathFile, params, response);
            }
            else {
                (0, response_1.ResponseLogic)(response, 410, ["login : false", 'you folder not found']);
            }
        }
        else {
            (0, response_1.ResponseLogic)(response, 410, ["login : false", 'need login and password']);
        }
    });
};
const readFile = async (pathFile, params, response) => {
    try {
        const data = JSON.parse(fileSystem.readFileSync(`${pathFile}/${params.username}.json`, "utf8"));
        const validation = await bcrypt.compare(params.password, data.password);
        if (validation) {
            const token = await generateAccessToken(params);
            fileSystem.writeFileSync(`${pathFile}/${params.username}.json`, JSON.stringify({ username: data.username, password: data.password, jwt: token }));
            response.writeHead(200, {
                'Content-Type': 'application/json',
                'Set-Cookie': `jwt=${token}; httponly;`
            });
            response.end("{login : true, message: 'OK'}");
        }
        else {
            (0, response_1.ResponseLogic)(response, 401, ["login : false", 'login or password not valid']);
        }
    }
    catch {
        (0, response_1.ResponseLogic)(response, 500, ["login : false", 'you file not found']);
    }
};
const generateAccessToken = (params) => {
    const payload = {
        username: params.username
    };
    return jwt.sign(payload, "secret", { expiresIn: "24h" });
};
module.exports = Login;
