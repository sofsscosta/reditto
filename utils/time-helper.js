const validate = require('./validate')

module.exports = (date) => {
    validate.type(date, 'date', Number)

    const relativeTime = Date.now() - (date * 1000)

    if (relativeTime < 60000) {
        return `less than a minute ago`
    }

    if (relativeTime > 60000 && relativeTime <= 3600000) {
        const minutes = parseInt(Math.floor(relativeTime / (1000 * 60)))
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`
    }

    if (relativeTime > 3600000 && relativeTime <= 86400000) {
        const hours = parseInt(Math.floor(relativeTime / (1000 * 60 * 60)))
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`
    }

    if (relativeTime > 86400000 && relativeTime <= 2592000000) {
        const days = parseInt(Math.floor(relativeTime / (1000 * 60 * 60 * 24)))
        return days === 1 ? '1 day ago' : `${days} days ago`
    }

    if (relativeTime > 2592000000 && relativeTime <= 31104000000) {
        const months = parseInt(Math.floor(relativeTime / (1000 * 60 * 60 * 24 * 30)))
        return months === 1 ? '1 month ago' : `${months} months ago`
    }

    if (relativeTime > 31104000000) {
        const years = parseInt(Math.floor(relativeTime / (1000 * 60 * 60 * 24 * 30 * 12)))
        return years === 1 ? '1 year ago' : `${years} years ago`
    }
}