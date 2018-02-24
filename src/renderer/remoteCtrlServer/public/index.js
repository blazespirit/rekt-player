const gestureEl = document.getElementById('gesture');

const gesture = new Hammer(gestureEl);
const socket = io();

gesture.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// set press trigger duration to 500ms.
gesture.get('press').set({ time: 500 });
gesture.get('pinch').set({ enable: true });

// disable unused gestures.
gesture.get('pan').set({ enable: false });
gesture.get('rotate').set({ enable: false });

// send trigerred event to v-player.
gesture.on('swipeleft', (ev) => {
    gestureEl.textContent = "swipe left";
    socket.emit('gesture', 'swipeLeft');
});

gesture.on('swiperight', (ev) => {
    gestureEl.textContent = "swipe right";
    socket.emit('gesture', 'swipeRight');
});

gesture.on('swipeup', (ev) => {
    gestureEl.textContent = "swipe up";
    socket.emit('gesture', 'swipeUp');
});

gesture.on('swipedown', (ev) => {
    gestureEl.textContent = "swipe down";
    socket.emit('gesture', 'swipeDown');
});

gesture.on('tap', (ev) => {
    gestureEl.textContent = "tap";
    socket.emit('gesture', 'tap');
});

gesture.on('press', (ev) => {
    gestureEl.textContent = "press";
    socket.emit('gesture', 'press');
});

gesture.on('pinchend', (ev) => {
    gestureEl.textContent = "pinchEnd";
    socket.emit('gesture', 'pinch');
});

// Add event listener for shutdown-icon
document.getElementById('shutdown').addEventListener("click", function () {
    showPopup();
});

document.getElementById('confirm').addEventListener("click", function () {
    gestureEl.textContent = "System Shutdown...";
    socket.emit('shutdown');
    hidePopup();
});

document.getElementById('cancel').addEventListener("click", function () {
    hidePopup();
});

function showPopup() {
    let popupEl = document.getElementById('popup');
    popupEl.className = "show";
}

function hidePopup() {
    let popupEl = document.getElementById('popup');
    popupEl.className = "";
}