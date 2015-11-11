var menubar = require('menubar');
var path = require('path');

var mb = menubar({
  width : 500,
  height: 360,
  index : 'file://' + path.join(__dirname, 'public', 'index.html'),
  icon  : 'Icon.png',
  resizable: false
})

mb.on('ready', function ready () { 
  console.log("app ready");
});

