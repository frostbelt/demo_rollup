var foo = 'hello world!';

var index = {
  /**
   * log
   * @param {String} msg 
   */
  log: function log(msg) {
    console.log(foo + ":" + msg);
  }
};

export default index;
