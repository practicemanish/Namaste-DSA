//write a function that searches for a element 
// in an array and return the index ,
//  if the element is not present
// then just return -1
let arr = [4,0,8,13,10, 2, 3, 5, 6, 7];

function findElement(arr,num){

    let length = arr.length;

    for(let i=0;i<length;i++){
        if(arr[i]==num){
            return i;
            
        }
       }
    return -1;
    
}
// call the function with a number
let res = findElement(arr,49);
console.log(res);
