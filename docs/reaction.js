function getReactionText(prediction) {
    const isFire = prediction[2].probability >= 0.50;
    const othersAboveThreshold = prediction.some((pred, index) => index !== 2 && pred.probability > 0.50);

    if (isFire && !othersAboveThreshold) {
        return "AUXILIO FUEGO";
    } else if (!isFire && othersAboveThreshold) {
        return "UFFF TODO TRANQUI";
    }
    return "SIN DATOS RELEVANTES";
}

function reaction2prediction(prediction) {
    const fireElement = document.getElementById("txt-reaction");
    fireElement.textContent = getReactionText(prediction);

    const bodybg = document.getElementsByTagName("body")[0];
    bodybg.style.backgroundColor = prediction[2].probability >= 0.50 ? "red" : "unset";

    fireElement.textContent = getReactionText(prediction);
}