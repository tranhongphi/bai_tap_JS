var n = nhap(10);
var a = [];

function nhap(x) {
    return x;
}

function nhapmang(a) {
    for (var i = 1; i <= n; i++) {
        if (i <= 2) {
            a.push(1);
        } else {
            a.push(a[i - 2] + a[i - 3]);
        }
    }
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
nhapmang(a);
xuat(a);