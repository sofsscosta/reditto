const config = require('../config')
const { retrieveTopPosts } = require('.')
const fetch = require('node-fetch')
const { API_URL } = require('../config')

const logic = require('.')

logic.__context__.API_URL = config.API_URL

describe.only('retrieve-top-posts', () => {

    let orderedDates

    beforeEach(async () => {
        const result = await fetch(API_URL)

        const res = await result.json()

        orderedByScores = res.data.children.map(el => el.data.score).sort((a, b) => (a.score > b.score) ? 1 : -1)
    })

    it('should succeed on showing top posts', async () => {
        const posts = await retrieveTopPosts()

        const postsDates = posts.map(el => el.created_utc)

        for (let i = 0; i < posts.length; i++) {

            expect(posts[i].created_utc).toBeDefined()
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