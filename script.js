window.onload = function () {
    var video = document.getElementById("bg-video");
    var smallScreen = window.matchMedia("(max-width: 481px)");

    function changeVideo() {
        if (smallScreen.matches) {
            video.src = "./media/small-video.mp4";
            video.style.width = "100vw";
            video.style.objectFit = "cover";
        } else {
            video.src = "./media/GBMwExqH3-Jm_zoBANLr3ON9r09AbmdjAAAF.mp4";
        }
    }

    changeVideo();

    smallScreen.addListener(changeVideo);
}

const navLeft = document.querySelector(".left");
const navRightBtn = document.querySelector(".right"); // Rename the variable to avoid conflict

const images = document.querySelector(".images");
const colors = document.querySelector(".colored-backgrounds");

let index = 0;

function rightClick() { // Rename the function to avoid conflict
    transform((index = index < 3 ? ++index : 0));
}

function left() {
    transform((index = index > 0 ? --index : 3));
}

navLeft.addEventListener("click", left);
navRightBtn.addEventListener("click", rightClick); // Update the event listener to use the renamed function

function transform(index) {
    images.style.transform = `translateX(-${index * 100}%)`;
    colors.style.transform = `translateX(-${index * 100}%)`;
}


document.addEventListener('DOMContentLoaded', function() {
    // Array of objects containing image names, tastes, and descriptions
    const contentArray = [
        { name: 'Maxx Power', taste:'Original', description: 'Ingredients: water, sugar, carbon dioxide, acidity regulator: Е330, Е331, flavors identical to natural, including caffeine, glucuronolactone, taurine: 30mg / 100ml, dye: E150d, inositol, preservatives: E211, E202, vitamins: B3, B5, B6, B2, B12.' },
        { name: 'Maxx Power', taste:'Black', description: "Ingredients: water, carbon dioxide, acidity regulators (E330, E331), sweetener “multisweet” (E952), (E954), (E950), aspartame, flavorings (identical to natural, natural including caffeine), glucuronolactone, taurine 30 mg, 100 ml, dye (E150d), inositol, preservatives (E211, E202), vitamins (B3, B5, B6, B2, B12)."},
        { name: 'Maxx Power', taste:'Red', description: 'Ingredients: water, carbon dioxide, acidity regulators (E330, E331), sweetener “multisweet” (E952), (E954), (E950), aspartame, flavorings (identical to natural, natural including caffeine), glucuronolactone, taurine 30 mg, 100 ml, dye (E150d), inositol, preservatives (E211, E202), vitamins (B3, B5, B6, B2, B12).' },
        { name: 'Maxx Power', taste:'Mojito', description: 'Ingredients: water, carbon dioxide, acidity regulators (E330, E331), sweetener “multisweet” (E952), (E954), (E950), aspartame, flavorings (identical to natural, natural including caffeine), glucuronolactone, taurine 30 mg, 100 ml, dye (E150d), inositol, preservatives (E211, E202), vitamins (B3, B5, B6, B2, B12).' }
    ];

    // Function to update content based on current index
    function updateContent(index) {
        let heading = document.querySelector('.heading h1');
        let tasteHeading = document.querySelector('.heading h2');
        let paragraph = document.querySelector('.heading p');

        heading.textContent = contentArray[index].name;
        tasteHeading.textContent = contentArray[index].taste;
        paragraph.textContent = contentArray[index].description;
    }

    // Initialize index
    var currentIndex = 0;
    updateContent(currentIndex);

    // Function to handle right click
    function right() {
        currentIndex = (currentIndex + 1) % contentArray.length;
        updateContent(currentIndex);
    }

    // Function to handle left click
    function left() {
        currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length;
        updateContent(currentIndex);
    }

    // Add event listeners to navigation buttons
    var navLeft = document.querySelector(".left");
    var navRightBtn = document.querySelector(".right"); // Rename the variable to avoid conflict

    navLeft.addEventListener("click", left);
    navRightBtn.addEventListener("click", right); // Update the event listener to use the renamed function
});
