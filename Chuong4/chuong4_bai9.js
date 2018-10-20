var m = nhap(5);
var n = nhap(2);
var a = [];
var b = [];
var c = [];
var x = nhap(3);

function nhap(x) {
    return x;
}

function nhapmang(a, x) {
    for (var i = x; i > 0; i--) {
        a.push(i + 1);
    }
}

function ghep(a, b, c) {
    a.forEach(x => {
        c.push(x);
    });
    b.forEach(x => {
        c.push(x);
    });
}

function sapxep(x) {
    x.sort(function(a, b) { return a - b });
}

function cat(i, vt) {
    var x = c.slice(i, vt);
    return x;
}

function chen(x) {
    a.push(x);
    b.push(x);
}

function xuat(x) {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}
nhapmang(a, m);
nhapmang(b, n);
ghep(a, b, c);
sapxep(c);
a = cat(0, m);
b = cat(m, m + n);
chen(100);
xuat(a);
xuat(b);