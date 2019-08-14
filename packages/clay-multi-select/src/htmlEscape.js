const ampersandRegExp = /&/g;
const lessThanRegExp = /</g;
const greaterThanRegExp = />/g;
const doubleQuoteRegExp = /"/g;
const singleQuoteRegExp = /'/g;

export const htmlEscape = string =>
	string
		.replace(ampersandRegExp, '&amp;')
		.replace(lessThanRegExp, '&lt;')
		.replace(greaterThanRegExp, '&gt;')
		.replace(doubleQuoteRegExp, '&quot;')
		.replace(singleQuoteRegExp, '&#39;');
