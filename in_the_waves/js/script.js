function formatTime(seconds) {
    if (!isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function initPlayPause() {
    const audio = document.querySelector('#player');
    const btn = document.querySelector('.play-pause-btn');
    const icon = btn ? btn.querySelector('.play-icon') : null;
    if (!audio || !btn || !icon) return;

    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', () => {
        btn.classList.add('playing');
        btn.setAttribute('aria-label', 'Pause');
        icon.innerHTML = '&#10074;&#10074;';
    });

    audio.addEventListener('pause', () => {
        btn.classList.remove('playing');
        btn.setAttribute('aria-label', 'Play');
        icon.innerHTML = '&#9658;';
    });

    audio.addEventListener('ended', () => {
        btn.classList.remove('playing');
        btn.setAttribute('aria-label', 'Play');
        icon.innerHTML = '&#9658;';
    });
}

function initProgressBar() {
    const audio = document.querySelector('#player');
    const progress = document.querySelector('.progress-fill');
    if (!audio || !progress) return;

    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${pct}%`;
    });
}

function initSeek() {
    const audio = document.querySelector('#player');
    const bar = document.querySelector('.progress-bar');
    if (!audio || !bar) return;

    bar.addEventListener('click', e => {
        if (!audio.duration) return;
        const rect = bar.getBoundingClientRect();
        const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
        audio.currentTime = pct * audio.duration;
    });
}

function followWave() {
    const blob = "XQQ4RWshRzA6bn1TVSd8NkIiZRBAO3IwYG9OEFY6ZDBvOjxASCFmfnthSx9jMSowOyh5Hlw/eyV0NjNeZT08NlUqKENNJnE2ViFcXTB8fTcyK0ofUjtLKk1jOkRKOlchVmNJR2kzPDJVKz5DO30mZD1lIxBCCWEpSSppBXshVjFvIy8QSz10Im5uPkQ/IFwlTyAyQzo/UC1gPW1DcTszK0IgUm0=";
    const raw = atob(blob);
    const bytes = Uint8Array.from(raw, c => c.charCodeAt(0));
    const scrambled = [];
    for (let i = 1; i < bytes.length; i += 2) {
        scrambled.push(bytes[i]);
    }

    const key = "N0RD";
    let message = "";
    for (let i = 0; i < scrambled.length; i++) {
        const keyByte = key.charCodeAt(i % key.length);
        message += String.fromCharCode(scrambled[i] ^ keyByte);
    }

    return message;
}

function initVolumeControl() {
    const audio = document.querySelector('#player');
    const slider = document.querySelector('.volume-slider');
    if (!audio || !slider) return;

    audio.volume = slider.value / 100;

    slider.addEventListener('input', () => {
        audio.volume = slider.value / 100;
    });
}

function initTimeDisplay() {
    const audio = document.querySelector('#player');
    const currentEl = document.querySelector('.time-current');
    const durationEl = document.querySelector('.time-duration');
    if (!audio || !currentEl || !durationEl) return;

    const updateDuration = () => {
        if (isFinite(audio.duration) && audio.duration > 0) {
            durationEl.textContent = formatTime(audio.duration);
        }
    };

    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    updateDuration();

    audio.addEventListener('timeupdate', () => {
        currentEl.textContent = formatTime(audio.currentTime);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initPlayPause();
    initProgressBar();
    initSeek();
    initVolumeControl();
    initTimeDisplay();
    initMobileTooltips();
});