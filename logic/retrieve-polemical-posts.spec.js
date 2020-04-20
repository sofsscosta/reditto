const config = require('../config')
const { retrieveHotPosts } = require('.')
const { timeHelper } = require('../utils')
const fetch = require('node-fetch')
const { API_URL } = require('../config')

const logic = require('.')

logic.__context__.API_URL = config.API_URL

describe('retrieve-hot-posts', () => {

    let orderedDates = [], orderedDatesRelative = []

    beforeEach(async () => {
        const result = await fetch(API_URL)

        let res = await result.json()
        res = res.data.children

        orderedDates = res.sort((a, b) => b.data.num_comments - a.data.num_comments || b.data.score - a.data.score)

        console.log(orderedDates.map(el => { return { score: el.data.score, num_comments: el.data.num_comments } }))

        orderedDatesRelative = orderedDates.map(el => timeHelper(el.data.created_utc))
    })

    it('should succeed on showing hot posts', async () => {
        const posts = await retrieveHotPosts()

        for (let i = 0; i < posts.length; i++) {

            expect(posts[i].created_utc).toBe(orderedDatesRelative[i])
            expect(posts[i].title).toBeDefined()
            expect(posts[i].thumbnail).toBeDefined()
            expect(posts[i].author).toBeDefined()
            expect(posts[i].id).toBeDefined()
            expect(posts[i].score).toBeDefined()
            expect(posts[i].num_comments).toBeDefined()
            expect(posts[i].permalink).toBeDefined()
        }

    })

    // it('should fail on network error', () => {

    // })

})