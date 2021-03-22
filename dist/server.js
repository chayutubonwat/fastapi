"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var server = fastify_1.default();
server.get('/', function (request, reply) {
    reply.send('Hello World');
});
server.listen(9000, '127.0.0.1', function (error, address) {
    if (error) {
        console.log(error);
        process.exit(0);
    }
    else {
        console.log('Server listing at ' + address);
    }
});
//# sourceMappingURL=server.js.map