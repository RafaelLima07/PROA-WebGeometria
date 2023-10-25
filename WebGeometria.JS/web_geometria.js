function circulo_Raio() {
    var raio_circulo = parseFloat(document.getElementById("raio_Circulo").value);
    var area_Circulo = Math.PI * (raio_circulo ** 2);

    document.getElementById("resultado").textContent = area_Circulo.toFixed(2);
}

function tronco_Area() {
    var baseMaior = parseFloat(document.getElementById("b_Maior").value);
    var baseMenor = parseFloat(document.getElementById("b_Menor").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var area_Tronco = (1 / 2) * (baseMaior + baseMenor) * altura;

    document.getElementById("resultado").textContent = area_Tronco.toFixed(2);
}

function retangulo_Area() {
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var largura = parseFloat(document.getElementById("largura").value);
    var area_Retangulo = comprimento * largura;

    document.getElementById("resultado").textContent = area_Retangulo.toFixed(2);
}

function coroa_Area() {
    var raio_CirculoMaior = parseFloat(document.getElementById("raio_Circulo_maior").value);
    var area_CirculoMaior = Math.PI * (raio_CirculoMaior ** 2);

    document.getElementById("area_Maior").textContent = area_CirculoMaior.toFixed(2);

    var raio_CirculoMenor = parseFloat(document.getElementById("raio_Circulo_menor").value);
    var area_CirculoMenor = Math.PI * (raio_CirculoMenor ** 2);

    document.getElementById("area_Menor").textContent = area_CirculoMenor.toFixed(2);

    var area_Coroa = Math.PI * (area_CirculoMaior - area_CirculoMenor);

    document.getElementById("resultado").textContent = area_Coroa.toFixed(2);
}

function trapezoide_Area() {
    var baseMaior = parseFloat(document.getElementById("base_Maior").value);
    var baseMenor = parseFloat(document.getElementById("base_Menor").value);
    var altura_ = parseFloat(document.getElementById("altura").value);
    var area_Trapezoide = ((baseMaior + baseMenor) * altura_) / 2;

    document.getElementById("resultado").textContent = area_Trapezoide.toFixed(2);
}

function escolha(forma) {
    document.getElementById("pentagono").style.display = "none";
    document.getElementById("hexagono").style.display = "none";
    document.getElementById("heptagono").style.display = "none";
    document.getElementById(forma).style.display = "block";
}

function pentagono_Area() {
    var ladoP = parseFloat(document.getElementById("lado_P").value);
    var apotemaP = parseFloat(document.getElementById("apotema_P").value);
    var area_Pentagono = (5 * ladoP) * apotemaP;

    document.getElementById("resultado").textContent = area_Pentagono.toFixed(2);
}

function hexagono_Area() {
    var ladoH = parseFloat(document.getElementById("lado_H").value);
    var apotemaH = parseFloat(document.getElementById("apotema_H").value);
    var area_Hexagono = 3 * ladoH * apotemaH;

    document.getElementById("resultado_H").textContent = area_Hexagono.toFixed(2);
}

function heptagono_Area() {
    var baseHP = parseFloat(document.getElementById("base_HP").value);
    var alturaHP = parseFloat(document.getElementById("altura_HP").value);
    var area_Heptagono = (baseHP * alturaHP) / 2

    document.getElementById("resultado_HP").textContent = area_Heptagono.toFixed(2);
}

function quadrado_Area() {
    var lado = parseFloat(document.getElementById("lado_Quadrado").value);
    var area_Quadrado = lado * 4;

    document.getElementById("resultado").textContent = area_Quadrado.toFixed(2);
}

function setor_Area() {
    var raio_Circular = parseFloat(document.getElementById("raio_Circular_maior").value);
    var anguloCentral = parseInt(document.getElementById("angulo_Central").value);
    var pi = 3.14;
    var area_Circular = (anguloCentral / 360) * pi * Math.pow(raio_Circular, 2);

    document.getElementById("resultado").textContent = area_Circular.toFixed(2);
}