var a = nhap(5),
    x = GT(a);

function nhap(x) {
    return x;
}

function GT(a) {
    var s = 1;
    for (var i = 1; i <= a; i++) {
        s *= i;
    }
    return s;
}

function xuat(x) {
    console.log(x);
}
xuat(x);