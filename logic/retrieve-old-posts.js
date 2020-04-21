const context = require('./context')
const fetch = require('node-fetch')
const { processPostsInfo } = require('../utils')

module.exports = function () {

    return (async () => {

        try {
            const retrieve = await fetch(this.API_URL)
            let res = await retrieve.json()
            res = res.data.children

            const orderedByDates = res.sort((a, b) => a.data.created_utc - b.data.created_utc)

            const { error } = res

            if (error) throw new Error(error.message)

            return processPostsInfo(orderedByDates)
        }

        catch (error) {
            throw new Error('Oops! Connection problem here.')
        }
    })()

}.bind(context)