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
})