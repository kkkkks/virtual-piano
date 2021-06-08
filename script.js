  function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  const piano = document.querySelector('.piano');

  var isPressed = new Boolean(false);

  piano.addEventListener('mousedown', (event) => {
    isPressed = true;
    if(event.repeat) return;
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.getAttribute('data-note');
      event.target.className += ' piano-key-active';
      event.target.className += ' piano-key-active-pseudo';
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
    }   
  });
  window.addEventListener('mouseup', (event) => {
    isPressed = false;
    event.target.classList.remove('piano-key-active-pseudo');
    event.target.classList.remove('piano-key-active'); 
  });

  piano.addEventListener('mouseover', (event) => {
    if (isPressed === true){
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.getAttribute('data-note');
      event.target.className += ' piano-key-active';
      event.target.className += ' piano-key-active-pseudo';
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
    }}
  });
  piano.addEventListener('mouseout', (event) => {
    if (isPressed === true){
      event.target.classList.remove('piano-key-active-pseudo');
      event.target.classList.remove('piano-key-active'); 
    }}
  );

  window.addEventListener('keydown', (event) => {
    if(event.repeat) return;
    const key = event.code.slice(3);
    var elem = document.querySelector(`[data-letter='${key}']`);
    elem.classList.add('piano-key-active');
    elem.classList.add('piano-key-active-pseudo');
    const note = elem.getAttribute('data-note');
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
  });

  window.addEventListener('keyup', (event) => {
    const key = event.code.slice(3);
    var elem = document.querySelector(`[data-letter='${key}']`);
    elem.classList.remove('piano-key-active');
    elem.classList.remove('piano-key-active-pseudo');
  });

  const buttons = document.querySelector('.btn-container');
  const notes = document.querySelectorAll('.piano-key');
  
  buttons.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-active')) return;
    for(let i = 0; i<buttons.children.length; i++){
        buttons.children[i].classList.remove('btn-active');
    }  
    event.target.className += ' btn-active';
    notes.forEach(element => element.classList.toggle('pseudo'))
  });

  const btnFullScreen = document.querySelector('.fullscreen');

  btnFullScreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, false);

  





