import { getResistorOhms } from './resistor.js';

let bands = {
    color1: 'red',
    color2: 'green',
    multiplier: 'violet',
    tolerance: 'gold'
};

// Element for 'Resistor value' string
const textOutput = document.getElementsByClassName('answer')[0];
// Resistor container
const resistor = document.getElementsByClassName('resistor')[0];
//console.log(resistor);

// All color containers
const containers = document.querySelectorAll('.container');
// Add event listener to each container
containers.forEach(item => {
    item.addEventListener('click', e => {
      //console.log('Clicked container.')

      // Get all classes (should be 'box' and color)
      const classes = e.target.classList;

      if (classes.contains('box') && classes.length == 2)
      {
        const color = classes.item(1);
        const parent = e.target.parentNode;
        // 'color#' -> pull out the #:
        const bandID = parent.id.slice(5)
        // Get the element with id 'b#'
        const ceramicBand = resistor.querySelector('#b' + bandID);
        // Previou color
        const bandColor = ceramicBand.classList.item(1);
        // Remove previous color
        ceramicBand.classList.remove(bandColor);
        // Add current color
        ceramicBand.classList.add(color);

        // Set the appropriate field in the color object
        switch(+bandID) {
            case 0:
                //console.log('Band 1');
                bands.color1 = color;                
                break;
            case 1:
                //console.log('Band 2');
                bands.color2 = color;
                break;
            case 2:
                //console.log('Multiplier');
                bands.multiplier = color;
                break;
            case 3:
                //console.log('Tolerance');
                bands.tolerance = color;
                break;
        }
        // Display the calculated value
        textOutput.textContent = getResistorOhms(bands);
      }
    });
  });