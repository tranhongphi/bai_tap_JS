var n = nhap(10);
var a = [];
var b = [];
var c = [];

function nhap(x) {
    return x;
}

function nhapmang(a) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
}

function tach(a, b, c) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            b.push(a[i]);
        } else {
            c.push(a[i]);
        }
    }
}

function xuat(x) {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}
nhapmang(a);
tach(a, b, c);
xuat(b);
xuat(c);