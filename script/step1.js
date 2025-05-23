document.getElementById("start").onclick = function () {
    const level1 = document.getElementById("level1");
    const ins = document.getElementById("ins");
    const startbutton = document.getElementById("start");


    // Dynamically set the position and styles for level1
    level1.style.position = "absolute";
    level1.style.bottom = "300px"; // Set distance from the bottom of its container
    level1.style.left = "55%";   // Center horizontally
    level1.style.transform = "translateX(-50%)"; // Center the element
    level1.style.width = "400px"; // Increase width
    level1.style.height = "100px"; // Increase height
    level1.style.textAlign = "center"; // Center text
    level1.style.display = "flex"; // Flexbox for vertical centering
    level1.style.alignItems = "center"; // Center items vertically
    level1.style.justifyContent = "center"; // Center items horizontally
    level1.style.letterSpacing = "2px"; // Add space between letters

    if(ins.innerHTML=="Instruction: Click on the start button"){
    // Display the text in level1
    level1.style.display = "block";
    level1.textContent = "Determination of metacentric Height(GM)";

    // Hide level1 and reset the instruction text after 3 seconds
    setTimeout(() => {
        level1.style.display = "none";
        ins.textContent = "STEP 1: Click on the scale and measure the level of water.";
        startbutton.style.visibility="hidden";
    }, 3000); // 3000 milliseconds = 3 seconds
    }
};
