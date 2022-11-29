import Express from "express";
import { log } from "../../common/functions/log";
import { attachControllers } from '@decorators/express';
import controllers from "../controllers";

const AdminRouter = Express.Router();

attachControllers(AdminRouter, controllers.AdminControllers);

log("Admin controllers attaced.");

export = AdminRouter;