export default ({ array = [] as any, count = -1, limit = 100, page = 1 }) => {

	if(array && count === -1)
		count = array.length;

	const pages = Math.ceil(count/limit); /* All available pages */

	/* Validate page */
	if(isNaN(page) || page < 0 || page > pages)
	{
		page = 1;
	}

	const result: any = {
		count, limit,
		page, pages
	};

	if(array)
		result.array = [...array].slice((page - 1) * limit, page * limit);

	return result;
}