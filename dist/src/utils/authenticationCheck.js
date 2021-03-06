"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const fileSystem = require('fs');
const path = require('path');
const AuthhentificationCheck = (request) => {
    try {
        const authorization = request.headers.cookie?.split('=')[1];
        if (authorization) {
            const verifyInformation = jwt.verify(authorization, "secret");
            return fileCheck(verifyInformation, authorization);
        }
        else {
            return [401, "need authorization"];
        }
    }
    catch {
        return [500, "server error"];
    }
};
const fileCheck = (verifyInformation, authorization) => {
    const pathFile = path.join(__dirname, '../file/', `${verifyInformation.username}`);
    if (fileSystem.existsSync(`${pathFile}/${verifyInformation.username}.json`)) {
        const data = JSON.parse(fileSystem.readFileSync(`${pathFile}/${verifyInformation.username}.json`, "utf8"));
        const currentTime = Math.round(Date.now() / 1000);
        if (verifyInformation.iat < currentTime && verifyInformation.exp > currentTime && data.jwt === authorization) {
            return [200, "verify!", verifyInformation.username]; // OK
        }
        else {
            return [410, "bad token"]; // NOT FOUND!
        }
    }
    else {
        return [410, "not found"];
    }
};
module.exports = AuthhentificationCheck;
