const config = require('../config')
const { retrieveOlderPosts } = require('.')
const { timeHelper } = require('../utils')
const fetch = require('node-fetch')
const { API_URL } = require('../config')

const logic = require('.')

logic.__context__.API_URL = config.API_URL

describe('retrieve-older-posts', () => {

    let orderedDates = [], orderedDatesRelative = []

    beforeEach(async () => {
        const result = await fetch(API_URL)

        let res = await result.json()
        res = res.data.children

        orderedDates = res.sort((a, b) => a.data.created_utc - b.data.created_utc)

        orderedDatesRelative = orderedDates.map(el => timeHelper(el.data.created_utc))
    })

    it('should succeed on showing older posts first', async () => {
        const posts = await retrieveOlderPosts()

        const postsDates = posts.map(el => el.created_utc)

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