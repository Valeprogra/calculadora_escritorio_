const mousetrap = require("mousetrap")

mousetrap.bind("0", clickCero)
mousetrap.bind("1", clickUno)
mousetrap.bind("2", clickDos)
mousetrap.bind("3", clickTres)
mousetrap.bind("4", clickCuatro)
mousetrap.bind("5", clickCinco)
mousetrap.bind("6", clickSeis)
mousetrap.bind("7", clickSiete)
mousetrap.bind("8", clickOcho)
mousetrap.bind("9", clickNueve)

mousetrap.bind("+", clickSuma)
mousetrap.bind("-", clickResta)
mousetrap.bind("*", clickMultiplicacion)
mousetrap.bind("/", clickDivision)
mousetrap.bind("←", clickRetroceder)
mousetrap.bind("C", clickEliminar)
mousetrap.bind("=", clickIgual)

document.getElementById("botonCero").addEventListener("click", clickCero)
document.getElementById("botonUno").addEventListener("click", clickUno)
document.getElementById("botonDos").addEventListener("click", clickDos)
document.getElementById("botonTres").addEventListener("click", clickTres)
document.getElementById("botonCuatro").addEventListener("click", clickCuatro)
document.getElementById("botonCinco").addEventListener("click", clickCinco)
document.getElementById("botonSeis").addEventListener("click", clickSeis)
document.getElementById("botonSiete").addEventListener("click", clickSiete)
document.getElementById("botonOcho").addEventListener("click", clickOcho)
document.getElementById("botonNueve").addEventListener("click", clickNueve)

document.getElementById("suma").addEventListener("click", clickSuma)
document.getElementById("resta").addEventListener("click", clickResta)
document.getElementById("multiplicacion").addEventListener("click", clickMultiplicacion)
document.getElementById("division").addEventListener("click", clickDivision)
document.getElementById("retroceder").addEventListener("click", clickRetroceder)
document.getElementById("eliminar").addEventListener("click", clickEliminar)
document.getElementById("igual").addEventListener("click", clickIgual)

var resultadoElemento = document.getElementById("resultado")
var resultado = ""
var operacion = ""
var num = 0
var num2 = ""
var flag = ""

function clickCero() {
    resultado = resultado + "0"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "0"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickUno() {
    resultado = resultado + "1"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "1"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickDos() {
    resultado = resultado + "2"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "2"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickTres() {
    resultado = resultado + "3"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "3"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickCuatro() {
    resultado = resultado + "4"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "4"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickCinco() {
    resultado = resultado + "5"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "5"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickSeis() {
    resultado = resultado + "6"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "6"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickSiete() {
    resultado = resultado + "7"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "7"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickOcho() {
    resultado = resultado + "8"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "8"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickNueve() {
    resultado = resultado + "9"
    if (operacion == "") {
        num = parseInt(resultado)
    } else {
        num2 = num2 + "9"
    }
    flag = "Y";
    resultadoElemento.innerHTML = resultado
}

function clickSuma() {
    if (operacion == "") {
        if (resultado != "" && flag != "N") {
            flag = "N"
            operacion = "+"
            resultado = resultado + operacion
            resultadoElemento.innerHTML = resultado
        }
    }
    else {
        num = parseInt(resultado)
        clickIgual()
    }
}


function clickMultiplicacion() {
    if (operacion == "") {
        if (resultado != "" && flag != "N") {
            flag = "N"
            operacion = "*"
            resultado = resultado + operacion
            resultadoElemento.innerHTML = resultado
        }
    }
    else {
        num = parseInt(resultado)
        clickIgual()
    }
}

function clickResta() {
    if (operacion == "") {
        if (resultado != "" && flag != "N") {
            flag = "N"
            operacion = "-"
            resultado = resultado + operacion
            resultadoElemento.innerHTML = resultado
        }
    }
    else {
        num = parseInt(resultado)
        clickIgual()
    }
}
function clickDivision() {
    if (operacion == "") {
        if (resultado != "" && flag != "N") {
            flag = "N"
            operacion = "/"
            resultado = resultado + operacion
            resultadoElemento.innerHTML = resultado
        }
    }
    else {
        num = parseInt(resultado)
        clickIgual()
    }
}

function clickEliminar() {
    resultadoElemento.innerHTML = "0"
    resultado = ""
    resetear()
}

function clickRetroceder() {
 var res =resultado.length
resultado = resultado.substr(0,res-1)
resultadoElemento.innerHTML = resultado

}
function resetear() {
    num = 0
    num2 = ""
    operacion = ""
    flag = ""
}
function clickIgual() {
    var res = 0;
    if (num <= 0) {
        num = parseInt(resultado)
    }
    switch (operacion) {
        case "+":
            res = num + parseInt(num2);
            break;

        case "-":
            res = num - parseInt(num2);
            break;

        case "*":
            res = num * parseInt(num2);
            break;

        case "/":
            res = num / parseInt(num2);
            break;
    }
    resetear();
    resultado = res;
    resultadoElemento.innerHTML = res
}




