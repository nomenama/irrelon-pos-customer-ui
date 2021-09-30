import fetch from "isomorphic-unfetch";
import {serialize} from "./queryString";

const localCache = {};
const defaultHeaders = {
	"content-type": "application/json"
}

export const GET = async (path, data, options = {"cache": true}) => {
	const serialData = serialize(data);
	const urlParams = serialData ? `?${serialData}` : "";
	const cacheKey = `GET ${path}${urlParams}`;

	if (options.cache) {
		// Check local cache for an existing record
		const cachedResponse = localCache[cacheKey];

		if (cachedResponse && cachedResponse.expires > new Date().getTime()) {
			return cachedResponse.response;
		}
	}

	const res = await fetch(`${path}${urlParams}`, {
		"method": "GET",
		"headers": {...defaultHeaders, ...options.headers}
	});

	const {status, headers} = res;
	const body = await res.json();

	if (options.cache) {
		localCache[cacheKey] = {
			"expiry": new Date().getTime() + 60000, // One minute
			"response": {
				status,
				body,
				headers
			}
		};
	}

	return {
		status,
		body,
		headers
	};
};

export const POST = async (path, data, options = {}) => {
	const res = await fetch(`${path}`, {
		"method": "POST",
		"headers": {...defaultHeaders, ...options.headers},
		"body": JSON.stringify(data)
	});

	const {status, headers} = res;
	const body = await res.json();

	return {
		status,
		body,
		headers
	};
};

export const PUT = async (path, data, options = {}) => {
	const res = await fetch(`${path}`, {
		"method": "PUT",
		"headers": {...defaultHeaders, ...options.headers},
		"body": JSON.stringify(data)
	});

	const {status, headers} = res;
	const body = await res.json();

	return {
		status,
		body,
		headers
	};
};

export const PATCH = async (path, data, options = {}) => {
	const res = await fetch(`${path}`, {
		"method": "PATCH",
		"headers": {...defaultHeaders, ...options.headers},
		"body": JSON.stringify(data)
	});

	const {status, headers} = res;
	const body = await res.json();

	return {
		status,
		body,
		headers
	};
};

export const DELETE = async (path, data, options = {}) => {
	const res = await fetch(`${path}`, {
		"method": "DELETE",
		"headers": {...defaultHeaders, ...options.headers},
		"body": JSON.stringify(data)
	});

	const {status, headers} = res;
	const body = await res.json();

	return {
		status,
		body,
		headers
	};
};

const api = {
	GET,
	POST,
	PUT,
	PATCH,
	DELETE
};

export default api;