const num = 5;
function stepShape(number){
     const a = "#";
     const b = ' ';
     let step;
    for (let i = 0; i < number; i++) {
            step =a.repeat(i+1)+b.repeat(number-i); 
            console.log(step);
             
    }
}

stepShape(num);

function steps(n){
    for(let row = 0; row < n; row++){
        let stair = ' ';
        for(let column = 0; column < n; column++){
            if (column <= row){
                stair +='#';
            }
            else{
                stair += ' ';
            } 
        }
        console.log(stair);
    }
}
steps(num);

