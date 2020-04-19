const config = require('../config')
const { retrieveLastPosts } = require('.')
const fetch = require('node-fetch')
const { API_URL } = require('../config')

const logic = require('.')

logic.__context__.API_URL = config.API_URL

describe.only('retrieve-last-posts', () => {

    let orderedDates

    beforeEach(async () => {
        const result = await fetch(API_URL)

        const res = await result.json()

        orderedDates = res.data.children.map(el => el.data.created_utc).sort((a, b) => a - b)
    })

    it('should succeed on showing last posts', async () => {
        const posts = await retrieveLastPosts()

        const postsDates = posts.map(el => el.created_utc)

        for (let i = 0; i < posts.length; i++) {

            expect(posts[i].created_utc).toBe(orderedDates[i])
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