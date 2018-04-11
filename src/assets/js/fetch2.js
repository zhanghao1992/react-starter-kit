require('es6-promise').polyfill()
import 'isomorphic-fetch'
export default function fetch2 (url, options) {
    options = options || {}
    return fetch(url, options)
        .then((response) => response.json())
}
