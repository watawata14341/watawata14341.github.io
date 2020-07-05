//切り替えボタン要素を指定
const back1 = document.getElementById('blue');
const back2 = document.getElementById('red');
//ターゲット要素を指定
const target = document.getElementById('target');

//blueボタンが押された時
back1.addEventListener('click', function() {
  
　　target.style.background = '#FF1744';
  
}, false);

//redボタンが押された時
red.addEventListener('click', function() {
  
　　target.style.background = '#0091EA';
  
}, false);

function chBackcolor(color) {
    document.body.style.background = color;
 }