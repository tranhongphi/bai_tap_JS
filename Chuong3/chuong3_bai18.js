var a = nhap(100),
    x = a,
    y = (x * x + a) / (2 * x),
    e = 0.00001;

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function T(a, x, y, e) {
    while (Math.abs((x - y) / y) >= e) {
        x = (x * x + a) / (2 * x);
        y = (x * x + a) / (2 * x);
    }
    xuat(y);
}
T(a, x, y, e);