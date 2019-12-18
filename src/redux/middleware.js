const logger = store => next => action => {
  console.log('dispatching', action); // eslint-disable-line no-console
  const result = next(action);
  console.log('next state', store.getState()); // eslint-disable-line no-console
  return result;
};

const crashReporter = () => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err); // eslint-disable-line no-console
    throw err;
  }
};

export { logger, crashReporter };
