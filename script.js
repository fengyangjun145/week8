// DOM Selection: get HTML elements
const bodyElement = document.body;
const randomColorBtn = document.getElementById('randomColorBtn');
const hueSlider = document.getElementById('hueSlider');
const heading = document.getElementById('headingOne');

// 1. Button click event: change background to random color
randomColorBtn.addEventListener('click', function () {
    // generate random hex color code
    const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    bodyElement.style.backgroundColor = randomHexColor;
});

// 2. Slider input event: change background color by hue value
hueSlider.addEventListener('input', function () {
    const hueValue = hueSlider.value;
    // use HSL color format: hsl(hue, saturation, lightness)
    bodyElement.style.backgroundColor = `hsl(${hueValue}, 70%, 60%)`;
});

// Example: Modify heading text with innerHTML
// heading.innerHTML = "DOM Practice Completed";

// Example: Modify heading css style
// heading.style.fontSize = "48px";
// heading.style.color = "white";