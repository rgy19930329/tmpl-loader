module.exports = function(source, map){
  this.cacheable && this.cacheable();
  //对source进行解析
  var compiled = "var tpl = require('baidutemplate').template;\n";
  compiled += "module.exports = tpl(";
  compiled += JSON.stringify(source.toString('utf-8'));
  compiled += ");";
  return compiled;
}
