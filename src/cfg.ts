import path from "node:path";

const currentWorkingDirectory = process.cwd();

const config: Config = {
	appName: "express-onion-boilerplate",
	title: "ExpressTS Onion Based",
	version: "0.0.0",
	statusBarColor: "#000000",

	publicDir: path.join(currentWorkingDirectory, 'frontend', 'public'),
	viewsDir: path.join(currentWorkingDirectory, 'frontend', 'views'),

	defaultLang: "en",
	rtlLangs: ['fa'],
	capitalizeLangs: ['en'],

	antiDDOS: false,
	reverseProxy: true,
	production: false,

	authExpire: 24 * 3600, // (second) default: 1 day
	maxRequestSize: 1024,

	itemsPerPage: 10,
	port: 6003,
	connectionString: ""
};

export default config;