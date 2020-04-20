const timeHelper = require('./time-helper')
const validate = require('./validate')

module.exports = (posts) => {

    validate.array(posts, 'posts')

    let finalResult = []

    for (let post of posts) {

        const { thumbnail, title, id, author, score, created_utc, num_comments, permalink } = post.data
        const relativeDate = timeHelper(created_utc)

        finalResult.push({ thumbnail, title, id, author, score, created_utc: relativeDate, num_comments, permalink })
    }

    return finalResult
}