console.log('Welcome to Spotify');

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Liggi - Ritviz", filePath: "./songs/1.mp3", coverPath: "../covers/1.jpg" },
    { songName: "Shy - Emiway Bantai", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
    { songName: "Måneskin - Beggin", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
    { songName: "Veer-Zara - Jaanam Dekh Lo Mit Gayi", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
    { songName: "Illegal Weapon - Garry Sandhu & Jasmine", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
    { songName: "Katy Perry - Roar", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
    { songName: "Ed Sheeran - Shape of You", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg" },
    { songName: "The Chainsmokers - Don't Let Me Down", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg" },
    { songName: "Ed Sheeran - Bad Habits", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg" },
    { songName: "Senorita", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg" },
]

songItems.forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

// Listen to event 
audioElement.addEventListener('timeupdate', function () {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', function () {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = "./songs/${songIndex+1}.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;  
    }
        audioElement.src = "./songs/ $ {songIndex + 1}.mp3";
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex<=0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;  
    }
        audioElement.src = "./songs/${songIndex+1}.mp3";
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})