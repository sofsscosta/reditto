const { timeHelper, processPostsInfo } = require('.')

describe('processPostsInfo', () => {

    let seconds, minutes, hours, days, months

    beforeEach(async () => {
        seconds = (Date.now()) / 1000
        minutes = (Date.now() - 90000) / 1000
        hours = (Date.now() - 3600001) / 1000
        days = (Date.now() - 90000000) / 1000
        months = (Date.now() - 2592000000) / 1000
        years = (Date.now() - 31104000000) / 1000
    })

    it('should succeed on displaying date correctly', () => {
        const formattedSeconds = processPostsInfo(seconds)
        const formattedMinutes = processPostsInfo(minutes)
        const formattedHours = processPostsInfo(hours)
        const formattedDays = processPostsInfo(days)
        const formattedMonths = processPostsInfo(months)
        const formattedYears = processPostsInfo(years)

        expect(formattedSeconds).toBe('less than a minute ago')
        expect(formattedMinutes).toBe('1 minute ago')
        expect(formattedHours).toBe('1 hour ago')
        expect(formattedDays).toBe('1 day ago')
        expect(formattedMonths).toBe('1 month ago')
        expect(formattedYears).toBe('1 year ago')

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