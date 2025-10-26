const openBtn = document.getElementById("openPesanbima");
const closeBtn = document.getElementById("closePesanbima");
const modal = document.getElementById("pesanbima");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})

const openBtnyudis = document.getElementById("openPesanyudis");
const closeBtnyudis = document.getElementById("closePesanyudis");
const modalyudis = document.getElementById("pesanyudis");

openBtnyudis.addEventListener("click", () => {
    modalyudis.classList.add("open");
})
closeBtnyudis.addEventListener("click", () => {
    modalyudis.classList.remove("open");
})

const openBtnarju = document.getElementById("openPesanarju");
const closeBtnarju = document.getElementById("closePesanarju");
const modalarju = document.getElementById("pesanarju");

openBtnarju.addEventListener("click", () => {
    modalarju.classList.add("open");
})
closeBtnarju.addEventListener("click", () => {
    modalarju.classList.remove("open");
})

const openBtnnasa = document.getElementById("openPesannasa");
const closeBtnnasa = document.getElementById("closePesannasa");
const modalnasa = document.getElementById("pesannasa");

openBtnnasa.addEventListener("click", () => {
    modalnasa.classList.add("open");
})
closeBtnnasa.addEventListener("click", () => {
    modalnasa.classList.remove("open");
})