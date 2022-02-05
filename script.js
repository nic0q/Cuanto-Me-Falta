// Buttons
const $add = document.getElementById("button")
const $calc = document.getElementById("calculo")
const $del = document.getElementById("delete")
const $delAll = document.getElementById("deleteAll")
// Cards, elements
const $card = document.getElementById("card")
const $cards = document.getElementById("cards")
const $ap = document.getElementById("aprobar")
const $des = document.getElementById("desaprobar")
const $error = document.getElementById("error")
// addCard: Funcion que añade una nueva tarjeta
const addCard = () =>{
  const modelCard = $card.cloneNode(true) // Se toma una tarjeta como modelo para clonarla y spawmear las demas
  modelCard.classList.toggle("d-none")
  $cards.insertAdjacentElement("beforebegin",modelCard)
}
// deleteCard: Funcion que elimina una tarjeta
const deleteCard = () =>{
  try{
    const len = document.querySelectorAll(".card").length-2
    document.querySelectorAll(".card")[len].remove()
  }
  catch{
    console.log("Todo eliminado")
  }
}
// DeleteAll: Funcion que resetea todas las notas y reinicia a el estado inicial
const deleteAll = () =>{
  if(!$ap.classList.contains("d-none")){
    $ap.classList.toggle("d-none")
  }
  if(!$error.classList.contains("d-none")){
    $error.classList.toggle("d-none")
  }
  if(!$des.classList.contains("d-none")){
    $des.classList.toggle("d-none")
  }
  for(e of document.querySelectorAll(".card")){
    if(document.querySelectorAll(".card").length === 1){
      break
    }
    else{
      e.remove()
    }
  }
}
// Calculate: Funcion que calcula el promedio total de las notas, y maneja posibles errores:
//            (Si el promedio es negativo, Si el promedio es 0, Si hay tarjetas vacias)
const calculate = () =>{
  const pond = []
  const nota = []
  let i = 0
  let res = 0
  for (let e of document.querySelectorAll("#pond")){
    pond[i] = e.value
    i+=1
  }
  i = 0
  for (let e of document.querySelectorAll("#nota")){
    nota[i] = e.value
    i+=1
  }
  for(i = 0; i < pond.length-1;i++){
    res += parseFloat(pond[i]) * parseFloat(nota[i]) * 0.01
  }
  if(isNaN(res)){
    if(!$des.classList.contains("d-none")){
      $des.classList.toggle("d-none")
    }
    else if (!$ap.classList.contains("d-none")){
      $ap.classList.toggle("d-none")
    }
    $error.classList.remove("d-none")
  }
  else{
    if(res === 0){
      if(!$ap.classList.contains("d-none")){
        $ap.classList.toggle("d-none")
      }
      if(!$error.classList.contains("d-none")){
        $error.classList.toggle("d-none")
      }
      $des.classList.remove("d-none")
      $des.innerHTML = `0`
    }
    else if(res < 0){
      if(!$error.classList.contains("d-none")){
        $error.classList.toggle("d-none")
      }
      else if (!$ap.classList.contains("d-none")){
        $ap.classList.toggle("d-none")
      }
      $des.classList.remove("d-none")
      $des.innerHTML = `Ingrese solo numeros positivos`

    }
    else if(res >= 3.96){
      if(!$des.classList.contains("d-none")){
        $des.classList.toggle("d-none")
      }
      if(!$error.classList.contains("d-none")){
        $error.classList.toggle("d-none")
      }
      $ap.classList.remove("d-none")
      $ap.innerHTML = `Su nota es ${res.toFixed(3)}`
    }
    else{
      if(!$ap.classList.contains("d-none")){
        $ap.classList.toggle("d-none")
      }
      if(!$error.classList.contains("d-none")){
        $error.classList.toggle("d-none")
      }
      $des.classList.remove("d-none")
      $des.innerHTML = `Su nota es ${res.toFixed(3)}, para llegar a 4, le falta ${3.96-res.toFixed(3)}`
    }
  }
}

$add.onclick = addCard
$del.onclick = deleteCard 
$calc.onclick = calculate
$delAll.onclick = deleteAll
