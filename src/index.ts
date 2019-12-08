import { AxiosRequestConfig } from './type'
import XHR from './xhr'
import { bulidURL } from './helpers/url'
import { transfromJSONstringify } from './helpers/data'

export default function axios(url: string, options: AxiosRequestConfig): void {
  const fullURL = processConfig(url, options)
  new XHR(fullURL, options).init()
}

function processConfig(url: string, options: AxiosRequestConfig): string {
  let processConfigurl = transformURL(url, options)
  options.body = transfromJSONstringify(options)
  return processConfigurl
}

function transformURL(url: string, options: AxiosRequestConfig) {
  return bulidURL(url, options)
}