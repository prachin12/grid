let button= document.getElementById("button");
let rowno;
let colno;
let container= document.getElementById("big_container");
//creating a function to get row and column input

button.addEventListener("click", function(){
    
    container.innerHTML="";
 rowno= window.prompt("Enter the number of rows");
colno= window.prompt("Enter the number of columns");
if(rowno>10 || colno>10){
    alert("Please enter a number less than 10");
    return;
}
for(let i=0; i<rowno; i++){
    let row = document.createElement("div");
    row.className="container";
    for(let j=0; j<colno; j++){
        let col= document.createElement("div");
        col.className="col";
        console.log(col);
        
        row.appendChild(col);
    }
    container.appendChild(row);
}
});

container.addEventListener("mouseover", function(){

    let col= document.getElementsByClassName("col");
    let values=[0,0,0];
    for(let i=0;i<3;i++){
        
       function random(min,max){
        let r=Math.floor(Math.random() * (max - min)) + min;
        return r;
    }
        values[i]=random(0,255);
    }

    
    for(let i=0; i<col.length; i++){
        col[i].addEventListener("mouseover", function(){
            col[i].style.backgroundColor="rgb("+values[0]+","+values[1]+","+values[2]+")";
        });
    }
});



