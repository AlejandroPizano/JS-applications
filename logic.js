
function removeElement () {
    rmv=document.getElementById('circle')

    console.log(rmv)
    rmv.remove();

    
  }
  function addElement () {
    // crea un nuevo div
    // y añade contenido
    circ = document.getElementById('circle')
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id","circle")
    if (circ!=null){
      last=circ.innerHTML
      newDiv.innerHTML = Number(last)+1
    }else{

      newDiv.innerHTML = 0

    }
    var currentDiv = document.getElementById("circle");
    document.body.insertBefore(newDiv, currentDiv);
  }
  

  // function addElement () {
  //   // crea un nuevo div
  //   // y añade contenido
  //   number = document.querySelectorAll('#circle');
  //   console.log(number)
  //   var newDiv = document.createElement("div");
  //   newDiv.setAttribute("id","circle")
  //   newDiv.innerHTML = number.length+1
  //   // añade el elemento creado y su contenido al DOM
  //   var currentDiv = document.getElementById("cirlce1");
  //   document.body.insertBefore(newDiv, currentDiv);
  // }
  

