const urlQueryBind = (url: string, query: { [x: string]: string }) => {
	const urlPack = new URL(url)
	urlPack.search = new URLSearchParams(query).toString()
	return urlPack.toString()
}

const FETCH__TIMEOUT = 10000
const controller = new AbortController()


const timeoutFetchFactory = (delay?: number): Promise<Response> => {
	delay = delay ?? FETCH__TIMEOUT
	return new Promise((resolve) => {
		setTimeout(() => {
			const timeoutResponse = new Response('timeout', {
				status: 504,
				statusText: 'timeout '
			})
			resolve(timeoutResponse)
			controller.abort()
		}, delay)
	})
}

export const fetchGet = (
	url: string,
	query?: { [x: string]: string },
	conf?: Omit<RequestInit, 'method'>
) => {
	if (query) {
		url = urlQueryBind(url, query)
	}
	const fetchConfig: RequestInit = {
		method: 'GET',
		headers: {
			accetp: 'application/json'
		}
	}
	return Promise.race([fetch(url, fetchConfig), timeoutFetchFactory(1000)])
}
