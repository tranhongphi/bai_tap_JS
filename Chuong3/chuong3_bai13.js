var n = nhap(12),
    i = 2;

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function T(n) {
    while (n != 1) {
        if (n % i == 0) {
            xuat(i);
            n /= i;
        } else {
            i++;
        }
    }
}
T(n);