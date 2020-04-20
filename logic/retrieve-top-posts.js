const context = require('./context')
const { timeHelper } = require('../utils')
const fetch = require('node-fetch')

module.exports = async function () {

    const retrieve = await fetch(this.API_URL)
    let res = await retrieve.json()
    res = res.data.children

    const orderedByScore = res.sort((a, b) => b.data.score - a.data.score || b.data.created_utc - a.data.created_utc)

    let finalResult = []

    for (let post of orderedByScore) {

        const { thumbnail, title, id, author, score, created_utc, num_comments, permalink } = post.data
        const relativeDate = timeHelper(created_utc)

        finalResult.push({ thumbnail, title, id, author, score, created_utc: relativeDate, num_comments, permalink })
    }

    const { error } = res

    if (error) throw new Error('Network error')

    return finalResult

}.bind(context)