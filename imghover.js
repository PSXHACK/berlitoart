const imgs = document.querySelectorAll('.box img');
const modal = document.getElementById('modal'),
    modalImg = modal.querySelector('img'),
    close = modal.querySelector('.close');

imgs.forEach(img => {
  img.addEventListener('click' , (img) => {
    let targetSrc = img.target.src;
    modalImg.src = targetSrc;
    modal.classList.add('active');
    modalImg.style.opacity = "1";
    modal.style.opacity = "1";
  })
})

modal.addEventListener('click', (img) =>{
  if(img.target !== modalImg){
    closeModal();
    modalImg.style.opacity = "0";
    modal.style.opacity = "0";
  }
})

modalImg.addEventListener('click', (img) =>{
  closeModal();
  modalImg.style.opacity = "0";
  modal.style.opacity = "0";
})

close.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('active');
}