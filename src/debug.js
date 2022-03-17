var debug = false;

module.exports = {

  log: (data) => (debug) ? console.log(data) : null,
  info: (data) => (debug) ? console.info(data) : null,
  warn: (data) => (debug) ? console.warn(data) : null,

  set debug(value = false) {
    if (typeof value === 'boolean') {
      debug = value;
      return true;
    } else {
      return false;
    }
  },
  get debug() {
      return debug || false;
  },

};
