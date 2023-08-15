const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


let modalContent = document.querySelector(".modal-content");              
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let blurBg = document.querySelector(".blur-bg");

openModal.addEventListener("click", function () {
          modalContent.classList.remove("hidden-modal");
          blurBg.classList.remove("hidden-blur");
});


let closeModalFunction = function () {
          modalContent.classList.add("hidden-modal")
          blurBg.classList.add("hidden-blur")
}

blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {

          if (event.key === "Escape" && 
!modalContent.classList.contains("hidden")) {
                    closeModalFunction();
          }         
});

const dollM4 = document.querySelector("#dollM4");                 // Lo siento mucho por el programador de JS que vea esto                    
const dollM16 = document.querySelector("#dollM16A1");             // Juro que voy a aprender funciones 
const doll15 = document.querySelector("#dollAR15");
const dollSOP = document.querySelector("#dollSOP2");
const dollRO = document.querySelector("#dollRO635");

const M4desc = document.querySelector("#desc1");
const M16desc = document.querySelector("#desc2");
const AR15desc = document.querySelector("#desc3");
const SOPdesc = document.querySelector("#desc4");
const ROdesc = document.querySelector("#desc5");

dollM4.addEventListener("click", () => { 
    M4desc.classList.add("visible");
    M4desc.classList.remove("woosh");
    M16desc.classList.remove("visible");
    AR15desc.classList.remove("visible");
    SOPdesc.classList.remove("visible");
    ROdesc.classList.remove("visible");
})

dollM16.addEventListener("click", () => {
    M4desc.classList.add("woosh");
    M16desc.classList.add("visible");
    AR15desc.classList.remove("visible");
    SOPdesc.classList.remove("visible");
    ROdesc.classList.remove("visible");
})

doll15.addEventListener("click", () => {
    M4desc.classList.add("woosh");
    M16desc.classList.remove("visible");
    AR15desc.classList.add("visible");
    SOPdesc.classList.remove("visible");
    ROdesc.classList.remove("visible");
})

dollSOP.addEventListener("click", () => {
    M4desc.classList.add("woosh");
    M16desc.classList.remove("visible");
    AR15desc.classList.remove("visible");
    SOPdesc.classList.add("visible");
    ROdesc.classList.remove("visible");
})

dollRO.addEventListener("click", () => {
    M4desc.classList.add("woosh");
    M16desc.classList.remove("visible");
    AR15desc.classList.remove("visible");
    SOPdesc.classList.remove("visible");
    ROdesc.classList.add("visible");
})

