// createElement
// classList
// textContent
// appendChild




// get input values from the user
function getValues() {

    // get the Blossom Value input
    let blossomValue = document.getElementById('blossomValue').value; // gets value as a string

    // get the Buds Value input
    let budsValue = document.getElementById('budsValue').value; // gets value as a string

    // get the Start Value input
    let startValue = document.getElementById('startValue').value; // gets value as a string

    // get the Stop Value input
    let stopValue = document.getElementById('stopValue').value; // gets value as a string

    // change all string inputs to numbers
    blossomValue = parseInt(blossomValue);
    budsValue = parseInt(budsValue);
    startValue = parseInt(startValue);
    stopValue = parseInt(stopValue);

    // check if inputs recieved are what is expected
    if ( Number.isInteger(blossomValue) && Number.isInteger(budsValue) 
        && Number.isInteger(startValue) && Number.isInteger(stopValue) 
        && startValue <= stopValue && startValue >= -9999 
        && stopValue <= 9999 ) {
        
        // get generated values based on inputs
        let generatedValues = generateValues(blossomValue, budsValue, startValue, stopValue);
        
        displayValues(generatedValues);
    } else {
        // Something is wrong
        Swal.fire ({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter valid integers, with a Stop Value less than the Start Value. \
                Start and Stop Values can only be between and including -9,999 and 9,999.',
            confirmButtonColor: '#cd6a6a'
        })
    }

}

// generate values based on the input from user
function generateValues(blossomValue, budsValue, startValue, stopValue) {

    // declare variable to hold generated values
    let generatedValues = [];

    // generate values from stopValue to startValue
    for (let n = startValue; n <= stopValue; n++) {
        
        // check each value
        // if value is a multiple of blossomValue and budsValue
        if (n % blossomValue == 0 && n % budsValue == 0) {

            // add "BlossomBuds" to the array
            generatedValues.push('BlossomBuds');

        // if value is a multiple of blossomValue
        } else if ( n % blossomValue == 0) {

            // add "Blossom" to the array
            generatedValues.push('Blossom');

        // if value is a multiple of budsValue
        } else if ( n % budsValue == 0 ) {

            // add "Buds" into array
            generatedValues.push('Buds');

        } else {
            // value into array
            generatedValues.push(n);

        }

    } 

    return generatedValues;

}

// display values back to user
function displayValues(generatedValues) {

    // declare variable to hold content to be displayed
    let blossomBudsHtml = '';


    // Add each generated value with html needed to make cols to blossomBudsHtml
    for (let i = 0; i < generatedValues.length; i++) {

        // declare variable for styling element as needed
        let styleClass = '';

        // if value is 'BlossomBuds' assign class 'blossom-buds'
        if ( generatedValues[i] == 'BlossomBuds') {

            styleClass = 'blossom-buds';

            generatedValues[i] = `<span>Buds</span><i class="bi bi-flower3"></i>`;

        // if value is 'Blossom' assign class 'blossom'
        } else if ( generatedValues[i] == 'Blossom' ) {

            styleClass = 'blossom';

            generatedValues[i] = `<i class="bi bi-flower3"></i>`;

            // if value is 'Buds' assign class 'buds'
        } else if ( generatedValues[i] == 'Buds' ) {

            styleClass = 'buds';

        // for everything else assign class 'number'
        } else {

            styleClass = 'number';

        }

        blossomBudsHtml += `<div class="col-1 mx-1 d-flex justify-content-center \
                            align-items-center ${styleClass}">${generatedValues[i]}</div>`;

    }

    // reassign contents of HTML to generatedValues with HTML accordingly
    document.getElementById('results').innerHTML = blossomBudsHtml;

}