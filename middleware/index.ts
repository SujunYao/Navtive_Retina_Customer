import logger from './log';
import promiseMiddleware from './promise';

export default {
  loggerMiddleware: logger.loggerMiddleware,
  // crashReporterMiddleware: logger.crashReporter,
  vanillaPromiseMiddleware: promiseMiddleware.vanillaPromise,
  readyStatePromiseMiddleware: promiseMiddleware.readyStatePromise,
}