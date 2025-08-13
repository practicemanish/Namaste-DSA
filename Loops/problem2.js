// write a function that return the numbers,
// of negative numbers is an array

let arr =[2,-9,17,0,2,-10,-1,8];

function countNegative(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
            }       
}
return count;
}
let result = countNegative(arr);
console.log(result);






// console.log(countNegative(arr)); // output: 3
