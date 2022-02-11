import { IncomingMessage, ServerResponse } from "http";

const Load = (request:IncomingMessage, response:ServerResponse) => {

  response.end("load");
  
}

module.exports = Load;