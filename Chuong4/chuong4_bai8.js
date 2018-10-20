var n = nhap(10);
var a = [];
var x = nhap(3);

function nhap(x) {
    return x;
}

function nhapmang(a, n) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
}

function xoadau(a) {
    a.splice(0, 1);
}

function xoacuoi(a) {
    a.pop();
}

function xoabk(a, x) {
    a.splice(x, 1);
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
nhapmang(a, n);
xoadau(a);
xoacuoi(a);
xoabk(a, x);
xuat(a);