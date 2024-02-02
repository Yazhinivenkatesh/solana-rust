const {serverApiKey} = require('../config/vars'),
logger = require("../config/logger");

exports.authenticate = async (req, res, next) => {
    try {
        // if (req.headers.accesskey != serverApiKey) throw new Error('Not authorized to access the API Service')
        next()
    } catch (err) {
        logger.log({message: err.message, level: 'error'})
        res.status(401).json({
            code: 401,
            message: err.message,
            status: 'error',
            isValid: false,
        })
    }
}