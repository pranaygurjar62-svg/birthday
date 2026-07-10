// stars
const starsEl = document.getElementById('stars');
if(starsEl){
  for(let i=0;i<70;i++){
    const s = document.createElement('div');
    s.className='star';
    s.style.left = Math.random()*100+'%';
    s.style.top = Math.random()*100+'%';
    s.style.animationDelay = (Math.random()*3)+'s';
    starsEl.appendChild(s);
  }
}

// balloons
const balloonColors = ['#ff3d7f','#ffd23f','#9b5cff','#2fe6b4'];
const balloonsEl = document.getElementById('balloons');
if(balloonsEl){
  for(let i=0;i<9;i++){
    const b = document.createElement('div');
    b.className='balloon';
    const color = balloonColors[i % balloonColors.length];
    b.style.background = color;
    b.style.color = color;
    b.style.left = (Math.random()*94)+'%';
    b.style.animationDuration = (14 + Math.random()*10)+'s';
    b.style.animationDelay = (Math.random()*-20)+'s';
    b.style.width = (55 + Math.random()*30)+'px';
    b.style.height = (75 + Math.random()*35)+'px';
    balloonsEl.appendChild(b);
  }
}

// cake interaction (only present on page 3)
let blown = false;
const cake = document.getElementById('cake');
if(cake){
  cake.addEventListener('click', () => {
    const wishLine = document.getElementById('wishLine');
    if(blown){
      document.querySelectorAll('.flame').forEach(f=>f.classList.remove('out'));
      blown = false;
      if(wishLine) wishLine.classList.remove('show');
      return;
    }
    document.querySelectorAll('.flame').forEach(f=>f.classList.add('out'));
    blown = true;
    if(wishLine) wishLine.classList.add('show');
    if(window.confetti){
      const rect = cake.getBoundingClientRect();
      confetti({
        particleCount: 140,
        spread: 80,
        startVelocity: 45,
        colors: ['#ff3d7f','#ffd23f','#9b5cff','#2fe6b4','#fff6ea'],
        origin: {
          x: (rect.left + rect.width/2) / window.innerWidth,
          y: (rect.top + rect.height*0.25) / window.innerHeight
        }
      });
    }
  });
}

// gentle confetti burst on load for hero page
if(document.body.dataset.confettiOnLoad === 'true'){
  window.addEventListener('load', () => {
    if(window.confetti){
      confetti({ particleCount: 90, spread: 100, origin:{y:0.3}, colors:['#ff3d7f','#ffd23f','#9b5cff','#2fe6b4'] });
    }
  });
}
