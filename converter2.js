

function convert2() {
    const enterValue = parseFloat(document.getElementById("enterValue").value);
    const selectInput = document.getElementById('inputUnit2').value;
    const selectOutput = document.getElementById("outputUnit2").value;

    const sqmetToSqkilomet = 0.000001; // 1 sqmeter = 0.000001 sqkilometer
    const sqmetsTosqmillimet = 1000000;
    const sqkilometTosqmillimet = 1000000000000;


    if (selectInput === "square meters") {
        if (selectOutput === "square kilometers") {
            result = enterValue * sqmetToSqkilomet;
        } else if (selectOutput === "square millimeters") {
            result = enterValue * sqmetsTosqmillimet;
        } else {
            result = enterValue;
        }
    } else if (selectInput === "square kilometers") {
        if (selectOutput === "square meters") {
            result = enterValue / sqmetToSqkilomet;
        } else if (selectOutput === "square millimeters") {
            result = enterValue * sqkilometTosqmillimet;
        } else {
            result = enterValue;
        }
    } else if (selectInput === "square millimeters") {
        if (selectOutput === "square meters") {
            result = enterValue / sqmetsTosqmillimet;
        } else if (selectOutput === "square kilometers") {
            result = enterValue / sqkilometTosqmillimet;
        } else {
            result = enterValue;
        }
    }

    try {
        document.getElementById('result2').innerText = `Result: ${result.toFixed(20)} ${selectOutput}`;

    } catch (error) {
        alert("Invalid Information");
        console.log("Invalid Information");
    }
    //document.getElementById('result2').innerText = `Result: ${result.toFixed(20)} ${selectOutput}`;

}
