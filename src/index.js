import foo from './foo.js';
export default {
  /**
   * log
   * @param {String} msg 
   */
  log (msg) {
    console.log(foo + ":" + msg);
  }
}