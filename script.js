const chatBox = document.getElementById('message');
const chatFeed = document.getElementById('feed');

const send = () => {
    chatFeed.innerHTML += 
    `
        <div class="chat"><h4>You</h4><p>${chatBox.value}</p></div>
    `;
    chatBox.value = '';
}


chatBox.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        send();
    }
});