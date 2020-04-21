const validate = require('./validate')

describe('validate', () => {

    describe('type', () => {
        it('should succeed on matching non-primitive type', () => {
            const name = 'something'

            let target = '', type = String
            expect(() => validate.type(target, name, type)).not.toThrow(TypeError, `${name} ${target} is not a ${type.name}`)

            target = 'date', type = Date
            expect(() => validate.type(target, name, type)).toThrow(TypeError, `${name} ${target} is not a ${type.name}`)

            target = true, type = Boolean
            expect(() => validate.type(target, name, type)).not.toThrow(TypeError, `${name} ${target} is not a ${type.name}`)

            target = 'true', type = Boolean
            expect(() => validate.type(target, name, type)).toThrow(TypeError, `${name} ${target} is not a ${type.name.toLowerCase()}`)
        })
    })

    describe('array', () => {
        it('should succeed on passed array', () => {
            const name = 'something'

            let target = [1, 2, 3]
            expect(() => validate.array(target, name)).not.toThrow(TypeError, `${name} ${target} is not an array`)

            target = 'not an array'
            expect(() => validate.array(target, name)).toThrow(TypeError, `${name} ${target} is not an array`)
        })
    })
})