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

const ARfaction = document.querySelector("#ARteam");
const Four04faction = document.querySelector("#Team404");
const ARgrid = document.querySelector("#gridA");
const Four04grid = document.querySelector("#gridB");

ARfaction.addEventListener("click", () => { 
    ARgrid.classList.remove("woosh");
    Four04grid.classList.remove("visible");
})

Four04faction.addEventListener("click", () => { 
    Four04grid.classList.add("visible");
    ARgrid.classList.remove("visible");
    ARgrid.classList.add("woosh");
})

const dollM4 = document.querySelector("#dollM4");                 // Lo siento mucho por el programador que sabe JS que vea esto                    
const dollM16 = document.querySelector("#dollM16A1");             // Juro que voy a aprender funciones y lo necesario para poder reducir el tamaño de este desastre
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

const dollUMP45 = document.querySelector("#dollUMP45");                               
const dollUMP9 = document.querySelector("#dollUMP9");            
const doll416 = document.querySelector("#doll416");
const dollG11 = document.querySelector("#dollG11");
const doll40 = document.querySelector("#doll40");

const UMP45desc = document.querySelector("#desc1_45");
const UMP9desc = document.querySelector("#desc2_9");
const HK416desc = document.querySelector("#desc3_416");
const G11desc = document.querySelector("#desc4_11");
const unkwndesc = document.querySelector("#desc5_40");

dollUMP45.addEventListener("click", () => { 
    UMP45desc.classList.add("visible");
    UMP45desc.classList.remove("woosh");
    UMP9desc.classList.remove("visible");
    HK416desc.classList.remove("visible");
    G11desc.classList.remove("visible");
    unkwndesc.classList.remove("visible");
})

dollUMP9.addEventListener("click", () => {
    UMP45desc.classList.add("woosh");
    UMP9desc.classList.add("visible");
    HK416desc.classList.remove("visible");
    G11desc.classList.remove("visible");
    unkwndesc.classList.remove("visible");
})

doll416.addEventListener("click", () => {
    UMP45desc.classList.add("woosh");
    UMP9desc.classList.remove("visible");
    HK416desc.classList.add("visible");
    G11desc.classList.remove("visible");
    unkwndesc.classList.remove("visible");
})

dollG11.addEventListener("click", () => {
    UMP45desc.classList.add("woosh");
    UMP9desc.classList.remove("visible");
    HK416desc.classList.remove("visible");
    G11desc.classList.add("visible");
    unkwndesc.classList.remove("visible");
})

doll40.addEventListener("click", () => {
    UMP45desc.classList.add("woosh");
    UMP9desc.classList.remove("visible");
    HK416desc.classList.remove("visible");
    G11desc.classList.remove("visible");
    unkwndesc.classList.add("visible");
})

