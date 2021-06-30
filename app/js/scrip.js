//for modal

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".header__modal");

modalBtn.addEventListener('click', function(){
  console.log("modal-btn");
  modal.classList.toggle("show-modal");
})