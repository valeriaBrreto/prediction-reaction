function reaction2prediction(prediction) {
    const fireElement = document.getElementById("txt-reaction");
    if (prediction[0].probability >= 0.50) {
        fireElement.textContent = "AUXILIO FUEGO";
    } else {
        fireElement.textContent = "UFFF TODO TRANQUI";
    }
}