//1. Generate color function
//2. Apply thecolor to the div + the innertext on button click
//3. Apply color on "Spacebar" press
//4. Copy to clipboard
const colorCards = document.querySelectorAll('.color-card');
const btnEl = document.getElementById('btn');

colorCards.forEach(card => {
    card.addEventListener('click', () => {
    copyClipboard(card.innerText);
    });
});

document.addEventListener('keydown', e => {
    if(e.key === ' ') {
        createPalette();
    }
});

btnEl.addEventListener('click', () => {
    createPalette()
});


async function copyClipboard(color) {
    await navigator.clipboard.writeText(color);

    const notificationEl = document.createElement('div');

    notificationEl.className = 'fixed top-4 z-20 bg-slate-800 rounded-full py-4 px-20 text-white   ';

    notificationEl.innerHTML = `Color <b>${color}</b> is copied to the clipboard!`;
 
    document.body.appendChild(notificationEl);     
    
    setTimeout(() => {
        notificationEl.remove(); 
    }, 3000)

}


function createPalette() {
    colorCards.forEach(card => {
        const newColor = generateColor();

        card.querySelector('div').style.background = newColor;
        card.querySelector('p').innerText = newColor;
    });
};


function generateColor() {
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

let color = '#';

for (let i = 0; i < 6; i++) {
color += hexArray[Math.floor(Math.random() * hexArray.length)];
}

return color;
}




 