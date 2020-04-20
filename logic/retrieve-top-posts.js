const context = require('./context')
const fetch = require('node-fetch')
const { processPostsInfo } = require('../utils')

module.exports = async function () {

    const retrieve = await fetch(this.API_URL)
    let res = await retrieve.json()
    res = res.data.children

    const orderedByScore = res.sort((a, b) => b.data.score - a.data.score || b.data.created_utc - a.data.created_utc)

    const { error } = res

    if (error) throw new Error('Network error')

    return processPostsInfo(orderedByScore)

}.bind(context)