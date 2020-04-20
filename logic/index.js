const context = require('./context')

module.exports = {
    get __context__() { return context },
    retrieveLastPosts: require('./retrieve-last-posts'),
    retrieveTopPosts: require('./retrieve-top-posts'),
}