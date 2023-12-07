//FOR NAVIGATION HAMBURGER BUTTON
const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementsByClassName('nav-list');

toggleButton.addEventListener('click', () => {
    for (const element of navList) {
        element.classList.toggle('active');
    }
});

//FOR SLIDER
const wrapperSlider = document.querySelector('.wrapper-slider');
const slider = document.querySelector('.slider');

let clicked = false;
let xAxis;
let x;

wrapperSlider.addEventListener('mouseup', () => {
    wrapperSlider.style.cursor = `grab`;
})
wrapperSlider.addEventListener('mousedown', e => {
    clicked = true
    xAxis = e.offsetX - slider.offsetLeft;
    // current position

    wrapperSlider.style.cursor = `grabbing`
})

window.addEventListener('mouseup', () => {
    clicked = false
})

wrapperSlider.addEventListener('mousemove', e => {
    if (!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`;
    // not scrolling forever

    checkSize()
})

function checkSize() {
    let wrapperSliderOut = wrapperSlider.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
    } else if (sliderIn.right < wrapperSliderOut.right) {
        slider.style.left = `-${sliderIn.width - wrapperSliderOut.width}px`
    }
}