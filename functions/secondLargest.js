   
let  arr   = [ 21, -6,8, 6, -8, 3, -9, 8, -5]
//    console.log("max", max)

//     arr = arr.filter(val => val !=max);

//     let  smax  = Math.max(...arr);

//     return smax;

// }


function secondLar(arr){

    let  max   = Math.max(...arr);

    console.log("max", max)

    arr = arr.filter(val => val !=max);

    let  smax  = Math.max(...arr);

    return smax;

}

(()=>{
    let  smax  = secondLar(arr);
    console.log("res", smax)
})()