var n = nhap(10);
var a = [];
var x = nhap(3);

function nhap(x) {
    return x;
}

function nhapmang(a) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
}

function solanxh(a, x) {
    var dem = 0,
        s = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == x) {
            console.log(i + 1);
            dem++;
            s += a[i];
        }
    }
    console.log(dem);
    console.log(s);
}

function minthu(a, x) {
    var stt = 0;
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
        if (a[i] == x) {
            stt = i + 1;
            break;
        }
    }
    console.log(stt);
}

nhapmang(a);
solanxh(a, x);
minthu(a, x);