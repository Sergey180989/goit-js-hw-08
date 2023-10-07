import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const moment = 'videoplayer - current - time';
const play = function (data) {
  localStorage.setItem(moment, data.seconds);
};

player.on('timeupdate', throttle(play, 1000));
if (localStorage.getItem(moment)) {
  player.setCurrentTime(localStorage.getItem(moment));
}

