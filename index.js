function process(source) {
  return 'rgy test';
}

module.exports = function(source, map){
  this.cacheable && this.cacheable();
  //对source进行解析
  var exports = process(source);
  return "module.exports = " + exports;
}
