export let API
if (process.env.NODE_ENV === 'production') {
  API = process.env.REACT_APP_PRODUCTION_API_URL
} else {
  API = process.env.REACT_APP_DEVELOPMENT_API_URL
}
