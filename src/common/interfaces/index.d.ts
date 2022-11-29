/* eslint-disable no-var */

declare global {
	var appConfig: Config;

	namespace Express {
		interface Request {
			user: ReqUser,
			ADIP: string
		}

		namespace Multer {
			interface File {
				error: string
			}
		}
	}
}