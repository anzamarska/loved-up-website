const goToShopElem = document.getElementById('goToStock');
const stockwrappers2 = document.getElementById('stock-wrapper2');
const backToMainSite = document.getElementById('backToMainSite');
    
function toggleOpen(){
  stockwrappers2.classList.toggle('open');
}

function removeClass(){
  stockwrappers2.classList.remove('open');
}
// function toggleActive(e){
//   console.log(e.propertyName);
//   if(e.propertyName.includes('flex')){
//     this.classList.toggle('open-active');
//   }
// }

goToShopElem.addEventListener('click', toggleOpen);
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

backToMainSite.addEventListener('click', removeClass);