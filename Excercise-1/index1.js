// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b
// Hiển thị tất cả các số nguyên tố trong khoảng a và b.  Nhập trên HTM
let a = Number(prompt("nhap so thu nhat:", ""));
let b = Number(prompt("nhap so thu nhat:", ""));

let start, end;
if (a < 0 && b < 0) {
  document.write("Ko co so nguyen to nao < 0 ");
  console.log("Ko co so nguyen to nao < 0 ");
} else if (a > b && b < 0) {
  end = a;
  start = 1;
} else if (a > b && a > 0 && b > 0) {
  end = a;
  start = b;
} else if (b > a && a > 0 && b > 0) {
  start = a;
  end = b;
} else if (b > a && a < 0) {
  end = b;
  start = 1;
}

document.write(`So nguyen to tu ${start} den ${end} la: `, "<br>");
for (let i = start; i <= end; i++) {
  smt = 0;
  for (j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      smt++;
    }
  }
  if ((smt == 0 || i == 2) && i != 1) {
    document.write(i, ", ");
  }
}
