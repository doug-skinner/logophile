# Node Server Logger

A basic logging utility based on [winston](https://github.com/winstonjs/winston).

## Usage

To use the logger, just require the package as follows

```js
const logger = require('@dougskinner/node-server-logger');
```

### Log Levels

The following log levels can be used by this logger:

-   debug
-   info
-   warn
-   error
-   trace

Each logger method can be called in the same way:

```js
logger.info(message, logContext);
```

**message** -- _string_ - The message describing the log

**logContext** -- _object_ -- [ Optional ] Additional information you want to append to the log

**NOTE:** Error objects will be converted automatically to raw objects to expose potential appended properties.

### Log Level Manipulation

To control what level logs are printed, users can set the level for the 'noisiest' logs they want to see:

Log Levels (From Highest Level to Lowest):

```
ERROR
WARN
INFO
TRACE
DEBUG
```

Additionally, you can use `OFF` for silencing logs during unit tests.

### API Documentation

#### error

Logging an error message.

Usage:

```js
logger.error('some message');
```

#### warn

Logging a warning message.

Usage:

```js
logger.warn('some message');
```

#### info

Logging an info message.

Usage:

```js
logger.info('some message');
```

#### debug

Logging a debug message.

Usage:

```js
logger.debug('some message');
```

#### trace

Logging a trace message.

Usage:

```js
logger.trace('some message');
```

#### setLogLevel

Changing the log level of the current object.

Usage:

```js
logger.setLogLevel('info');
```

#### getLogLevel

Getting the current log level.

Usage:

```js
logger.getLogLevel();
```

#### addGlobalLogContextKeys

Additional information you want to add to the global log context.

Usage:

```js
logger.addGlobalLogContextKeys(keys);
```
