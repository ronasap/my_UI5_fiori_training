var add = function(x, y) {
    return x + y;
};
var printName = function(name) {
    console.log(name);
console.log('This is best UI5/FIORI Course');
};
var objExport = { fAdd: add, fPrintName: printName };
module.exports = objExport;