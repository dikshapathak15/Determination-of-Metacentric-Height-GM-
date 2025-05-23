const pontoon = document.getElementById("pontoon");
const level1 = document.getElementById("level1"); // Ensure this exists in your HTML
const ins = document.getElementById("ins"); // Ensure this exists in your HTML
const watertank = document.getElementById("watertank"); // Ensure this exists in your HTML

function movePontoon() {
  // Move the pontoon upward
  pontoon.style.transition = "all 1s ease";
  pontoon.style.transform = "translateY(-200px)";

  setTimeout(() => {
    // Move the pontoon to the left
    pontoon.style.transform = "translate(-500px, -100px)";

    setTimeout(() => {
      // Place the pontoon inside the water tank
      pontoon.style.transition = "none"; // Temporarily disable transitions
      pontoon.style.transform = "translate(-500px, -100px)";

      // Simulate water level rise
      setTimeout(() => {
        level1.style.display = "block";
        level1.textContent = "Water Level: 18 cm";

        setTimeout(() => {
          level1.style.display = "none";
          level1.textContent = "";
        }, 5000);

        // Oscillate the pontoon
        oscillatePontoon();

        // Change the instruction text after completion
        setTimeout(() => {
          ins.textContent = "STEP 3: Calculate amount of water displaced";
         
          setTimeout(() => {
               // Fade out the scale
    const scale = document.getElementById("scale");
    if (scale) {
      scale.style.transition = "opacity 0.5s ease";
      scale.style.opacity = "0";
      setTimeout(() => {
        scale.remove();

        // Update the instruction
        ins.textContent = "STEP 4: A known weight (w) is placed on the model or hang, ensuring it's initially stable without any oscillations";

        // Move pontoon and watertank
        pontoon.style.transition = "all 1s ease";
        watertank.style.transition = "all 1s ease";
        pontoon.style.transform = "translate(-468px, -100px)";
        watertank.style.transform = "translate(5px, 0)";

        // Make the image visible
        setTimeout(() => {
          const hiddenImage = document.getElementById("weight");
          if (hiddenImage) {
            hiddenImage.style.opacity = "1"; // Fade in the image
          }
        }, 1000); // Delay after watertank animation
      }, 500); // Match the CSS transition duration for scale fade-out
    }
          },1000)
        }, 1000); // Wait until the oscillation finishes

        setTimeout(() => {
          // Stabilize the pontoon and water level
          pontoon.style.transition = "all 0.5s ease";
          pontoon.style.transform = "translate(-500px, -100px)";
          level1.style.transform = "translateY(-20px)"; // Adjust based on your layout

          // Show the calculator after stabilization
          // showCalculator();
        }, 1200); // Oscillation duration
      }, 1000);
    }, 1000);
  }, 1000);
}

function oscillatePontoon() {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count % 2 === 0) {
      pontoon.style.transform = "translate(-500px, -110px)"; // Upward oscillation
    } else {
      pontoon.style.transform = "translate(-500px, -120px)"; // Downward oscillation
    }
    if (count >= 6) {
      clearInterval(interval); // Stop oscillation after 1 second (6 oscillations)
    }
  }, 166); // 166ms per oscillation (6 times in ~1 second)
}

function showCalculator() {
  // Create the calculator dynamically
  const calculator = document.createElement("div");
  calculator.id = "calculator";
  calculator.style = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #f0f8ff;
    border: 2px solid #007BFF;
    border-radius:10px;
    padding: 15px;
    width: 300px;
    font-family: Arial, sans-serif;
  `;
  calculator.innerHTML = `
  <h3 style="margin-bottom: 15px;">Calculate Water Displaced</h3>
  <form id="displacementForm">
    <label style="display: block; margin-bottom: 10px;">Initial Length (cm): <input type="number" id="initialLength" required></label>
    <label style="display: block; margin-bottom: 10px;">Initial Breadth (cm): <input type="number" id="initialBreadth" required></label>
    <label style="display: block; margin-bottom: 10px;">Initial Height (cm): <input type="number" id="initialHeight" required></label>
    <label style="display: block; margin-bottom: 10px;">Final Length (cm): <input type="number" id="finalLength" required></label>
    <label style="display: block; margin-bottom: 10px;">Final Breadth (cm): <input type="number" id="finalBreadth" required></label>
    <label style="display: block; margin-bottom: 10px;">Final Height (cm): <input type="number" id="finalHeight" required></label>
    <button type="submit" style="display: inline-block; margin-right: 10px; padding: 5px 10px;">Calculate</button>
    <button type="button" id="finishBtn" style="display: inline-block; padding: 5px 10px;">Finish</button>
  </form>
  <p id="result"></p>
`;
  document.body.appendChild(calculator);

  const form = document.getElementById("displacementForm");
  const result = document.getElementById("result");
  const finishBtn = document.getElementById("finishBtn");

  form.onsubmit = function (e) {
    e.preventDefault();

    // Get input values
    const initialLength = parseFloat(document.getElementById("initialLength").value);
    const initialBreadth = parseFloat(document.getElementById("initialBreadth").value);
    const initialHeight = parseFloat(document.getElementById("initialHeight").value);

    const finalLength = parseFloat(document.getElementById("finalLength").value);
    const finalBreadth = parseFloat(document.getElementById("finalBreadth").value);
    const finalHeight = parseFloat(document.getElementById("finalHeight").value);

    // Calculate volumes
    const initialVolume = initialLength * initialBreadth * initialHeight;
    const finalVolume = finalLength * finalBreadth * finalHeight;

    // Calculate displaced water
    const displacedWater = finalVolume - initialVolume;

    // Display result
    result.textContent = `Displaced Water: ${displacedWater.toFixed(2)} cm³`;
  };

  finishBtn.onclick = () => {
  calculator.style.opacity = "0";
  setTimeout(() => {
    calculator.remove();

    // Fade out the scale
    const scale = document.getElementById("scale");
    if (scale) {
      scale.style.transition = "opacity 0.5s ease";
      scale.style.opacity = "0";
      setTimeout(() => {
        scale.remove();

        // Update the instruction
        ins.textContent = "STEP 4: A known weight (w) is placed on the model or hang, ensuring it's initially stable without any oscillations";

        // Move pontoon and watertank
        pontoon.style.transition = "all 1s ease";
        watertank.style.transition = "all 1s ease";
        pontoon.style.transform = "translate(-468px, -100px)";
        watertank.style.transform = "translate(-200px, 0)";

        // Make the image visible
        setTimeout(() => {
          const hiddenImage = document.getElementById("hiddenImage");
          if (hiddenImage) {
            hiddenImage.style.opacity = "1"; // Fade in the image
          }
        }, 1000); // Delay after watertank animation
      }, 500); // Match the CSS transition duration for scale fade-out
    }
  }, 500);
};

}

// Add the event listener to start the process
pontoon.addEventListener("click", movePontoon);
