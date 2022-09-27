import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
let parsedTime;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

setCurrentTime();

function setCurrentTime() {
  if (localStorage.getItem(CURRENT_TIME)) {
    parsedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
    // console.log(parsedTime);
    player.setCurrentTime(parsedTime);
  } else {
    parsedTime = 0;
    player.setCurrentTime(parsedTime);
  }
}
