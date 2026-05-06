// ===== MENU FILTER FUNCTION =====
function filterMenu(category) {
    let items = document.querySelectorAll(".card");
    let buttons = document.querySelectorAll(".menu-buttons button");

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add active class to clicked button
    event.target.classList.add("active");

    // Filter logic
    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } 
        else if (item.classList.contains(category)) {
            item.style.display = "block";
        } 
        else {
            item.style.display = "none";
        }
    });
}


// ===== FORM SUBMIT FUNCTION =====
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = form.querySelector("input[type='text']").value;
        let email = form.querySelector("input[type='email']").value;

        if (name === "" || email === "") {
            alert("Please fill all details!");
        } else {
            alert("Reservation Confirmed, " + name + " 🎉");
            form.reset();
        }
    });

});