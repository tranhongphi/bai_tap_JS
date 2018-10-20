var n = nhap(10);
var a = [];

function nhap(x) {
    return x;
}

function nhapmang(a, n) {
    for (var i = n - 1; i >= 0; i--) {
        a.push(i + 1);
    }
}

function sapxep(a) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
nhapmang(a, n);
sapxep(a);
xuat(a);