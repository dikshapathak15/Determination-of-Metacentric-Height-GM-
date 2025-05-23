const scale = document.getElementById("scale");
const level = document.getElementById("level");
const instructions = document.getElementById("ins"); // Get the h1 element

function firstmoveScale() {
  // Move the scale up
  scale.style.transition = "all 1s ease";
  scale.style.transform = "translateY(-200px)";

  setTimeout(() => {
    // Move the scale to the left
    scale.style.transform = "translate(-615px, -100px)";

    setTimeout(() => {
      // Move the scale down and rotate to vertical
      scale.style.transform = "translate(-615px, 5px) rotate(90deg)";

      setTimeout(() => {
        // Simulate measuring water level
        // alert('Measured Water Level: 3/4');
        level.style.display = "block";
        level.textContent = "Water Level: 15 cm that is 3/4 of the container";

        // Hide the level after 5 seconds
        setTimeout(() => {
          level.style.display = "none";
          level.textContent = "";
        }, 5000);

        setTimeout(() => {
          // Move the scale back up
          scale.style.transform = "translate(-200px, -100px) rotate(0deg)";

          setTimeout(() => {
            // Move the scale back to its original position
            scale.style.transform = "translate(0, 0)";

// Change the text of the h1 element after animation is complete
            instructions.textContent = "STEP 2: Place the pontoon in a tank of water carefully till it becomes stable and observe the changes in water level.";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
