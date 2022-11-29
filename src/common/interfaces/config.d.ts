interface Config {
	appName: string;
	title: string;
	version: string;
	statusBarColor: string;
	
	publicDir: string;
	viewsDir: string;

	defaultLang: string;
	rtlLangs: Array<string>;
	capitalizeLangs: Array<string>;

	antiDDOS: boolean;
	reverseProxy: boolean;
	production: boolean;
	authExpire: number;
	maxRequestSize: number;

	itemsPerPage: number;
	port: number;
	connectionString: string;
}