import { IncomingMessage, ServerResponse } from "http";

const Unknown = (request:IncomingMessage, response:ServerResponse) => {

  response.end("unknown");
  
}

module.exports = Unknown;