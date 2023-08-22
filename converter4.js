function convert4() {
    const enterValue3 = parseFloat(document.getElementById('enterValue3').value);
    const selectInput3 = document.getElementById('inPutunit4').value;
    const selectOutput3 = document.getElementById('outPutunit4').value;


    //conversion factor;
    const degCtodegF = 1.8;
    const degCtoKelvin = 273.15;
    const degFtoKelvin = 255.37222222222;


    let result;
    if (selectInput3 === "degcelsius") {
        if (selectOutput3 === "degfahrenheit") {
            result = (enterValue3 * degCtodegF + 32);

        } else if (selectOutput3 === "kelvin") {
            result = enterValue3 + degCtoKelvin

        } else {
            result = enterValue3;
        }


    } else if (selectInput3 === "degfahrenheit") {
        if (selectOutput3 === "degcelsius") {
            result = (enterValue3 - 32) / degCtodegF;

        } else if (selectOutput3 === "kelvin") {
            result = (enterValue3 + degFtoKelvin) * degCtodegF;
        } else {
            result = enterValue3;
        }

    } else if (selectInput3 === "kelvin") {
        if (selectOutput3 === "degcelsius") {
            result = enterValue3 - degCtoKelvin;
        } else if (selectOutput3 === "degfahrenheit") {
            result = (enterValue3 / degCtodegF) - degFtoKelvin;
        } else {
            result = enterValue3;
        }
       
    }
 try {
    document.getElementById('result4').innerText = `Result: ${result.toFixed(20)} ${selectOutput3}`;

 } catch (error) {
    alert("Invalid Information");
console.log("Invalid Information");
 }

}


