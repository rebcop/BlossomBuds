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

    let colNum = 2;

    // change string values to number
    blossomValue = parseInt(blossomValue);
    budsValue = parseInt(budsValue);
    startValue = parseInt(startValue);
    stopValue = parseInt(stopValue);


    if (Number.isInteger(blossomValue) && Number.isInteger(budsValue) && Number.isInteger(startValue) && Number.isInteger(stopValue) && stopValue > startValue) {

        let blossomBuds = generateBlossomBuds(blossomValue, budsValue, startValue, stopValue, colNum);

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
function generateBlossomBuds(blossomValue, budsValue, startValue, stopValue, colNum) {

    // array to hold values
    let blossomBuds = [];
    let blossomBudsRow = [];
    let countCol = 1;
    
    // generate the numbers 1-100 replacing values respectively
    for (let n = startValue; n <= stopValue; n++) {

            if ( n % blossomValue == 0 && n % budsValue == 0 ) {

                // Add 'BlossomBuds' instead of number
                blossomBudsRow.push('BlossomBuds');
    
            } else if ( n % blossomValue == 0) {
    
                // Add 'Blossom' instead of number
                blossomBudsRow.push('Blossom');

    
            } else if ( n % budsValue == 0 ) {
    
                // Add 'Buds' instead of number
                blossomBudsRow.push('Buds');

            } else {
                
                // Add number
                blossomBudsRow.push(n);
            }

            
            if (countCol == colNum) {
                countCol = 1;
                blossomBuds.push(blossomBudsRow);
                blossomBudsRow = [];

            } else if (n == stopValue)  {
                blossomBuds.push(blossomBudsRow);
            } else {
                countCol++;
            }
        
    }

    return blossomBuds;

}

// display the BlossomBuds on the page
function displayBlossomBuds(blossomBuds) {

    // declare variables
    let blossomBudsHtml = '';
    
    let className = '';

    // loop over array to add values in array to html
    // check if value is 'BlossomBuds' change class to 'blossom-buds' & add html cell contents
    // if value is 'Blossom' change class to 'blossom' & add html cell contents
    // if value is 'buds' change class to 'buds' & add html cell contents

    for (let row = 0; row < blossomBuds.length; row++) {

        let blossomBudsHtmlRow = '';

        for (let col = 0; col < blossomBuds[row].length; col++) {

            if ( blossomBuds[row][col] == 'BlossomBuds') {

                // specify class name for cells with 'BlossomBuds' value
                className = 'blossom-buds';
    
                // specify value of cell along with additional html needed for cell
                blossomBudsCellHtml = `<i class="bi bi-flower3"></i>${blossomBuds[row][col]}<i class="bi bi-flower3"></i>`;
    
            } else if ( blossomBuds[row][col] == 'Blossom' ) {
    
                // specify class name for cells with 'Blossom' value
                className = 'blossom';
    
                // specify value of cell along with additional html needed for cell
                blossomBudsCellHtml = blossomBuds[row][col];
    
            } else if ( blossomBuds[row][col] == 'Buds' ) {
    
                // specify class name for cells with 'Buds' value
                className = 'buds';
    
                // specify value of cell along with additional html needed for cell
                blossomBudsCellHtml = blossomBuds[row][col];
    
            } else {
    
                // specify class name for all other cells
                className = '';
    
                // specify value of cell along with additional html needed for cell
                blossomBudsCellHtml = blossomBuds[row][col];
            }

            blossomBudsHtmlRow += `<td class="${className}">${blossomBudsCellHtml}</td>`;

        }

        blossomBudsHtml += `<tr>${blossomBudsHtmlRow}</tr>`;

    }

    // get the innerHTML of the element we want to put it in and update it
    document.getElementById('results').innerHTML = blossomBudsHtml;

}