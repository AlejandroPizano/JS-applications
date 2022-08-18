document.body.onload = addElement;
function removeElement () {
    rmv=document.getElementById("circle")
    rmv.remove();

    
  }
function addElement () {
  // crea un nuevo div
  // y añade contenido
  number = document.querySelectorAll('#circle');
  
  console.log(number)
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id","circle")
  newDiv.innerHTML = number.length
  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("cirlce1");
  document.body.insertBefore(newDiv, currentDiv);
}


