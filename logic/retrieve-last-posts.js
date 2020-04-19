const context = require('./context')
const fetch = require('node-fetch')

module.exports = async function () {

    const retrieve = await fetch(this.API_URL)
    const res = await retrieve.json()

    const orderedDates = res.data.children.map(el => el.data.created_utc).sort((a, b) => a - b)

    let finalResult = []

    orderedDates.forEach(el => {

        for (let post of res.data.children) {

            const { thumbnail, title, id, author, score, created_utc, num_comments, permalink } = post.data

            if (post.data.created_utc === el)
                finalResult.push({ thumbnail, title, id, author, score, created_utc, num_comments, permalink })
        }
    })

    const { error } = res

    if (error) throw new Error(error)

    return finalResult

}.bind(context)