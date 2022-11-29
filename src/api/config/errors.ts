import { Request, Response, Application, ErrorRequestHandler } from "express";

export default (app: Application) => {
	/* 404 page */
	app.use(function(req: Request, res: Response) {
		res.status(404);

		// respond with html page
		if (req.accepts('html')) {
			res.render('errors/404', { url: req.url, layout: false });
			return;
		}

		// respond with json
		if (req.accepts('json')) {
			res.json({ error: 'Not found' });
			return;
		}

		// default to plain-text. send()
		res.type('txt').send('Not found');
	});

	/* Error page */
	app.use(<ErrorRequestHandler> function(err, req, res) {
		const errorCode = err.status || 500;

		console.error("\x1b[31m", err, "\x1b[0m");

		res.status(errorCode).render('errors/error', {
			message: err.message,
			error: {},
			errorCode,
			layout: false
		});
	});
};