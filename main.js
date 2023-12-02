
  let btnValues = document.querySelector('.btnValues');
 let btnVoltar = document.querySelector('#btnVoltar')
let btnStyle =document.querySelector("#btnStyle")
 let btnCode = document.querySelector("#btnCode")
 let btnStatus = document.querySelector("#btnStatus")
  let conteudoStatus = document.querySelector('.content')
  let logoGit = document.querySelector('#logoGit')
  let imagemLogo = document.querySelector('.imagemLogo')
  let textH2 = document.querySelector('#textH2')
  let img = document.querySelector('.img')
  let Arraste = document.querySelector('#Arraste')



  btnValues.addEventListener("click", (event) => {
   const valorClicado = event.target.id

   if(valorClicado === "btnStatus"){activeStatus()}
   if(valorClicado=== "btnStyle"){activeModels()}
   if(valorClicado === "btnCode"){activeCode()}
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
    logoGit.style.display = "none"
    logoGit.style.display = "none"
    textH2.style.display = "none"
    imagemLogo.style.display = "none"
    img.style.display = "none"
    Arraste.style.display="none"
     
   }
   

   function  activeModels() {
   
    conteudoStatus.style.display = 'none'
    btnStyle.style.display="none"
    btnStatus.style.display="none"
    btnCode.style.display ="none"
    btnVoltar.style.display ="flex"
    img.style.display="flex"
    Arraste.style.display="flex"
   }

   function  activeCode() {
   imagemLogo.style.display ='flex'
    conteudoStatus.style.display = 'none'
    btnStyle.style.display="none"
    btnStatus.style.display="none"
    btnCode.style.display ="none"
    btnVoltar.style.display ="flex"
    logoGit.style.display = "flex"
    textH2.style.display = "flex"
    imagemLogo.style.display = "flex"

     
   }




   imagemLogo.addEventListener("click",()=>{
window.location.href ="https://github.com/rafaelrvs/ProjetoCafe.git"


   })


