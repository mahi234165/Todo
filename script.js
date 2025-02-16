// counter App
document.addEventListener("counter",init);

let count=Number(sessionStorage.getItem("count"))|| 0;

function init(){

    document.getElementById("count").textContent = count;

}
function Increasecount(){
    count++;
    updateCount();

}
function Decreasecount(){
    count--;
    updateCount();


}
function ResetCount(){
    count = 0 ;
    updateCount();

}
function updateCount(){
    document.getElementById("count").textContent = count;
    sessionStorage.setItem("count",count);
}
