const A = document.querySelector('#A');
const B = document.querySelector('#B');
const C = document.querySelector('#C');

const mensaje = document.querySelector('.mensaje')

function verificarPassword() {
  let password = A.value + B.value + C.value;
  if (password === '911') {
    mensaje.innerText = 'Password 1 correcto';
  } else if (password === '714') {
    mensaje.innerText = 'Password 2 correcto';
  } else {
    mensaje.innerText = 'Password incorrecto';
  }
}