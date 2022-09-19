# Conversor de moedas

Olá!

Este projeto é o resultado de uma das atividade proposta durante o curso "Imersão Dev", ofererido pela escola online de tecnologia Alura, para pessoas iniciantes em programação.

##  📝 Descrição do Projeto

Este conversor é uma aplicação web estruturada com a linguagem de marcação HTML5 e estilizada com a linguagem CSS3, seu código lógico foi programado em JavaScript.

Proposto nas aulas iniciais do curso, teve como objetivo praticar a criação de funções, interagir com o usuário para receber os valores a serem convertidos, criar a lógica para saber como converter, utilizar funções que interagem com a tela e exibir o resultado na tela.

Ao final da aula, e a partir do código deprogramação base desenvolvido, implementei a aplicação aumentando a variedade de moedas para conversão. Os valores de cada moeda são estáticos e não acompanham a cotação diária.

**- Código base**

```
function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
```
## 📚 Funcionalidades

Este conversor de moedas permite a conversão de qualquer valor entre as moedas Real, Dólar ou Euro.

## 🔧 Tecnologias utilizadas

Durante o desenvolvimento utilizei como IDE o CodePen, as linguagens HTML5, CSS3 e JavaScript


## 🔜 Implementações futuras

- Cotação das moedas atualizadas diariamente
- Novas moedas para conversão
- Conversão de criptomoedas

## 🎯 Status do projeto
- Concluído



