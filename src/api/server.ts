import app from './app';
import { addErrorListener } from '../common/helpers/processEventListener';
import { log } from '../common/functions/log';

const server = app.listen(globalThis.appConfig.port, function () {
	log(`Express listening on port ${globalThis.appConfig.port}`);
});

addErrorListener(error => {
	console.log(`\n\n\x1b[31m[${new Date().toLocaleString()}] ${"Error START"}\x1b[0m`);
	console.log(error);
	console.log(`\x1b[31m${"Error END"}\x1b[0m\n\n`);
});