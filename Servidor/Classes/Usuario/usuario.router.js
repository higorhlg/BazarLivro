"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var router_1 = require("../../common/router");
var restifyError = require("restify-errors");
var usuario_model_1 = require("./usuario.model");
var auth_handler_1 = require("../../security/auth.handler");
var authz_handler_1 = require("../../security/authz.handler");
var UserRouter = /** @class */ (function (_super) {
    __extends(UserRouter, _super);
    function UserRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRouter.prototype.applyRouter = function (application) {
        var _this = this;
        application.get('/users', function (req, resp, next) {
            usuario_model_1.User.find().then(function (users) {
                if (users)
                    resp.json(users);
                next();
            })["catch"](next);
        });
        application.get('/users/:id', authz_handler_1.authorize('user'), function (req, resp, next) {
            usuario_model_1.User.findById(req.params.id).then(_this.render(resp, next))["catch"](next);
            return next(new restifyError.NotFoundError('Usuário não encontrado'));
        });
        application.post('/users', function (req, resp, next) {
            var user = new usuario_model_1.User(req.body);
            user.save().then(function (user) {
                user.senha = undefined;
                resp.json(user);
            })["catch"](next);
            return next();
        });
        application.post('/users/authenticate', auth_handler_1.authenticate);
        /*
                const options = {overWrite: true}
                application.put('/users/:id', (req, resp, next)=>{
                    User.update({_id:req.params.id}, req.body, options)
                    .exec().then(result=>{
                        if(result.n){
                            return User.findById(req.params.id).catch(next)
                        }
                        else{
                            resp.send(404)
                        }
                    }).then(user=>{
                        resp.json(user)
                        return next()
                    }).catch(next)
                })
        */
        application.patch('/users/:id', function (req, resp, next) {
            var op = { "new": true };
            usuario_model_1.User.findByIdAndUpdate(req.params.id, req.body, op).then(function (user) {
                if (user) {
                    resp.json(user);
                    next();
                }
                resp.send(404);
                next();
            });
        });
        application.del('/users/:id', function (req, resp, next) {
            usuario_model_1.User.remove({ _id: req.params.id }).exec().then(function (user) {
                if (user.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
                next();
            });
        });
    };
    return UserRouter;
}(router_1.Router));
exports.usersRouter = new UserRouter();
