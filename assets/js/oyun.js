const images = [
 {icon:'assets/img/kagit.png' },
  {icon:'assets/img/makas.png'},
  {icon:'assets/img/tas.png'}

];

const hamleler = ['kağıt', 'makas','taş'];

const baglanti = [];
let oyuncuSkor = 0;
let bilgisayarSkor = 0;


Math.floor(Math.random()*3);



for (let i=0; i<images.length; i++ ){


  baglanti.push({

    icon:images[i].icon,
    hamle:hamleler[i]
    
  });
  console.log(baglanti);
console.log(images[i]);
console.log(hamleler[i]);


}

function bilgisayarHamlesi(){
  const imagesRandom = Math.floor(Math.random()*3);
  return hamleler[imagesRandom];
}
const skor = document.querySelector('.oyuncu');
const mesaj = document.querySelector('.bildirim');



function oyna (event) {
 
  // event.target ve currenttarget arasında bulunan fark:
  //event.target kullanıcının etileşimde bulunan bütün ögeyi döndürüyor 
  //ama event.Currenttarget event'ın bağlı olduğu ögeyi döndürüyor.

const oyuncununHamlesi = event.currentTarget.dataset.hamle;
const bilgisayarinHamlesi = bilgisayarHamlesi();
console.log(oyuncununHamlesi);
console.log(bilgisayarinHamlesi);


const tkmBtns = document.querySelectorAll('.tkmBtn');

for(let i=0; i<tkmBtns.length; i++) {
  tkmBtns[i].classList.toggle('hidden');
}




const game = document.querySelector('.game');

game.innerHTML += `<div>
<img src="${images[hamleler.indexOf(oyuncununHamlesi)].icon}" />
</div>`

setTimeout(() => {game.innerHTML += `<div><img src="${images[hamleler.indexOf(bilgisayarinHamlesi)].icon}" /></div>`;
if(oyuncununHamlesi === bilgisayarinHamlesi) {

  console.log('Beraber');
} else if (

  (oyuncununHamlesi === 'taş' && bilgisayarinHamlesi === 'makas') ||
  (oyuncununHamlesi === 'kağıt' && bilgisayarinHamlesi === 'taş') ||
  (oyuncununHamlesi === 'makas' && bilgisayarinHamlesi === 'kağıt')
) {
  oyuncuSkor++;
  console.log('kazandınız');
  mesaj.innerHTML = "YOU WIN";
   

} else  {
  bilgisayarSkor++;
  console.log('Bilgisayar Kazandı');
  mesaj.innerText = "YOU LOSE";

}

skorGöster(); }, 500);
}


const game = document.querySelector('.game');
for (let i = 0; i < images.length; i++) {
  
  game.innerHTML += `<button class='tkmBtn' data-hamle="${hamleler[i]}">
    <img src="${images[i].icon}" alt="${hamleler[i]}" />
  </button>`;
}

const tkmBtns = document.querySelectorAll('.tkmBtn');

for(let i=0; i<tkmBtns.length; i++) {
  tkmBtns[i].addEventListener('click', oyna);
}

function skorGöster() {

  
  skor.innerHTML = `SCORE: ${oyuncuSkor} - ${bilgisayarSkor}`;
  console.log('Oyuncu: '  + oyuncuSkor);
  console.log(bilgisayarSkor);
}



function yeniOyun() {

 oyuncuSkor = 0;
 bilgisayarSkor = 0;
 skor.innerHTML = `SCORE: ${oyuncuSkor} - ${bilgisayarSkor}`;
 mesaj.innerHTML="";
 game.innerHTML="";

 const tkmBtns = document.querySelectorAll('.tkmBtn');
  for (let i = 0; i < tkmBtns.length; i++) {
    tkmBtns[i].classList.remove('hidden');
  }

  for (let i = 0; i < images.length; i++) {
    game.innerHTML += `<button class='tkmBtn' data-hamle="${hamleler[i]}">
      <img src="${images[i].icon}" alt="${hamleler[i]}" />
    </button>`;
  }

  const tkmBtnsNew = document.querySelectorAll('.tkmBtn');
  for (let i = 0; i < tkmBtnsNew.length; i++) {
    tkmBtnsNew[i].addEventListener('click', oyna);
  }
}
const yeniden = document.querySelector('.yeniden');
yeniden.addEventListener('click',yeniOyun);


const btnRules = document.querySelector('.btnRules');
const rules = document.querySelector('.rules');
const closeBtn =document.querySelector('.closeBtn')

btnRules.addEventListener('click', () => {

  rules.showModal();
} );


closeBtn.addEventListener('click', () => {

  rules.close();
});
