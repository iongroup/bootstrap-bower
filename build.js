const fs = require('fs-extra');
const umdify = require('libumd');

function umd(src, dest) {
    fs.writeFileSync(dest, umdify(fs.readFileSync(src), {
        deps: { 'default': ['angular'] }
    }));
}

umd('./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js', './dist/ui-bootstrap-tpls-umd.js');
umd('./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.min.js', './dist/ui-bootstrap-tpls-umd.min.js');
fs.copyFileSync('./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css', './dist/ui-bootstrap-csp.css');