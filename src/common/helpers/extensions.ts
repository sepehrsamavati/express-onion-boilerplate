Array.prototype.remove = function() {
	var what, a = arguments, L = a.length, ax;
	while (L && this.length) {
		what = a[--L];
		while ((ax = this.indexOf(what)) !== -1) {
			this.splice(ax, 1);
		}
	}
	return this;
};

Array.prototype.findDistinct = function(key) {
	return [...new Set(this.map(item => item[key]))];
};

String.prototype.toPersianDigits = function(){
	let persianNumbers = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; // HMHT S.s. 2017
	return this.replace(/[0-9]/g, function(w){
		return persianNumbers[+w]
	});
};

String.prototype.toEnglishDigits = function () {
	let charCodeZero = '۰'.charCodeAt(0);
	return parseInt(this.replace(/[۰-۹]/g, function (w) {
		return (w.charCodeAt(0) - charCodeZero).toString();
	}));
};

String.prototype.langIsRTL = function(){
	return globalThis.appConfig.rtlLangs.includes(this.toString());
};

String.prototype.capitalize = function(){
	return (this.charAt(0).toUpperCase() + this.slice(1)).toString();
};

String.prototype.localization = function(lang = ''){
	const capitalizeLangs = globalThis.appConfig.capitalizeLangs;
	let result = this;
	if(lang.langIsRTL())
	{
		result = result.toPersianDigits();
	}
	if(capitalizeLangs.includes(lang))
	{
		result = result.split('\n').map( line => line.capitalize() ).join('\n');
	}
	return result.toString();
};

String.prototype.multiLangHelper = function(replaceWith, lang = '')
{
	const input = this.toString();
	if(typeof replaceWith == undefined)
	{
		return input;
	}
	if(!Array.isArray(replaceWith))
	{
		replaceWith = [replaceWith];
	}
	return input.replace(/(%s)\d/g, (a) => replaceWith[parseInt(a.slice(2))-1] ).localization(lang);
};