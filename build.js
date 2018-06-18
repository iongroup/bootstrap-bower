const fs = require('fs');
const umdify = require('libumd');

function umd(src, dest) {
    fs.writeFileSync(dest, umdify(fs.readFileSync(src), {
        deps: { 'default': ['angular'] }
    }));
}

umd('ui-bootstrap-tpls.js', 'ui-bootstrap-tpls-umd.js');
