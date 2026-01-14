function getResult() {
    const symbol = document.getElementById("symbolNumber").value.trim();

    if (symbol === "") {
        alert("Please enter your Symbol Number.");
        return;
    }

    // Generate GPA between 3.30 and 3.60 (2 decimals)
    const gpa = (Math.random() * (3.60 - 3.30) + 3.30).toFixed(2);

    document.getElementById("resSymbol").innerText = symbol;
    document.getElementById("resGPA").innerText = gpa;

    document.getElementById("result").classList.remove("hidden");
}