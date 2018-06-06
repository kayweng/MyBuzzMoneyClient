import axios from 'axios'

const localCurrencyAPI = axios.create({
  baseURL: 'http://data.fixer.io/api/latest?access_key=a657d06a0a2fb668eb38f28c3881a5a0&format=1'
})

const freeCurrencyAPI = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5/'
})

export { localCurrencyAPI, freeCurrencyAPI }
