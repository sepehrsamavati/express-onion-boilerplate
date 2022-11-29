import config from "../cfg";
globalThis.appConfig = config;
Object.freeze(globalThis.appConfig);

import express from "express";
import expressConfig from "./config/express";
import expressErrors from "./config/errors";
import '../common/helpers/extensions'; /* Proto-type methods */
import { log } from "../common/functions/log";
import AdminRouter from "./routes/adminRouter";
import UserRouter from "./routes/userRouter";

const app = express();

require('events').EventEmitter.prototype._maxListeners = 50; /* Increase event listeners limit */

expressConfig(app, express); /* Express configuration */

const http = require("http").createServer(app);

app.use("/admin", AdminRouter);
app.use("/user", UserRouter);

expressErrors(app); /* Error pages */

log("Express application ready.");

export default http;