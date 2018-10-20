var n = nhap(10);
var a = [];
var somax,
    somin,
    somax2,
    somin2;

function nhap(x) {
    return x;
}

function nhapmang(a) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
}

function max(a) {
    return Math.max.apply(null, a);
}

function min(a) {
    return Math.min.apply(null, a);
}

function max2(a, somax) {
    var somax2 = 0;
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] != somax) {
            somax2 = a[i];
            break;
        }
    }
    return somax2;
}

function min2(a, somin) {
    var somin2 = -1;
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] != somin) {
            somin2 = a[i];
            break;
        }
    }
    return somin2;
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
nhapmang(a);
somax = max(a);
somin = min(a);
somax2 = max2(a, somax);
somin2 = min2(a, somin);
console.log(somax);
console.log(somin);
console.log(somax2);
console.log(somin2);