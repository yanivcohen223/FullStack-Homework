const config = require('config')
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
 

const logger = createLogger({
    level: config.logger.level,
  format: combine(
    label({ label: 'test logger' }),
    timestamp(),
    prettyPrint()
  ),
  transports: [new transports.Console(),
    new transports.File({
        filename: `logs/log1.log` })
    ]
})

module.exports = logger