const context = require('../logic/context')
const fetch = require('node-fetch')

module.exports = function () {

    return (async () => {

        try {
            const retrieve = await fetch(this.API_URL)
            let res = await retrieve.json()

            const { error } = res
            if (error) throw new Error(error.message)

            return res
        }

        catch (error) {
            if (error.message === 'Network request failed') throw new Error('Oops! Connection problem here.')

            else throw new Error(error.message)
        }

    })()

}.bind(context)