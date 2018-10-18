var n = nhap(100);

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function T(n) {
    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (Math.pow(i, 2) >= n) {
            xuat(i - 1);
            break;
        }
    }
}
T(n);