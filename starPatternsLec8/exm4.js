let n =5;

for(let i = 0;i<n; i++){
    let row = " ";
    for(let j =0;j<n-(i+1);j++){ // here j loop added empty spaces
        row = row+ " ";

    }
    for(let k = 0 ;k<i+1;k++){ //here k loop add star in loop

        
        row = row + "*";

    }
    console.log(row);
}