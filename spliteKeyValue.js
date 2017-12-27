var data = require('./data');
var dataValue = require('./ch');
var fs = require('fs');
var ch = [];
var puyu = [];
var fied = [];



var reg = /([\u4e00-\u9fa5]+)/g;

var getValue = dataValue.match(reg);

// 葡语
for (var ka in data) {
  var pram = {};
  pram[ka] = data[ka]
  fied.push(ka);
  puyu.push(pram);
}

// 中文
for (var i = 0; i < fied.length; i++) {
  var pp = {};
  pp[fied[i]] = getValue[i];
  ch.push(pp);
}


// 中文
var write = [];
ch.forEach((o) => {
  for (var jj in o) {
    var value = `${jj}: "${o[jj]}",`
  }
  write.push(value)
});
var str = write.join("\n");

// 葡语
var writePu = [];
puyu.forEach((p) => {
  for (var ss in p) {
    var valuePu = `${ss}: "${p[ss]}",`
  }
  writePu.push(valuePu)
});
var strPu = writePu.join("\n");



fs.writeFile('alert_ZH.js', str, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("中文翻译文件数据写入成功！");
});
fs.writeFile('alert_PU.js', strPu, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("葡语翻译文件数据写入成功！");
});