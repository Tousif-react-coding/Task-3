function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    // Conversion factors
    const metersToFeet = 3.28084;
    const inchesToFeet = 1 / 12;
    const metersToInches = 39.3701;

    let result;

    if (inputUnit === 'meters') {
        if (outputUnit === 'feet') {
            result = inputValue * metersToFeet;
        } else if (outputUnit === 'inches') {
            result = inputValue * metersToInches;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === 'feet') {
        if (outputUnit === 'meters') {
            result = inputValue / metersToFeet;
        } else if (outputUnit === 'inches') {
            result = inputValue / inchesToFeet;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === 'inches') {
        if (outputUnit === 'meters') {
            result = inputValue / metersToInches;
        } else if (outputUnit === 'feet') {
            result = inputValue * inchesToFeet;
        } else {
            result = inputValue;
        }
    }
    try {
        document.getElementById('result').innerText = `Result: ${result.toFixed(20)} ${outputUnit}`;
    
     } catch (error) {
        alert("Invalid Information");
    console.log("Invalid Information");
     }
    //document.getElementById('result').innerText = `Result: ${result.toFixed(20)} ${outputUnit}`;
}