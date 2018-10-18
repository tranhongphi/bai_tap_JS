var n = nhap(10),
    s1 = nhap(0),
    s2 = nhap(0);

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function T(n, s1, s2) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            s1 += i;
        } else {
            s2 += i;
        }
    }
    xuat(s1);
    xuat(s2);
}
T(n, s1, s2);