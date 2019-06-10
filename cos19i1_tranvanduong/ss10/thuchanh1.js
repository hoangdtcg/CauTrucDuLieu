function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let nums = [];
for(let i=0;i<100;++i){
    nums[i] = Math.floor(Math.random() * 101);
}
let minValue = findMin(nums);
dispArr(nums);
document.write("<br/>");
document.write("The minimum value is: " + minValue);

function findMax(arr) {
    let max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let nums = [];
for(vari=0; i<100; ++i){
    nums[i] = Math.floor(Math.random() * 101);
}

let minValue = findMin(nums);
dispArr(nums); //Hàm này được lấy từ bài đọc thuật toán tìm kiếm

document.write("<br/>");
document.write("<br/>");
document.write("The minimum value is: " + minValue);

let maxValue = findMax(nums);
document.write("<br/>");
document.write("The maximum value is: " + maxValue);