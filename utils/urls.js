const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/**
 * Given an image return url
 * Works for local and deployed strapis
 * @param image
 */
export const fromImageToUrl = image => {
	if (!image) {
		return "";
	}

	if (image.url.indexOf("/") === 0 ) {
		return `${API_URL}${image.url}`
	}

	return image.url;
};