const config = require('../config')
const { timeHelper, processPostsInfo } = require('.')
const fetch = require('node-fetch')
const { API_URL } = require('../config')

const logic = require('../logic')

logic.__context__.API_URL = config.API_URL

describe('processPostsInfo', () => {

    let result, orderedDatesRelative = []

    beforeEach(async () => {
        const res = await fetch(API_URL)

        result = await res.json()
        result = result.data.children

        orderedDatesRelative = result.map(el => timeHelper(el.data.created_utc))
    })

    it('should succeed on displaying date correctly', async () => {
        let processed = await processPostsInfo(result)

        thumbnail, title, id, author, score, created_utc, num_comments, permalink

        for (let i in processed) {
            expect(processed[i].thumbnail).toBe(result[i].data.thumbnail)
            expect(processed[i].title).toBe(result[i].data.title)
            expect(processed[i].id).toBe(result[i].data.id)
            expect(processed[i].author).toBe(result[i].data.author)
            expect(processed[i].score).toBe(result[i].data.score)
            expect(processed[i].created_utc).toBe(orderedDatesRelative[i])
            expect(processed[i].num_comments).toBe(result[i].data.num_comments)
            expect(processed[i].permalink).toBe(result[i].data.permalink)
        }
    })

    it('should fail on non-array info', () => {
        try {
            processPostsInfo('string')
        }
        catch (error) {
            expect(error.message).toBe('posts string is not an array')
        }
    })
})