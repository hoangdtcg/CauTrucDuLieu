
let amountSNL = prompt("Nhap So luong SNT can tim");
let count = 1;
let number = 0;

do {
    let flag = true;
    if (number < 2) {
        flag = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        document.write(number + " ");
        count += 1;
    }
    number++

}while (count <= amountSNL);

