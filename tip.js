function calculate() {
    const total = parseFloat(document.getElementById("Total").value);
    const tipInput = document.getElementById("Tip").value;
    const n = parseInt(document.getElementById("People").value);
    const tip = parseFloat(tipInput.replace(/[^\d.]/g,""));
    if(isNaN(total) || isNaN(tip) || isNaN(n) || n <= 0) {
        alert("Please enter valid inputs");
        return;
    }
    let percent = total*(tip/100);
    let output = percent / n;
    alert(`The amount of tip to be paid among ${n} persons is Rs.${output}`);
}