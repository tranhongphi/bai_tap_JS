var n = nhap(10);
var a = [];

function nhap(x) {
    return x;
}

function nhapmang(a, n) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
}

function dao(a) {
    for (var i = 0; i < n / 2; i++) {
        var tmp = a[i];
        a[i] = a[n - i - 1];
        a[n - i - 1] = tmp;
    }
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
nhapmang(a, n);
dao(a);
xuat(a);