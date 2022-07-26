var count = 0;
var button = document.getElementById("button");
var counter = document.getElementById("count");

button.onclick = function() {
    count++;
    counter.innerHTML = count;
}
