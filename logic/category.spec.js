const { category } = require('.')

describe('category', () => {

    let info = [], data, score, created_utc, num_comments, ordered

    beforeEach(async () => {

        for (let i = 0; i < 30; i++) {
            score = Math.floor(Math.random() * 99999)
            created_utc = Math.floor(Math.random() * 99999)
            num_comments = Math.floor(Math.random() * 99999)

            data = { score, created_utc, num_comments }

            info.push({ data })
        }
    })

    afterEach(() => info = [])

    describe('last', () => {

        beforeEach(() => {
            ordered = info.sort((a, b) => b.data.created_utc - a.data.created_utc)
        })

        it('should display the last published posts', () => {
            const results = category.last(info)

            expect(results).toHaveLength(30)

            for (let i in results) {
                expect(results[i].score).toBe(ordered[i].score)
                expect(results[i].created_utc).toBe(ordered[i].created_utc)
                expect(results[i].num_comments).toBe(ordered[i].num_comments)
            }
        })
    })

    describe('top', () => {

        beforeEach(() => {
            ordered = info.sort((a, b) => b.data.score - a.data.score || b.data.created_utc - a.data.created_utc)
        })

        it('should display the top published posts', () => {
            const results = category.top(info)

            expect(results).toHaveLength(30)

            for (let i in results) {
                expect(results[i].score).toBe(ordered[i].score)
                expect(results[i].created_utc).toBe(ordered[i].created_utc)
                expect(results[i].num_comments).toBe(ordered[i].num_comments)
            }
        })
    })

    describe('polemical', () => {

        beforeEach(() => {
            ordered = info.sort((a, b) => b.data.num_comments - a.data.num_comments || b.data.score - a.data.score)
        })

        it('should display the polemical published posts', () => {
            const results = category.polemical(info)

            expect(results).toHaveLength(30)

            for (let i in results) {
                expect(results[i].score).toBe(ordered[i].score)
                expect(results[i].created_utc).toBe(ordered[i].created_utc)
                expect(results[i].num_comments).toBe(ordered[i].num_comments)
            }
        })
    })

    describe('old', () => {

        beforeEach(() => {
            ordered = info.sort((a, b) => a.data.created_utc - b.data.created_utc)
        })

        it('should display the old published posts', () => {
            const results = category.old(info)

            expect(results).toHaveLength(30)

            for (let i in results) {
                expect(results[i].score).toBe(ordered[i].score)
                expect(results[i].created_utc).toBe(ordered[i].created_utc)
                expect(results[i].num_comments).toBe(ordered[i].num_comments)
            }
        })
    })

    it('should fail on non-array query', () => {
        try {
            category.last('string')
        }
        catch (error) {
            expect(error.message).toBe("array string is not an array")
        }
    })
})