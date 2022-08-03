// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b
// Hiển thị tất cả các số nguyên tố trong khoảng a và b.  Nhập trên HTML

// Function kiem tra so nguyen to:
const checkSNT = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
};

document.getElementById('run').onclick = () => {
  const a = parseInt(document.getElementById('aNumber').value);
  const b = parseInt(document.getElementById('bNumber').value);
  const result = document.getElementById('result');

  const listNumber = [];
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      if (checkSNT(i) === true) {
        listNumber.push(i);
      }
    }

    if (listNumber.length === 0) {
      result.innerHTML = `<p>Không có số nguyên tố trong khoảng ${a} -> ${b}</p>`;
    } else {
      let stringHTML = '';
      for (let number of listNumber) {
        stringHTML += `<p>${number}</p>`;
      }
      result.innerHTML = stringHTML;
    }
  } else {
    result.innerHTML = `<p> a < b is required </p>`;
  }
};