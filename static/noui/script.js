const range = document.getElementById('range');

// Give the slider dimensions
range.style.height = '10px';
range.style.margin = '100px 20px 30px';

// const valuesDivs = [
//     document.getElementById('range-value-1'),
//     document.getElementById('range-value-2'),
//     document.getElementById('range-value-3'),
//     document.getElementById('range-value-4')
// ];
//
// const diffDivs = [
//     document.getElementById('range-diff-1'),
//     document.getElementById('range-diff-2'),
//     document.getElementById('range-diff-3')
// ];

// When the slider value changes, update the input and span
// range.noUiSlider.on('update', function (values, handle) {
//     valuesDivs[handle].innerHTML = values[handle];
//     diffDivs[0].innerHTML = values[1] - values[0];
//     diffDivs[1].innerHTML = values[2] - values[1];
//     diffDivs[2].innerHTML = values[3] - values[2];
// });

noUiSlider.create(range, {

    range: {
        'min': 0,
        'max': 15
    },

    step: 1,

    // Handles start at ...
    start: [2, 5, 8, 12, 15],

    // ... must be at least 300 apart
    margin: 1,

    // ... but no more than 600
    // limit: 600,

    // Display colored bars between handles
    connect: true,

    // Put '0' at the bottom of the slider
    // direction: 'rtl',
    orientation: 'horizontal',

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,
    // format: wNumb({
    //     decimals: 0
    // }),

    padding: 1,

    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
});
