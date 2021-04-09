


window.onload = function() {



  // create span

  function createSpan (string, id) {
    let father = document.getElementById(id);
    let spanStart = document.createElement('span');
    spanStart.innerText = string;
    father.appendChild(spanStart);
  }

  createSpan('Cor de Fundo!', 'background-color');
  createSpan('Cor da Fonte!', 'font-color');
  createSpan('Espaçamento Entre as Fontes!', 'line-height');
  createSpan('Tipo de Fonte!', 'font-family');

  /** Funções do Cor de fundo. */

  // create button.

  function createButton (base){
    let father = document.getElementById('background-color');
    let buttonStart = document.createElement('button');
    father.appendChild(buttonStart);
    buttonStart.innerText = base;
  }

  createButton('Green');
  createButton('Black');
  createButton('Red');
  createButton('Magenta');
  createButton('Blue');

  /** Funções do Cor de fundo */

   // criar button Color options

  function buttonColorOptions (base){
    let father = document.getElementById('font-color');
    let buttonStart = document.createElement('button');
    father.appendChild(buttonStart);
    buttonStart.innerText = base;
  }
  
  buttonColorOptions('Black');
  buttonColorOptions('Red');
  buttonColorOptions('Black');
  buttonColorOptions('Blue');
  buttonColorOptions('Magenta');


  /** Funções do Tamanho da fonte. */

  
  function buttonLineHeight (base){
    let father = document.getElementById('line-height');
    let buttonStart = document.createElement('button');
    father.appendChild(buttonStart);
    buttonStart.innerText = base;
  }

  buttonLineHeight('1');
  buttonLineHeight('Normal');
  buttonLineHeight('1.5');
  buttonLineHeight('2.0');
  buttonLineHeight('3.0');

  /** Funções Font Family */

  function buttonFontFamily (base){
    let father = document.getElementById('font-family');
    let buttonStart = document.createElement('button');
    father.appendChild(buttonStart);
    buttonStart.innerText = base;
  }

  buttonFontFamily('Arial');
  buttonFontFamily('Times New Roman');





























  function setBackgroundColor(color) {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
    localStorage.setItem("backgroundColor", color)
  }

  function setFontColor(color) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color
    }
    localStorage.setItem("fontColor", color)
  }

  function setFontSize(size) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
    localStorage.setItem("fontSize", size)
  }

  function setLineHeight(height) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
    localStorage.setItem("lineHeight", height)
  }

  function setFontFamily(family) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
    localStorage.setItem("fontFamily", family)
  }

  // background-color
  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  // font-color
  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", function(event) {
      setFontColor(event.target.innerHTML)
    })
  }

  // font-size
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function(event) {
      setFontSize(event.target.innerHTML)
    })
  }

  // line-height
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", function(event) {
      setLineHeight(event.target.innerHTML)
    })
  }

  // font-family
  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", function(event) {
      setFontFamily(event.target.innerHTML)
    })
  }

  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setFontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if (fontSize) setFontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) setLineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) setFontSize(fontFamily)
  }

  initialize()
}