var n = nhap(10),
    dem = 0;

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function check(x) {
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function T(n, dem) {
    for (var i = n - 1; i >= 2; i--) {
        if (check(i)) {
            dem++
        }
        if (dem == 2) {
            xuat(i);
            break;
        }
    }
}
T(n, dem);