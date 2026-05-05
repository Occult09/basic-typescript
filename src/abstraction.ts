/* 
1. abstract interface
2. abstract class
*/

// abstract interface
// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play() {
//         console.log('Music is playing');
//     }
//     pause() {
//         console.log('Music is paused');
//     }
//     stop() {
//         console.log('Music is stopped');
//     }
// }

// const occultPlayer = new MusicPlayer();

// occultPlayer.play();

// abstract class
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log("Playing Music");
    }
    pause(): void {
        console.log('Music Paused');
    }
    stop(): void {
        console.log('Music stopped');
    }
}

const occult = new MusicPlayer();
occult.play()