const config = require('../config')
const { retrieveTopPosts } = require('.')
const { timeHelper } = require('../utils')
const fetch = require('node-fetch')
const { API_URL } = require('../config')

const logic = require('.')

logic.__context__.API_URL = config.API_URL

describe('retrieve-top-posts', () => {

    let orderedByScores = [], orderedDatesRelative = []

    beforeEach(async () => {
        const result = await fetch(API_URL)

        let res = await result.json()
        res = res.data.children

        orderedByScores = res.sort((a, b) => b.data.score - a.data.score || b.data.created_utc - a.data.created_utc)

        orderedDatesRelative = orderedByScores.map(el => timeHelper(el.data.created_utc))
    })

    it('should succeed on showing top posts', async () => {
        const posts = await retrieveTopPosts()

        for (let i = 0; i < posts.length; i++) {

            expect(posts[i].created_utc).toBe(orderedDatesRelative[i])
            expect(posts[i].title).toBe(orderedByScores[i].data.title)
            expect(posts[i].thumbnail).toBe(orderedByScores[i].data.thumbnail)
            expect(posts[i].author).toBe(orderedByScores[i].data.author)
            expect(posts[i].id).toBe(orderedByScores[i].data.id)
            expect(posts[i].score).toBe(orderedByScores[i].data.score)
            expect(posts[i].num_comments).toBe(orderedByScores[i].data.num_comments)
            expect(posts[i].permalink).toBe(orderedByScores[i].data.permalink)
        }

    })

    // it('should fail on network error', () => {

    // })

})