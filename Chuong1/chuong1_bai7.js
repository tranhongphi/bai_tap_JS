var a = 3,
    b = 5,
    r = 3,
    c = 4,
    x = 3,
    p = (a + b + c) / 2,
    h = 5;
console.log("1. Tính diện tích hình tròn.");
console.log("2. Tính diện tích hình chữ nhật.");
console.log("3. Tính diện tích hình vuông.");
console.log("4. Tính diện tích hình tam giác.");
console.log("5. Tính diện tích hình bình hành.");
switch (x) {
    case 1:
        console.log(Math.PI * r * r);
        break;
    case 2:
        console.log(a * b);
        break;
    case 3:
        console.log(a * a);
        break;
    case 4:
        console.log(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
        break;
    case 5:
        console.log(a * h);
        break;
    default:
        console.log("không hợp lệ");
}