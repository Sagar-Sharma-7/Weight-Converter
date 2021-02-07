


// kilograms
kg = () => {
    document.getElementById("gm").style.display = 'none';
    document.getElementById("pd").style.display = 'none';
    document.getElementById("oc").style.display = 'none';
    document.getElementById("reset-1").style.display = 'block';
    document.getElementById("inputField").style.display = 'flex';
    document.getElementById("basic-addon2").innerHTML = "Kilograms";

    weightConverter1 = (x) => {
      document.getElementById("result1").innerHTML = "Grams: " + x * 1000 + "<br>" + "Pounds: " + x * 2.2046 + "<br>" + "Ounces: " + x * 35.274;
    
    }
};

// grams
gm = () => {
    document.getElementById("kg").style.display = 'none';
    document.getElementById("pd").style.display = 'none';
    document.getElementById("oc").style.display = 'none';
    document.getElementById("reset-1").style.display = 'block';
    document.getElementById("inputField").style.display = 'flex';
    document.getElementById("basic-addon2").innerHTML = "Grams";

    weightConverter1 = (x) => {
        document.getElementById("result1").innerHTML = "Kilograms: " + x / 1000 + "<br>" + "Pounds: " + x * 0.0022046 + "<br>" + "Ounces: " + x * 0.035274;
      
      }
};

// Pounds
pd = () => {
    document.getElementById("gm").style.display = 'none';
    document.getElementById("kg").style.display = 'none';
    document.getElementById("oc").style.display = 'none';
    document.getElementById("reset-1").style.display = 'block';
    document.getElementById("inputField").style.display = 'flex';
    document.getElementById("basic-addon2").innerHTML = "Pounds";

    weightConverter1 = (x) => {
        document.getElementById("result1").innerHTML = "Kilograms: " + x / 2.2046 + "<br>" + "Grams: " + x / 0.0022046 + "<br>" + "Ounces: " + x * 16;
      
      }
};

// Ounces
oc = () => {
    document.getElementById("gm").style.display = 'none';
    document.getElementById("kg").style.display = 'none';
    document.getElementById("pd").style.display = 'none';
    document.getElementById("reset-1").style.display = 'block';
    document.getElementById("inputField").style.display = 'flex';
    document.getElementById("basic-addon2").innerHTML = "Ounces";

    weightConverter1 = (x) => {
        document.getElementById("result1").innerHTML = "Kilograms: " + x / 35.275 + "<br>" + "Grams: " + x / 0.035274 + "<br>" + "Pounds: " + x * 0.0625;
      
      }
};




reset = () => {
   location.reload();
}