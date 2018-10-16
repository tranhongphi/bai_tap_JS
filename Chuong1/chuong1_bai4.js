var a = 2,
    b = 1,
    c = 2;
if (a == 0) {
    console.log("Không phải pt bậc 2");
} else {
    var dt = b * b - 4 * a * c;
    var x = -b / (2 * a),
        x1 = (-b - Math.sqrt(dt)) / (2 * a),
        x2 = (-b + Math.sqrt(dt)) / (2 * a);
    if (dt < 0) {
        console.log("pt vô nghiệm");
    } else if (dt == 0) {
        console.log("pt có nghiệm duy nhất x = " + x);
    } else {
        console.log("pt có 2 nghiệm phân biệt x1 = " + x1 + " x2 = " + x2);
    }
}