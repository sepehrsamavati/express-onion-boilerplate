import Express from "express";
import { log } from "../../common/functions/log";
import { attachControllers } from '@decorators/express';
import controllers from "../controllers";

const UserRouter = Express.Router();

attachControllers(UserRouter, controllers.UserControllers);

log("User controllers attaced.");

export = UserRouter;