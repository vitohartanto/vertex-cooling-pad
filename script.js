//NAVIGATION HAMBURGER BUTTON FEATURE
const toggleButton = document.getElementById("toggle-button");
const navList = document.getElementsByClassName("nav-list");

toggleButton.addEventListener("click", () => {
  for (const element of navList) {
    element.classList.toggle("active");
  }
});

//DRAGGABLE SLIDER FEATURE
const wrapperSlider = document.querySelector(".wrapper-slider");
const slider = document.querySelector(".slider");

let clicked = false;
let xAxis;
let x;

wrapperSlider.addEventListener("mouseup", () => {
  wrapperSlider.style.cursor = `grab`;
});

// This line calculates the horizontal distance between the mouse click position (e.offsetX) and the left edge of the slider (slider.offsetLeft)
wrapperSlider.addEventListener("mousedown", (e) => {
  clicked = true;
  // current position
  xAxis = e.offsetX - slider.offsetLeft;
  wrapperSlider.style.cursor = `grabbing`;
});

window.addEventListener("mouseup", () => {
  clicked = false;
});

wrapperSlider.addEventListener("mousemove", (e) => {
  if (!clicked) return; // If clicked is false, exit the function
  e.preventDefault(); // Prevent default behavior of mousemove event

  x = e.offsetX; // Get the horizontal position of the mouse cursor relative to the target element
  slider.style.left = `${x - xAxis}px`; // Adjust the position of the slider element based on mouse movement

  checkSize();
});

function checkSize() {
  let wrapperSliderOut = wrapperSlider.getBoundingClientRect(); // Get the dimensions and position of the wrapperSlider element relative to the viewport
  let sliderIn = slider.getBoundingClientRect(); // Get the dimensions and position of the slider element relative to the viewport

  // If the left position of the slider is greater than 0 (scrolling beyond left boundary)
  if (parseInt(slider.style.left) > 0) {
    slider.style.left = `0px`; // Set the left position of the slider to 0
  }
  // If the right edge of the slider is less than the right edge of the wrapperSlider (scrolling beyond right boundary)
  else if (sliderIn.right < wrapperSliderOut.right) {
    slider.style.left = `-${sliderIn.width - wrapperSliderOut.width}px`; // Adjust the left position of the slider to keep it within the boundaries// Adjust the left position of the slider to keep it within the boundaries
  }
}
