import { IncomingMessage, ServerResponse } from "http";

const Delete = (request:IncomingMessage, response:ServerResponse) => {

  response.end("delete");
  
}

module.exports = Delete;