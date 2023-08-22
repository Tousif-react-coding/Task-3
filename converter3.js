function convert3() {
    const enterValue2 = parseFloat(document.getElementById('enterValue2').value);
    const selectInput2 = document.getElementById('inPutunit3').value;
    const selectOutput2 = document.getElementById('outPutunit3').value;

    // Conversion factors;
    const gramToKilogram = 1000;
    const kilogramToTone = 0.001;
    const gramToTone = 0.000001;
    const gramToPound = 0.0022046226;
    const kiloToPound = 2.2046226;
    const toneToPound = 2204.6226;

    let result;

    if (selectInput2 === "gram") {
        if (selectOutput2 === "kilogram") {
            result = enterValue2 * gramToKilogram;
        } else if (selectOutput2 === "tone") {
            result = enterValue2 * gramToTone;
        } else if (selectOutput2 === "pound") {
            result = enterValue2 * gramToPound;
        } else {
            result = enterValue2;
        }
    } else if (selectInput2 === "kilogram") {
        if (selectOutput2 === "gram") {
            result = enterValue2 / gramToKilogram;
        } else if (selectOutput2 === "tone") {
            result = enterValue2 * kilogramToTone;
        } else if (selectOutput2 === "pound") {
            result = enterValue2 * kiloToPound;
        } else {
            result = enterValue2;
        }
    } else if (selectInput2 === "pound") {
        if (selectOutput2 === "gram") {
            result = enterValue2 / gramToPound;
        } else if (selectOutput2 === "kilogram") {
            result = enterValue2 * kiloToPound;
        } else if (selectOutput2 === "tone") {
            result = enterValue2 / toneToPound;
        } else {
            result = enterValue2;
        }
    } else if (selectInput2 === "tone") {
        if (selectOutput2 === "gram") {
            result = enterValue2 / gramToTone;
        } else if (selectOutput2 === "kilogram") {
            result = enterValue2 / kilogramToTone;
        } else if (selectOutput2 === "pound") {
            result = enterValue2 * toneToPound;
        } else {
            result = enterValue2;
        }
    } else {
    
        result = "Invalid input";
    }

    try {
        document.getElementById('result3').innerText = `Result: ${result.toFixed(20)} ${selectOutput2}`;

    } catch (error) {
        alert("Invalid Information");
        console.log("Invalid Information");
    }
    //document.getElementById('result3').innerText = `Result: ${result.toFixed(20)} ${selectOutput2}`;

}
