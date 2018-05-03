const logger = require('pino')({
    name: 'ss-sailor',
    prettyPrint: true,
    level: 'info'
})
module.exports = (moduleName) => {
    return logger.child({
        name: `ss-sailor - ${moduleName}`
    })
}
