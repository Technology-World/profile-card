const timeEl = document.getElementById('epoch-time');

function updateTime() {
    const now = Date.now();
    timeEl.textContent = now;
    timeEl.setAttribute('datetime', new Date(now).toISOString());
}

updateTime();
setInterval(updateTime, 1000);