const audioElement = document.getElementById('audio-element');
const playbtn= document.getElementById('play-btn');
const pausebtn = document.getElementById('pause-btn');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.getElementById('progress-bar');
const songList = document.getElementById('song-list');
const songInfoTitle = document.getElementById('song-title');
const songInfoArtist = document.getElementById('song-artist');
const songInfoAlbum = document.getElementById('song-album');

let currentSong = 0;
let songs = [
    { title: 'Blinding Lights', artist: 'The Weekend', album: 'Album 1', src:'.mpfilesmp files/The Weeknd - Blinding Lights Mp3 Song Download(OyeDjSurendra.Com).mp3' },
    { title: '', artist: 'Artist 2', album: 'Album 2', src: 'song2.mp3' },
    { title: 'Song 3', artist: 'Artist 3', album: 'Album 3', src: 'song3.mp3' },
    // add more songs to the playlist
];

// populate song list
songs.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = song.title;
    listItem.addEventListener('click', () => {
        currentSong = index;
        updateSongInfo();
        audioElement.src = song.src;
        audioElement.play();
    });
    songList.appendChild(listItem);
});

// update song info
function updateSongInfo() {
    const currentSongInfo = songs[currentSong];
    songInfoTitle.textContent = currentSongInfo.title;
    songInfoArtist.textContent = currentSongInfo.artist;
    songInfoAlbum.textContent = currentSongInfo.album;
}

// Add event listeners
(document.getElementById('play-btn')).addEventListener('click', playAudio);
(document.getElementById('pause-btn')).addEventListener('click', pauseAudio);
stopBtn.addEventListener('click', stopAudio);
volumeControl.addEventListener('input', adjustVolume);

// Audio playback functions
function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function adjustVolume() {
    audio.volume = volumeControl.value / 100;
}

// Load audio file
audio.src = 'path/to/audio/file.mp3';
// Select navigation buttons
const homeBtn = document.querySelector('.home-btn');
const playlistBtn = document.querySelector('.playlist-btn');
const musicPlayerBtn = document.querySelector('.music-player-btn');

// Add event listeners
homeBtn.addEventListener('click', () => {
    // Show home section and hide other sections
    homeSection.classList.add('active');
    playlistSection.classList.remove('active');
    musicPlayerSection.classList.remove('active');
});

playlistBtn.addEventListener('click', () => {
    // Show playlist section and hide other sections
    playlistSection.classList.add('active');
    homeSection.classList.remove('active');
    musicPlayerSection.classList.remove('active');
});

musicPlayerBtn.addEventListener('click', () => {
    // Show music player section and hide other sections
    musicPlayerSection.classList.add('active');
    homeSection.classList.remove('active');
    playlistSection.classList.remove('active');
});

// Select audio element and buttons
const audio = document.getElementById('audio-source');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

// Add event listeners
(document.getElementById('play-btn')).addEventListener('click', playAudio);
(document.getElementById('pause-btn')).addEventListener('click', pauseAudio);
stopBtn.addEventListener('click', stopAudio);

// Audio playback functions
function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

// Select playlist items
const playlistItems = document.querySelectorAll('.playlist-item');

// Add event listeners
playlistItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Play selected music
        audio.src = item.dataset.src;
        playAudio();
    });
});