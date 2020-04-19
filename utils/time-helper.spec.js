const { timeHelper } = require('.')

describe.only('timeHelper', () => {

    beforeEach(async () => {
        const result = await fetch(API_URL)

        const res = await result.json()

        orderedDates = res.data.children.map(el => el.data.created_utc).sort((a, b) => a - b)
    })

    it('should succeed on showing last posts', () => {
        const processed = timeHelper()

        const postsDates = posts.map(el => el.created_utc)
    })
})