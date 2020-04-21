const context = require('./context')

module.exports = {
    get __context__() { return context },
    type: require('./type')
}