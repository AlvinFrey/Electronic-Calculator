var nw = require('nw.gui');
var win = nw.Window.get();

document.getElementById('refresh').onclick = function(){
    win.reload();
};

document.getElementById('minimize').onclick = function(){
    win.minimize();
};

document.getElementById('close').onclick = function(){
    win.close();
};


