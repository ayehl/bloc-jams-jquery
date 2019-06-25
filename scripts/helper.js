class Helper {
    playPauseAndUpdate(song) {
    player.playPause(song);
    let totalTime = player.currentlyPlaying.duration;
    $('#time-control .total-time').html(totalTime);
    }
  }

const helper = new Helper();
