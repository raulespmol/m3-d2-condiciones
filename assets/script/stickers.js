const stickerA = document.querySelector('#sticker1');
const stickerB = document.querySelector('#sticker2');
const stickerC = document.querySelector('#sticker3');

const mensaje = document.querySelector('#mensaje');

function contarStickers(){
  let totalStickers = Number(stickerA.value) + Number(stickerB.value) + Number(stickerC.value);
  if(totalStickers <= 10 ){
    mensaje.innerText = `Llevas ${totalStickers} stickers`;
    mensaje.classList.remove('error');
  } else {
    mensaje.innerText = 'Llevas demasiados stickers';
    mensaje.classList.add('error');
  }
}