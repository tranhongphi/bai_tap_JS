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

function uoc(a, n) {
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        if (n % a[i] == 0) {
            console.log(a[i]);
            s += a[i];
        }
    }
    console.log(s);
}
nhapmang(a, n);
uoc(a, n);