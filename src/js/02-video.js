import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

player.setCurrentTime(localStorage.getItem('currentTime') || 0)
 

player.on('timeupdate', throttle(onPlaying, 1000));

function onPlaying() {
  player
    .getCurrentTime()
    .then(seconds => {
      localStorage.setItem('currentTime', seconds);
    })
    
}

