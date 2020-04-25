import fetch from 'node-fetch'

export const retrievePosts = (url) => {

    return (async () => {

        try {
            const retrieve = await fetch(url)
            let res = await retrieve.json()

            const { error } = res
            if (error) throw new Error(error.message)

            return res
        }

        catch (error) {
            if (error.message === 'Network request failed') throw new Error('Oops! Connection problem here.')

            else throw new Error(error.message)
        }
    })()
}