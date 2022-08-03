//Viết một function có tên numberOneTriangle().
//Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác.

function numberOneTriangle(num){
    for (let i = 0; i <= num - 1 ; i++){
        for (let j = 0; j <= i - 1 ; j++){
            document.write('*');
        }
        document.write('<br/>');
    }
}
let x = Number(prompt('input number from 1 to 10:'));
if  (x  >= 1 && x <= 10 && Number.isInteger(x)) {
    numberOneTriangle(x);
} else {
    let x = Number(prompt('i said INPUT NUMBER FROM 1 TO 10: '));
    numberOneTriangle(x);
}
