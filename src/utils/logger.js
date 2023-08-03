import winston from 'winston'

const logger = winston.createLogger({
    transports:[
        new winston.transports.Console({
            level: "debug",
            format: winston.format.simple()
        }),
        new winston.transports.File({
            filename: './errors.log', 
            level: "info",
            format: winston.format.simple()
        })
    ]
})

const levelOptions = {
    levels:{
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    }
}

export const addLogger = (req, res, next) =>{
    req.logger = logger;
    req.logger.debug(`${req.method} en ${req.url} - ${new Date().toLocaleDateString()}`)
    next();
}