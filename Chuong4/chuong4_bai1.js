var n = nhap(50);
var a = [];

function nhap(x) {
    return x;
}

function nhapmang(a) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
nhapmang(a);
xuat(a);