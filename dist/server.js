"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const apollo_server_1 = require("apollo-server");
process.on("SIGINT", () => {
    console.log("Shutting down...");
    process.exit();
});
(() => __awaiter(this, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: []
    });
    const server = new apollo_server_1.ApolloServer({
        schema
    });
    const { url } = yield server.listen(process.env.PORT || 80);
    console.log(`Server running on ${url}`);
}))();
//# sourceMappingURL=server.js.map