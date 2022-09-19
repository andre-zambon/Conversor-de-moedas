var real = 1;
var dolar = 5;
var euro = 6;

function recebeMoedaEntrada() {
  var elementoMoedaQueroConverter = document.getElementsByName("moedain");
  for (var i = 0; i < elementoMoedaQueroConverter.length; i++) {
    if (elementoMoedaQueroConverter[i].checked == true) {
      return elementoMoedaQueroConverter[i].id;
    }
  }
}

function atribuiValorMoedaEntrada() {
  var moedaEntrada = recebeMoedaEntrada();
  if (moedaEntrada == "real") {
    moedaEntrada = real;
  } else if (moedaEntrada == "dolar") {
    moedaEntrada = dolar;
  } else moedaEntrada = euro;
  return moedaEntrada;
}

function recebeMoedaSaida() {
  var elementoMoedaParaQualConverter = document.getElementsByName("moedaout");
  for (var i = 0; i < elementoMoedaParaQualConverter.length; i++) {
    if (elementoMoedaParaQualConverter[i].checked == true) {
      return elementoMoedaParaQualConverter[i].id;
    }
  }
}

function atribuiValorMoedasSaida() {
  var moedaSaida = recebeMoedaSaida();
  if (moedaSaida == "real") {
    moedaSaida = real;
  } else if (moedaSaida == "dolar") {
    moedaSaida = dolar;
  } else moedaSaida = euro;

  return moedaSaida;
}

function recebeValor() {
  var elementoValor = parseFloat(document.getElementById("valor").value);
  return elementoValor;
}

function Converter() {
  var moedaOrigem = atribuiValorMoedaEntrada();
  var moedaDestino = atribuiValorMoedasSaida();
  var moedaEntradaResultado = recebeMoedaEntrada();
  var valor = recebeValor();

  var resultado = parseFloat((valor * moedaOrigem) / moedaDestino);

  valorConvertido.innerHTML =
    "O valor em " +
    recebeMoedaEntrada() +
    " é " +
    "<br>" +
    resultado.toFixed(2);
}