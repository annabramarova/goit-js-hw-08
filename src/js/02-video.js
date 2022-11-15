import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
    
player.getVideoTitle().then(function(title) {
        console.log('Title:', title);
    });

player.on('timeupdate', throttle(onPlayUpdate, 1000));

function onPlayUpdate (e) {
    localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, e.seconds);
}
let time = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);
    
player
    .setCurrentTime(time)
    .catch(function (error) {
        console.error(error)
    });