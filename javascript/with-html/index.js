let count = 0;

function increment() {
    count++;
    console.log("CLICK: ", count);
    document.getElementById("count").textContent = count;
}

function reset() {
    count = 0;
    document.getElementById("count").textContent = count;
}

function save() {
    
    document.getElementById("save").textContent += " " + count + " -";
}
