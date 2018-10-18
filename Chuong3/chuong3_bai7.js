var a = nhap(5),
    x = T(a);

function nhap(x) {
    return x;
}

function T(a) {
    var s = 0;
    for (var i = 1; i <= a; i++) {
        s += 1 / i;
    }
    return s;
}

function xuat(x) {
    console.log(x);
}
xuat(x);