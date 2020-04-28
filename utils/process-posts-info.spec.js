import { processPostsInfo } from '.'
import fetch from 'node-fetch'
import Config from 'react-native-config'

describe('processPostsInfo', () => {

    let result

    beforeEach(async () => {
        const response = await fetch(Config.API_URL)

        result = await response.json()
        result = result.data.children
    })

    it('should succeed on displaying date correctly', () => {
        let processed = processPostsInfo(result)

        for (let i in processed) {
            expect(processed[i].thumbnail).toBe(result[i].data.thumbnail)
            expect(processed[i].title).toBe(result[i].data.title)
            expect(processed[i].id).toBe(result[i].data.id)
            expect(processed[i].author).toBe(result[i].data.author)
            expect(processed[i].score).toBe(result[i].data.score)
            expect(typeof processed[i].created_utc).toBe('string')
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