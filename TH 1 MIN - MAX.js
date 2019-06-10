function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let nums = [];
for(let i = 0; i < 10; i++){
    nums[i] = Math.floor((Math.random() * 100) + 10);
}
document.write(nums);
let minValue = findMin(nums);
document.write("<br/>");
document.write("The minimum value is: " + minValue + "<br/>");


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let nums1 = [];
for(let i = 0; i < 10 ; ++i){
    nums1[i] = Math.floor((Math.random() * 101) +1);
}
document.write(nums1 + "<br/>");

let maxValue = findMax(nums1);
document.write("the max number value is: " + maxValue );