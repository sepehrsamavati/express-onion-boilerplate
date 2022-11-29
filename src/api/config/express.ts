import Express from 'express';
import bodyParser from 'body-parser';

export default (app: Express.Application, express: typeof Express) => {

	if(globalThis.appConfig.reverseProxy)
		app.set('trust proxy', 'loopback');


	/* Express settings */
	app.disable('x-powered-by');
	app.set('view engine', 'ejs');

	/* App static files and views path */
	app.use(express.static(globalThis.appConfig.publicDir));
	app.set('views', globalThis.appConfig.viewsDir);

	/* Express middle wares */
	app.use(express.urlencoded({ extended: true }));
	app.use(bodyParser.urlencoded({ extended: true }));
};