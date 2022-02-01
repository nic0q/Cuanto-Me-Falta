const $add = document.getElementById("button")
const $calc = document.getElementById("calculo")
const $del = document.getElementById("delete")
const $card = document.getElementById("card")
const $cards = document.getElementById("cards")
const addCard = ()=>{
  const ab = $card.cloneNode(true)
  $cards.insertAdjacentElement("afterbegin",ab)
}
const deleteCard = () =>{
  try{
    $cards.children[$cards.children.length-1].remove()
  }
  catch{
    alert("Todo ya fue eliminado")
  }
}
const calculate = () =>{
  let arr = []
  for (let i = 0 ; i < $cards.children.length; i++){
    arr[i] = $cards.children[i].nodeValue
  }
  console.log(arr)
}
$add.onclick = addCard
$del.onclick = deleteCard 
$calc.onclick = calculate
