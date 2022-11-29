const addExitListener = (callback: (exitCode: any) => void) => {
	process.on('exit', callback);
	process.on('SIGINT', callback);
	process.on('SIGTERM', callback);
	process.on('SIGKILL', callback);
	
}, addErrorListener = (callback: (exitCode: Error) => void) => {
	process.on('uncaughtException', callback);
};

export {
	addExitListener,
	addErrorListener
};