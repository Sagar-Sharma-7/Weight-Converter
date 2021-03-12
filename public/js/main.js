const mainHeading = document.querySelector("#mainHeading");
const btn = document.querySelectorAll(".btn");
const inputField = document.querySelector(".userWeight");
const hiddenItems = document.querySelectorAll("#hide");
const unitName = document.querySelector(".unitName");
const resultContainer = document.querySelector(".resultContainer");
const resultBox = document.querySelectorAll(".resultBox");
const kilograms = document.querySelector(".kilograms");
const grams = document.querySelector(".grams");
const pounds = document.querySelector(".pounds");
const ounces = document.querySelector(".ounces");
const calculateBtn = document.querySelector(".calculateBtn");
const backBtn = document.querySelector(".backBtn");


// static content
mainHeading.textContent = `Type your weight in any unit.`;
kilograms.textContent = `Kilograms`;
grams.textContent = `Grams`;
pounds.textContent = `Pounds`;
ounces.textContent = `Ounces`;
calculateBtn.textContent = `Calculate`;
backBtn.textContent = `Go Back`;


// click function of every button
btn.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Button Clicked");
        
        unitName.innerHTML = button.name;
        
        // hiding all the buttons
        btn.forEach((hideMe) => {
            hideMe.style.display = "none";
        });
        
        // showing the hidden elements
        hiddenItems.forEach((items) => {
            resultContainer.style.display = "flex";
            items.style.display = "block";
        });
    });
});

// white background color of result boxes
whiteBG = () => {
    resultBox.forEach((resultBoxWhite) => {
        resultBoxWhite.style.backgroundColor = "#fff";
    });
};

// kilogram
kilograms.addEventListener("click", () => {
    mainHeading.textContent = `Type your weight in kilograms`;

    calculateBtn.addEventListener("click", () => {
        const userWeightKg = inputField.value;

        whiteBG();
        // showing result
        // grams
        resultBox[0].innerHTML = `${userWeightKg * 1000} gm`;
        //pounds
        resultBox[1].innerHTML = `${userWeightKg * 2.20462} lbs`;
        //ounces
        resultBox[2].innerHTML = `${userWeightKg * 35.274} oz`;
    });
});

// grams
grams.addEventListener("click", () => {
    mainHeading.textContent = `Type your weight in grams`;

    calculateBtn.addEventListener("click", () => {
        const userWeightGm = inputField.value;


        whiteBG();
        // showing result
        // kg
        resultBox[0].innerHTML = `${userWeightGm / 1000} kg`;
        // pounds
        resultBox[1].innerHTML = `${userWeightGm / 454} lbs`;
        // ounces
        resultBox[2].innerHTML = `${userWeightGm / 28.35} oz`;
    });
});

// pounds
pounds.addEventListener("click", () => {
    mainHeading.textContent = `Type your weight in pounds`;

    calculateBtn.addEventListener("click", () => {
        const userWeightLbs = inputField.value;

        whiteBG();
        // showing result
        // kg
        resultBox[0].innerHTML = `${userWeightLbs / 2.20462} kg`;
        //gm
        resultBox[1].innerHTML = `${userWeightLbs * 454} lbs`;
        //ounces
        resultBox[2].innerHTML = `${userWeightLbs * 16} oz`;
    });
});

ounces.addEventListener("click", () => {
    mainHeading.textContent = `Type your weight in ounces`;

    calculateBtn.addEventListener("click", () => {
        const userWeightOz = inputField.value;

        whiteBG();
        // showing result
        // kg
        resultBox[0].innerHTML = `${userWeightOz / 35.274} kg`;
        // gm
        resultBox[1].innerHTML = `${userWeightOz * 28.3} gm`;
        // pounds
        resultBox[2].innerHTML = `${userWeightOz / 16} lbs`
    });
});


backBtn.addEventListener("click", () => {
    location.reload();
});