let count = 0;

function counting(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}

function reset(){
    count = 0;
    document.getElementById("count").innerHTML = count;
}