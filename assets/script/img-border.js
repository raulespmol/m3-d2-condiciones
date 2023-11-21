const imgClass = document.querySelector('img').classList;

function toggleBorder(){
  if(imgClass.contains('border')){
    imgClass.remove('border')
  } else {
    imgClass.add('border')
  }
}