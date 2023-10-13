// get values from user input
function getValues() {

    // get Blossom Value
    let blossomValue = document.getElementById('blossomValue').value;

    // get Buds Value
    let budsValue = document.getElementById('budsValue').value;

    // get Start Value
    let startValue = document.getElementById('startValue').value;

    // get Stop Value 
    let stopValue = document.getElementById('stopValue').value;

    // change string values to number
    blossomValue = parseInt(blossomValue);
    budsValue = parseInt(budsValue);
    startValue = parseInt(startValue);
    stopValue = parseInt(stopValue);


    if (Number.isInteger(blossomValue) && Number.isInteger(budsValue) && Number.isInteger(startValue) && Number.isInteger(stopValue) && stopValue > startValue) {

        let blossomBuds = generateBlossomBuds(blossomValue, budsValue, startValue, stopValue);

        displayBlossomBuds(blossomBuds);

    } else {
        // Uh oh! Something is wrong
        Swal.fire ({
            icon: 'error',
            bakcdrop: false,
            title: 'Oops!',
            text: 'Please enter valid integers'
        })

    }

}

// generate the numbers 1-100
// if number divisible by both values display 'BlossomBuds'
// else if number divisible by Blossom Value display 'Blossom'
// else if number divisible by Buds Value display 'Buds'
// else add number
function generateBlossomBuds(blossomValue, budsValue, startValue, stopValue) {

    // array to hold values
    let blossomBuds = [];

    // generate the numbers 1-100 replacing values respectively
    for (let n = startValue; n <= stopValue; n++) {

        if ( n % blossomValue == 0 && n % budsValue == 0 ) {

            // Add 'BlossomBuds' instead of number
            blossomBuds.push('BlossomBuds');

        } else if ( n % blossomValue == 0) {

            // Add 'Blossom' instead of number
            blossomBuds.push('Blossom');

        } else if ( n % budsValue == 0 ) {

            // Add 'Buds' instead of number
            blossomBuds.push('Buds');

        } else {
            
            // Add number
            blossomBuds.push(n);
        }

    }

    return blossomBuds;

}

// display the BlossomBuds on the page
function displayBlossomBuds(blossomBuds) {

    // declare variables
    let blossomBudsHtml = '';
    let className = '';
    let blossomBudsCellHtml = '';

    // loop over array to add values in array to html
    // check if value is 'BlossomBuds' change class to 'blossom-buds' & add html cell contents
    // if value is 'Blossom' change class to 'blossom' & add html cell contents
    // if value is 'buds' change class to 'buds' & add html cell contents

    for (i = 0; i < blossomBuds.length; i++) {

        if ( blossomBuds[i] == 'BlossomBuds') {

            // specify class name for cells with 'BlossomBuds' value
            className = 'blossom-buds';

            // specify value of cell along with additional html needed for cell
            blossomBudsCellHtml = `<i class="bi bi-flower3"></i>${blossomBuds[i]}<i class="bi bi-flower3"></i>`;

        } else if ( blossomBuds[i] == 'Blossom' ) {

            // specify class name for cells with 'Blossom' value
            className = 'blossom';

            // specify value of cell along with additional html needed for cell
            blossomBudsCellHtml = blossomBuds[i];

        } else if ( blossomBuds[i] == 'Buds' ) {

            // specify class name for cells with 'Buds' value
            className = 'buds';

            // specify value of cell along with additional html needed for cell
            blossomBudsCellHtml = blossomBuds[i];

        } else {

            // specify class name for all other cells
            className = '';

            // specify value of cell along with additional html needed for cell
            blossomBudsCellHtml = blossomBuds[i];
        }

        blossomBudsHtml += `<tr><td class="${className}">${blossomBudsCellHtml}</td></tr>`;

    }

    
    
    // get the innerHTML of the element we want to put it in and update it
    document.getElementById('results').innerHTML = blossomBudsHtml;

}