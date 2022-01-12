import logger from 'electron-log'

const isDevelopment = process.env.NODE_ENV === 'development'

if (isDevelopment) {
  logger.transports.file.level = false
}

export default logger
