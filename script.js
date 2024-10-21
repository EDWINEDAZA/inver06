var estado = "";
var temperatura = Math.round(Math.random() * (40 - 15) + parseInt(15));
var humedad = Math.round(Math.random() * (100 - 10) + parseInt(10));
var ph = Math.round(Math.random() * (14 - 0) + parseInt(0)); // Nueva variable pH

var t, h, pHStatus;

if (14 < temperatura && temperatura <= 20) {
    t = "Temperatura Baja";
} else if (20 < temperatura && temperatura <= 35) {
    t = "Temperatura Normal";
} else if (temperatura > 35) {
    t = "Temperatura Alta";
}

if (10 < humedad && humedad <= 40) {
    h = "Humedad Baja";
} else if (40 < humedad && humedad <= 80) {
    h = "Humedad Normal";
} else if (humedad > 80) {
    h = "Humedad Alta";
}

if (ph < 7) {
    pHStatus = "pH Ácido";
} else if (ph === 7) {
    pHStatus = "pH Neutro";
} else {
    pHStatus = "pH Alcalino";
}

document.getElementById('hablar').addEventListener("click", () => {
    decir(document.getElementById("texto").value);
});

document.getElementById('datos').addEventListener("click", () => {
    leer_datos(temperatura, humedad, ph);
});

function decir(texto) {
    var idioma = document.getElementById('idioma').value;
    var utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = idioma;
    speechSynthesis.speak(utterance);
}

function leer_datos(temperatura, humedad, ph) {
    var idioma = document.getElementById('idioma').value;
    var texto = "";

    if (idioma === "es-ES") {
        texto = "El invernadero tiene " + t + ", " + h + " y " + pHStatus;
    } else if (idioma === "en-US") {
        var t_en = t === "Temperatura Baja" ? "Low Temperature" : t === "Temperatura Normal" ? "Normal Temperature" : "High Temperature";
        var h_en = h === "Humedad Baja" ? "Low Humidity" : h === "Humedad Normal" ? "Normal Humidity" : "High Humidity";
        var pHStatus_en = pHStatus === "pH Ácido" ? "Acidic pH" : pHStatus === "pH Neutro" ? "Neutral pH" : "Alkaline pH";
        texto = "The greenhouse has " + t_en + ", " + h_en + " and " + pHStatus_en;
    }

    document.getElementById('temp').value = temperatura;
    document.getElementById('hume').value = humedad;
    document.getElementById('ph').value = ph; // Asignar valor de pH
    document.getElementById('texto').value = texto;
}