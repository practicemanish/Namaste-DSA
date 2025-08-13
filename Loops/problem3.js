//write a function that return
//  the largest number in array

let arr = [5 , 0, 7 , 10, 8 ,17,1];
function findLargest(arr){
    // let max = -1;   //there is a bug here what if my array contain a negative number 
     let max = -Infinity;

    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];

        }
    }
    return max;
}
let result = findLargest(arr);
console.log(result);