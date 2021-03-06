export const validate = {
    type(target, name, type) {
        if (type === String || type === Number || type === Boolean) {
            type = type.name.toLowerCase()

            if (typeof target !== type) throw new TypeError(`${name} ${target} is not a ${type}`)
        } else if (!(target instanceof type)) throw new TypeError(`${name} ${target} is not a ${type.name}`)
    },

    array(target, name) {
        if (!(target instanceof Array)) throw new TypeError(`${name} ${target} is not an array`)
    }
}