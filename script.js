const tambahanBtn = document.getElementById("tambahanBtn");
const resetBtn = document.getElementById("resetBtn");
const kurangBtn = document.getElementById("kurangBtn");
const demo = document.getElementById("demo");
let hitung =0;

tambahanBtn.onclick = function () {
    demo.innerHTML = hitung++;
    
}

kurangBtn.onclick = function () {
    demo.innerHTML = hitung--;

}

resetBtn.onclick = function() {
    demo.innerHTML =0;
}