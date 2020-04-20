const context = require('./context')

module.exports = {
    get __context__() { return context },
    retrieveLastPosts: require('./retrieve-last-posts'),
    retrieveTopPosts: require('./retrieve-top-posts'),
    retrieveOldPosts: require('./retrieve-old-posts'),
    retrievePolemicalPosts: require('./retrieve-polemical-posts')
}