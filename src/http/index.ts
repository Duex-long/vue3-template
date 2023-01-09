import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.timeout = 100000
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API || ''

const getHeaders = () => {
	return {
		token:'key'
	}
}

const http = axios.create()

const httpGet = <D = any,R = any>(url:string,data?:D,config?:Omit<AxiosRequestConfig<D>,'params'>):Promise<AxiosResponse<R>> => {
	const axiosConfig:AxiosRequestConfig<D> = {}

	if(config) {
		Object.assign(axiosConfig,config)
	}
	axiosConfig.params = data
	return http.get(
		url,
		config
	)
}


export {
	httpGet
}
