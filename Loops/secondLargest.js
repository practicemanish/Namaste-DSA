//write a function which gives second largest elemnt of array

//let arr = [9,8,4,8];
let arr = [10,20,8,9,2,5,18,20];

function findSecondLargest(arr){
//corner cases ..........
    if(arr.length<2){
        return " array should have 2 elements";
    }




    let fisrtLargest = -Infinity;
    let secondLargest = - Infinity;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>fisrtLargest){
            secondLargest = fisrtLargest;
            fisrtLargest=arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]!= fisrtLargest){
            secondLargest = arr[i];
        }
        
    }
    return secondLargest;
}
let result = findSecondLargest(arr);
console.log(result)
