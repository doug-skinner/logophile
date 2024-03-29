import { setMaxListeners } from 'process'

const { createLogger, format, transports } = require('winston')

const { combine, timestamp, json } = format

setMaxListeners(Infinity)

const DEFAULT_LEVEL = 'info'
const logLevels = Object.freeze({
    debug: 4,
    error: 0,
    info: 2,
    off: -1,
    trace: 3,
    warn: 1,
})

const GLOBAL_LOG_CONTEXT = {}

const globalLogContextKeysFormat = format((info: object) => ({
    ...info,
    ...GLOBAL_LOG_CONTEXT,
}))

const CURRENT_FORMAT = [globalLogContextKeysFormat(), timestamp(), json()]
const CURRENT_TRANSPORTS = [new transports.Console()]

const CURRENT_CONFIG = {
    level: DEFAULT_LEVEL,
    format: combine(...CURRENT_FORMAT),
    levels: logLevels,
    transports: CURRENT_TRANSPORTS,
}

const initConfig = () => {
    CURRENT_CONFIG.level = CURRENT_CONFIG.level || DEFAULT_LEVEL
    CURRENT_TRANSPORTS.forEach((transport) => {
        transport.level = CURRENT_CONFIG.level
    })
}

const getLoggerImpl = () => {
    initConfig()
    const loggerImpl = createLogger(CURRENT_CONFIG)

    return loggerImpl
}

const setLogLevel = (level: string) => {
    CURRENT_CONFIG.level = level ? level.toLowerCase() : DEFAULT_LEVEL
    CURRENT_TRANSPORTS.forEach((transport) => {
        transport.level = CURRENT_CONFIG.level
    })
    getLoggerImpl().configure(CURRENT_CONFIG)
}

const getLogLevel = () => CURRENT_CONFIG.level || DEFAULT_LEVEL

const addGlobalLogContextKeys = (keys = {}) => {
    Object.assign(GLOBAL_LOG_CONTEXT, keys)
    getLoggerImpl().configure(CURRENT_CONFIG)
}

const error = (...args: any) => getLoggerImpl().error(...args)
const warn = (...args: any) => getLoggerImpl().warn(...args)
const info = (...args: any) => getLoggerImpl().info(...args)
const debug = (...args: any) => getLoggerImpl().debug(...args)
const trace = (...args: any) => getLoggerImpl().trace(...args)

// Necessary for output when you don't want to include the context keys
// eslint-disable-next-line no-console
const log = (...args: any) => console.log(...args)

export default {
    addGlobalLogContextKeys,
    debug,
    error,
    getLogLevel,
    info,
    log,
    setLogLevel,
    trace,
    warn,
}
