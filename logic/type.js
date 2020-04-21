module.exports = {
    last: (array) => {

        return array.sort((a, b) => b.data.created_utc - a.data.created_utc)
    },
    top: (array) => {

        return array.sort((a, b) => b.data.score - a.data.score || b.data.created_utc - a.data.created_utc)
    },
    polemical: (array) => {

        return array.sort((a, b) => b.data.num_comments - a.data.num_comments || b.data.score - a.data.score)
    },
    old: (array) => {

        return array.sort((a, b) => a.data.created_utc - b.data.created_utc)
    }
}