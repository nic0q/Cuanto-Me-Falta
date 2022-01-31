const $but = document.getElementById("button")
const $calc = document.getElementById("calculo")
const $card = document.getElementById("card")
const $cards = document.getElementById("cards")
const a = ()=>{
  const ab = $card.cloneNode(true)
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  ab.style.color = "red";
  $cards.insertAdjacentElement("afterbegin",ab)
}

$but.onclick = a
