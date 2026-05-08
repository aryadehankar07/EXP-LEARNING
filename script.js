// MENU FILTER

const filterButtons = document.querySelectorAll(".filter-buttons button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.innerText;

        menuCards.forEach(card => {

            const tag = card.querySelector(".tag").innerText;

            if(category === "All" || category === tag){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});


// RESERVATION FORM

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Table Reserved Successfully!");

    form.reset();

});


// BOOK TABLE BUTTON

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {

    document.querySelector("#reservation")
    .scrollIntoView({
        behavior: "smooth"
    });

});
