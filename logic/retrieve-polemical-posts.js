const context = require('./context')
const fetch = require('node-fetch')
const { processPostsInfo } = require('../utils')

module.exports = async function () {

    const retrieve = await fetch(this.API_URL)
    let res = await retrieve.json()
    res = res.data.children

    const orderedByDates = res.sort((a, b) => b.data.num_comments - a.data.num_comments || b.data.score - a.data.score)

    const { error } = res

    if (error) throw new Error('Network error')

    return processPostsInfo(orderedByDates)

}.bind(context)