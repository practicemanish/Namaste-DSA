let n =5;
for(let i = 0; i<n ; i++){
    row = " ";
    for(let j = 0; j<n-i ; j++){
        row = row + '*';
    }
    console.log(row);
}