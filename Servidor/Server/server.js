"use strict";
exports.__esModule = true;
var restify = require("restify");
var mongoose_1 = require("mongoose");
var restify_cors_middleware_1 = require("restify-cors-middleware");
var error_handler_1 = require("./error.handler");
var environment_1 = require("../common/environment");
var token_parser_1 = require("../security/token.parser");
var Server = /** @class */ (function () {
    function Server() {
        this.application = restify.createServer({
            name: "Server",
            version: "1.0"
        });
    }
    Server.prototype.initializeDb = function () {
        mongoose_1["default"].Promise = global.Promise;
        mongoose_1["default"].set('useCreateIndex', true);
        return mongoose_1["default"].connect(environment_1.environment.db.url, { useNewUrlParser: true });
    };
    Server.prototype.initRouters = function (routers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var corsOptions = {
                    preflightMaxAge: 86400,
                    origins: ['*'],
                    allowHeaders: ['authorization'],
                    exposeHeaders: ['x-custom-header']
                };
                var cors = restify_cors_middleware_1["default"](corsOptions);
                _this.application.pre(cors.preflight);
                _this.application.use(cors.actual);
                _this.application.use(restify.plugins.queryParser()); //geralmente utilizando no get para converter pesquisas
                _this.application.use(restify.plugins.bodyParser()); // convert json em object automaticamente
                _this.application.use(token_parser_1.tokenParser);
                for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
                    var router = routers_1[_i];
                    router.applyRouter(_this.application);
                }
                _this.application.listen(environment_1.environment.server.port, function () {
                    resolve(_this.application);
                });
                _this.application.on('restifyError', error_handler_1.handleError);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    Server.prototype.bootstrap = function (routers) {
        var _this = this;
        if (routers === void 0) { routers = []; }
        return this.initializeDb().then(function () { return _this.initRouters(routers).then(function () { return _this; }); });
    };
    return Server;
}());
exports.Server = Server;
