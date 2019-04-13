"use strict";
exports.__esModule = true;
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.prototype.render = function (response, next) {
        return function (document) {
            if (document) {
                response.json(document);
            }
            else {
                response.send(404);
            }
        };
    };
    return Router;
}());
exports.Router = Router;
