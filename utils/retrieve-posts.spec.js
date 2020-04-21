const retrievePosts = require('./retrieve-posts')

jest.setTimeout(30000)

describe('retrievePosts', () => {

    it('should succeed on valid url', async () => {
        const sites = [
            { url: 'https://ghibliapi.herokuapp.com/films', text: 'ghibli' },
            { url: 'https://random.dog/doggos', text: 'jpg' },
            { url: 'https://world.openfoodfacts.org/api/v0/', text: 'food' },
            { url: 'https://api.openbrewerydb.org/breweries', text: 'brewery' },
            { url: 'https://official-joke-api.appspot.com/random_ten', text: 'punchline' }
        ]

        let site = sites[Math.floor(Math.random() * sites.length)]

        const response = await retrievePosts(site.url)

        expect(response).toBeDefined()
        expect(response).toBeInstanceOf(Object)
        expect(response).not.toBeInstanceOf(Error)
    })

    it('should fail on invalid url', async () => {
        let url = 'invalid-url'

        try {
            await retrievePosts(url)
        } catch (error) {
            expect(error).toBeDefined()
            expect(error.message).toBe('Only absolute URLs are supported')
        }
    })

    it('should fail on valid non-existing url', async () => {
        let url = 'https://non-existing.url'

        try {
            await retrievePosts(url)
        } catch (error) {
            expect(error).toBeDefined()
            expect(error.message).toBe('request to https://non-existing.url/ failed, reason: getaddrinfo ENOTFOUND non-existing.url')
        }
    })
})