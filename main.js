
  let btnValues = document.querySelector('.btnValues');
 let btnVoltar = document.querySelector('#btnVoltar')
let btnStyle =document.querySelector("#btnStyle")
 let btnCode = document.querySelector("#btnCode")
 let btnStatus = document.querySelector("#btnStatus")
  let conteudoStatus = document.querySelector('.content')



  btnValues.addEventListener("click", (event) => {
   const valorClicado = event.target.id

   if(valorClicado === "btnStatus"){activeStatus()}
   if(valorClicado=== "btnStyle"){activeModels()}
   if(valorClicado === "btnCode"){}
   if(valorClicado === "btnVoltar"){activeBackPage()}

  


  });




  function activeStatus() {
   
   conteudoStatus.style.display = 'flex'
   btnStyle.style.display="none"
   btnStatus.style.display="none"
   btnCode.style.display ="none"
   btnVoltar.style.display ="flex"
    
  }
  
  
  function activeBackPage() {
   
    conteudoStatus.style.display = 'none'
    btnStyle.style.display="flex"
    btnStatus.style.display="flex"
    btnCode.style.display ="flex"
    btnVoltar.style.display ="none"
     
   }
   

   function  activeModels() {
   
    conteudoStatus.style.display = 'none'
    btnStyle.style.display="none"
    btnStatus.style.display="none"
    btnCode.style.display ="none"
    btnVoltar.style.display ="flex"
     
   }