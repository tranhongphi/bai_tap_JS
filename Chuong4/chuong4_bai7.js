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

function chendau(a) {
    a.splice(0, 0, 10);
}

function chencuoi(a) {
    a.push(100);
}

function chenbk(a, x) {
    a.splice(x, 0, 1000);
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
nhapmang(a, n);
chendau(a);
chencuoi(a);
chenbk(a, x);
xuat(a);