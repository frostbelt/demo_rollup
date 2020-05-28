(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['element-ui-admin'] = factory());
}(this, (function () { 'use strict';

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

  return index;

})));
