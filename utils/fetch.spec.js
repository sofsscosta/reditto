const fetch = require('./fetch')
const logic = require('../logic')

jest.setTimeout(30000)

describe('fetch', () => {

    it('should succeed on valid url', async () => {
        const sites = [
            { url: 'https://ghibliapi.herokuapp.com/films', text: 'ghibli' },
            { url: 'https://random.dog/doggos', text: 'jpg' },
            { url: 'https://world.openfoodfacts.org/api/v0/', text: 'food' },
            { url: 'https://api.openbrewerydb.org/breweries', text: 'brewery' },
            { url: 'https://official-joke-api.appspot.com/random_ten', text: 'punchline' }
        ]

        let site = sites[Math.floor(Math.random() * sites.length)]

        logic.__context__.API_URL = site.url

        const response = await fetch()

        expect(response).toBeDefined()
        expect(response).toBeInstanceOf(Object)
        expect(response).not.toBeInstanceOf(Error)
    })

    it('should fail on invalid url', async () => {
        let url = 'invalid-url'

        logic.__context__.API_URL = url

        try {
            await fetch()
        } catch (error) {
            expect(error).toBeDefined()
            expect(error.message).toBe('Only absolute URLs are supported')
        }
    })

    it('should fail on valid non-existing url', async () => {
        let url = 'https://non-existing.url'

        logic.__context__.API_URL = url

        try {
            await fetch()
        } catch (error) {
            expect(error).toBeDefined()
            expect(error.message).toBe('request to https://non-existing.url/ failed, reason: getaddrinfo ENOTFOUND non-existing.url')
        }
    })

    afterEach(() => logic.__context__.API_URL = '')
})