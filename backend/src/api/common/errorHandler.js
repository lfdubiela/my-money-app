const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
        return
    } 

    next()
}

const parseErrors = (appErrors) => {
    const errors = []
    _.forIn(appErrors, error => errors.push(error.message))
    return errors
}