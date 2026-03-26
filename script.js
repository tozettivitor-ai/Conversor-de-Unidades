let tipoAtual = "comprimento";

function mudarTipo(tipo) {
    tipoAtual = tipo;
    atualizarUnidades();

    document.querySelectorAll(".tabs button").forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");
}

function atualizarUnidades() {
    let de = document.getElementById("de");
    let para = document.getElementById("para");

    de.innerHTML = "";
    para.innerHTML = "";

    if (tipoAtual === "comprimento") {
        let imperial = ["Polegada", "Pé", "Jarda", "Milha"];

        imperial.forEach(u => {
            let op = document.createElement("option");
            op.value = u;
            op.text = u;
            de.add(op);
        });

        para.innerHTML = "<option>Metro (m)</option>";
    }

    else if (tipoAtual === "massa") {
        let imperial = ["Libra", "Onça"];

        imperial.forEach(u => {
            let op = document.createElement("option");
            op.value = u;
            op.text = u;
            de.add(op);
        });

        para.innerHTML = "<option>Quilograma (kg)</option>";
    }

    else if (tipoAtual === "volume") {
        let imperial = ["Galão", "Onça fluida"];

        imperial.forEach(u => {
            let op = document.createElement("option");
            op.value = u;
            op.text = u;
            de.add(op);
        });

        para.innerHTML = "<option>Litro (L)</option>";
    }

    else if (tipoAtual === "velocidade") {
        let imperial = ["mph", "ft/s", "knots"];

        imperial.forEach(u => {
            let op = document.createElement("option");
            op.value = u;

            if (u === "mph") op.text = "Milhas por hora (mph)";
            if (u === "ft/s") op.text = "Pés por segundo (ft/s)";
            if (u === "knots") op.text = "Nós (knots)";

            de.add(op);
        });

        para.innerHTML = "<option>Metros por segundo (m/s)</option>";
    }
}

function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let de = document.getElementById("de").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.innerText = "Digite um valor válido!";
        return;
    }

    let convertido;
    let unidade = "";

    if (de === "Polegada") convertido = valor * 0.0254;
    else if (de === "Pé") convertido = valor * 0.3048;
    else if (de === "Jarda") convertido = valor * 0.9144;
    else if (de === "Milha") convertido = valor * 1609.34;

    else if (de === "Libra") convertido = valor * 0.453592;
    else if (de === "Onça") convertido = valor * 0.0283495;

    else if (de === "Galão") convertido = valor * 3.78541;
    else if (de === "Onça fluida") convertido = valor * 0.0295735;

    else if (de === "mph") convertido = valor * 0.44704;
    else if (de === "ft/s") convertido = valor * 0.3048;
    else if (de === "knots") convertido = valor * 0.514444;

    if (tipoAtual === "comprimento") unidade = " m";
    if (tipoAtual === "massa") unidade = " kg";
    if (tipoAtual === "volume") unidade = " L";
    if (tipoAtual === "velocidade") unidade = " m/s";

    resultado.innerText = "Resultado: " + Number(convertido.toPrecision(8)) + unidade;
}

window.onload = atualizarUnidades;
