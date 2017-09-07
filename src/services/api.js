import axios from 'axios'
import { env } from '../config'

class Api {
  constructor () {
    this.proxy = axios.create({
      baseURL: env.ApiBaseURL(),
      timeout: 5000
    })
  }

  /**
   * Helper method to extract query parameters from the url
   */
  getQueryValue (key) {
    let query = window.location.search.substring(1)
    let vars = query.split('&')
    let values = []

    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=')
      if (pair[0] === key) {
        values.push(pair[1])
      }
    }

    if (values.length === 0) {
      return null
    } else if (values.length === 1) {
      return values[0]
    }

    return values
  }

  getCookieValue (key) {
    let cookies = document.cookie
    let vars = cookies.split(';')
    let values = []

    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=')
      if (pair[0].trim() === key) {
        values.push(pair[1].trim())
      }
    }

    if (values.length === 0) {
      return null
    } else if (values.length === 1) {
      return values[0]
    }

    return values
  }

  getToken () {
    // Look for token in local storage
    let token = null
    if (this.supportForLocalStorage()) {
      token = window.localStorage.getItem('token')
    }

    // Look for token as cookie
    if (token === null) {
      token = this.getCookieValue('token')
    }

    // Look for token in query string
    if (token === null) {
      token = this.getQueryValue('token')
    }

    if (env.IsTest()) {
      token = window.token
    }

    return token
  }

  setToken (token) {
    if (this.supportForLocalStorage()) {
      window.localStorage.setItem('token', token)
    } else {
      document.cookie = 'token=' + token
    }
  }

  supportForLocalStorage () {
    try {
      return 'localStorage' in window && window['localStorage'] !== null
    } catch (e) {
      return false
    }
  }

  information () {
    return this.proxy.get('/')
  }

  twoFactor (account, token) {
    if (token) {
      return this.proxy.post(env.EndpointTwoFactorVerify(account), { token: token }, { headers: { 'Authorization': `Bearer ${this.getToken()}` } })
    }

    return this.proxy.get(env.EndpointTwoFactor(account), { headers: { 'Authorization': `Bearer ${this.getToken()}` } })
  }

  twoFactorReset (account) {
    return this.proxy.get(env.EndpointTwoFactorReset(account), { headers: { 'Authorization': `Bearer ${this.getToken()}` } })
  }

  login (username, password) {
    return this.proxy.post(env.EndpointBasicAuthentication(), { username: username, password: password })
  }

  refresh () {
    return this.proxy.post(env.EndpointRefresh(), {}, { headers: { 'Authorization': `Bearer ${this.getToken()}` } })
  }

  save (payload) {
    return this.proxy.post(env.EndpointSave(), payload, { headers: { 'Authorization': `Bearer ${this.getToken()}` } })
  }

  validate (payload) {
    return this.proxy.post(env.EndpointValidate(), payload, { headers: { 'Authorization': `Bearer ${this.getToken()}` } })
  }
}

const api = new Api()
export { api }
