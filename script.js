const $add = document.getElementById("button")
const $calc = document.getElementById("calculo")
const $del = document.getElementById("delete")
const $card = document.getElementById("card")
const $cards = document.getElementById("cards")
const $ap = document.getElementById("aprobar")
const $des = document.getElementById("desaprobar")
const $error = document.getElementById("error")

const addCard = () =>{
  const ab = $card.cloneNode(true)
  ab.classList.toggle("d-none")
  $cards.insertAdjacentElement("afterbegin",ab)
}
const deleteCard = () =>{
  try{
    $cards.children[$cards.children.length-2].remove()
  }
  catch{
    alert("Todo ya fue eliminado")
  }
}
// Hacer el dnone con bootstrap para que tire un mensaje con toggle
const calculate = () =>{
  const pond = []
  const nota = []
  let i = 0
  for (let e of document.querySelectorAll("#pond")){
    pond[i] = e.value
    i+=1
  }
  i = 0
  for (let e of document.querySelectorAll("#nota")){
    nota[i] = e.value
    i+=1
  }
  let res = 0
  for(i = 0; i < pond.length-1;i++){
    res += parseFloat(pond[i]) * parseFloat(nota[i]) * 0.01
  }
  if(isNaN(res)){
    if(!$des.classList.contains("d-none")){
      $des.classList.toggle("d-none")
    }
    if(!$ap.classList.contains("d-none")){
      $ap.classList.toggle("d-none")
    }
    $error.classList.remove("d-none")
  }
  else{
    if(res >= 3.96){
      if(!$des.classList.contains("d-none")){
        $des.classList.toggle("d-none")
      }
      if(!$error.classList.contains("d-none")){
        $error.classList.toggle("d-none")
      }
      $ap.classList.remove("d-none")
    }
    else{
      if(!$ap.classList.contains("d-none")){
        $ap.classList.toggle("d-none")
      }
      if(!$error.classList.contains("d-none")){
        $error.classList.toggle("d-none")
      }
      $des.classList.remove("d-none")
    }
  }
  console.log(res)

}

$add.onclick = addCard
$del.onclick = deleteCard 
$calc.onclick = calculate
