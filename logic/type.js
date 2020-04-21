const { validate } = require('../utils')

module.exports = {
    last: (array) => {
        validate.array(array, 'array')

        return array.sort((a, b) => b.data.created_utc - a.data.created_utc)
    },
    top: (array) => {
        validate.array(array, 'array')

        return array.sort((a, b) => b.data.score - a.data.score || b.data.created_utc - a.data.created_utc)
    },
    polemical: (array) => {
        validate.array(array, 'array')

        return array.sort((a, b) => b.data.num_comments - a.data.num_comments || b.data.score - a.data.score)
    },
    old: (array) => {
        validate.array(array, 'array')

        return array.sort((a, b) => a.data.created_utc - b.data.created_utc)
    }
}