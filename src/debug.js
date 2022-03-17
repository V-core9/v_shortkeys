var debug = false;

module.exports = {
  log: (data) => (debug) ? console.log(data) : null,
  info: (data) => (debug) ? console.info(data) : null,
  warn: (data) => (debug) ? console.warn(data) : null,
  set debug (value) {
    debug = value;
  } ,
  get debug () {
    return debug;
  }
};
