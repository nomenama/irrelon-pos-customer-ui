const serialize = (obj) => {
	const str = [];
	let i;

	for (i in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, i)) {
			str.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
		}
	}

	return str.join("&");
};

const urlToQueryObj = (url = "") => {
	const finalObj = {};
	const queryIndex = url.indexOf("?");

	if (queryIndex === -1) {
		return finalObj;
	}

	const queryString = url.substr(queryIndex + 1);
	const queryKeyVals = queryString.split("&");

	queryKeyVals.forEach((keyVal) => {
		const keyValArr = keyVal.split("=");
		finalObj[keyValArr[0]] = decodeURIComponent(keyValArr[1]);
	});

	return finalObj;
};

export const generateQueryUrl = (browserPath = "", queryData) => {
	let finalBrowserPath = browserPath;

	if (queryData) {
		if (finalBrowserPath.indexOf("?") !== -1) {
			finalBrowserPath += "&" + serialize(queryData);
		} else {
			finalBrowserPath += "?" + serialize(queryData);
		}
	}

	return finalBrowserPath;
};

export {
	serialize,
	urlToQueryObj
};
