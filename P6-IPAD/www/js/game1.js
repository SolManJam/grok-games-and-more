let currentSet = [];
let placedPresidents = [];
let completedOrders = new Set();
let correctSlots = [];
let misses = {};

const topArrayEl = document.getElementById('top-array');
const testButton = document.getElementById('test-button');
let lineupCardEl = document.getElementById('lineup-card');

function initGame() {
    misses = {};
    completedOrders.clear();
    topArrayEl.style.display = 'block';
    renderTopArray();
    loadNextSet();
}

function renderTopArray() {
    topArrayEl.innerHTML = '';
    const totalPresidents = 32;  // Changed from 31 to 32
    const overlap = 0.2;
    const cardWidth = 50;
    const effectiveWidth = cardWidth * (1 - overlap);
    const totalWidth = effectiveWidth * (totalPresidents - 1) + cardWidth;
    topArrayEl.style.width = `${totalWidth}px`;
    for (let i = 1; i <= totalPresidents; i++) {
        const leftPosition = (i - 1) * effectiveWidth;
        if (completedOrders.has(i)) {
            const pres = presidents.find(p => p.order === i);
            const img = document.createElement('img');
            img.src = pres.image;
            img.style.left = `${leftPosition}px`;
            img.style.zIndex = i;
            topArrayEl.appendChild(img);
        } else {
            const placeholder = document.createElement('div');
            placeholder.className = 'top-placeholder';
            placeholder.style.left = `${leftPosition}px`;
            placeholder.style.zIndex = i;
            topArrayEl.appendChild(placeholder);
        }
    }
}

function loadNextSet() {
    const remaining = presidents.filter(p => !completedOrders.has(p.order));
    if (remaining.length === 0) return showCongratulations();
    currentSet = shuffleArray(remaining).slice(0, Math.min(9, remaining.length));
    placedPresidents = new Array(currentSet.length).fill(null);
    correctSlots = new Array(currentSet.length).fill(null);
    renderGrid();
    renderLineupCard();
    updateTestButton();
}

function renderGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    currentSet.forEach(pres => {
        const img = document.createElement('img');
        img.src = pres.image;
        img.draggable = true;
        img.dataset.order = pres.order;
        img.addEventListener('dragstart', handleDragStart);
        img.addEventListener('touchstart', handleTouchStart, { passive: false });
        grid.appendChild(img);
    });
}

function renderLineupCard() {
    lineupCardEl.innerHTML = '';
    for (let i = 0; i < placedPresidents.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.dataset.index = i;
        if (placedPresidents[i]) {
            slot.classList.add('filled');
            if (correctSlots[i] === true) slot.classList.add('correct');
            else if (correctSlots[i] === false) slot.classList.add('incorrect');
        }
        let termDatesHtml = '';
        if (placedPresidents[i] && correctSlots[i] === true) {
            const term = placedPresidents[i].name === "Grover Cleveland" ? getClevelandTerm() : placedPresidents[i].term;
            termDatesHtml = `<span class="term-dates">${term}</span>`;
        }
        slot.innerHTML = `
            <span class="slot-number">${correctSlots[i] === true ? placedPresidents[i].number : ''}</span>
            <span class="name">${placedPresidents[i] ? placedPresidents[i].name : ''}</span>
            ${termDatesHtml}
        `;
        if (placedPresidents[i]) {
            slot.draggable = true;
            slot.addEventListener('dragstart', handleSlotDragStart);
            slot.addEventListener('touchstart', handleSlotTouchStart, { passive: false });
        }
        slot.addEventListener('dragover', e => e.preventDefault());
        slot.addEventListener('drop', handleDrop);
        slot.addEventListener('touchend', handleTouchEnd);
        lineupCardEl.appendChild(slot);
    }
}

function getClevelandTerm() {
    const cleveland = placedPresidents.find(p => p && p.name === "Grover Cleveland");
    const harrison = placedPresidents.find(p => p && p.name === "Benjamin Harrison");
    if (!harrison || !cleveland) return cleveland ? cleveland.term : '';
    const clevelandIndex = placedPresidents.indexOf(cleveland);
    const harrisonIndex = placedPresidents.indexOf(harrison);
    return clevelandIndex < harrisonIndex ? "1885 – 1889" : "1893 – 1897";
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', `grid-${e.target.dataset.order}`);
}

function handleSlotDragStart(e) {
    e.dataTransfer.setData('text/plain', `slot-${e.target.dataset.index}`);
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    e.target.dataset.startX = touch.clientX;
    e.target.dataset.startY = touch.clientY;
    e.target.dataset.orderMoved = `grid-${e.target.dataset.order}`;
}

function handleSlotTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    e.target.dataset.startX = touch.clientX;
    e.target.dataset.startY = touch.clientY;
    e.target.dataset.orderMoved = `slot-${e.target.dataset.index}`;
}

function handleTouchEnd(e) {
    const movedData = e.target.dataset.orderMoved;
    let targetSlot = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    while (targetSlot && !targetSlot.classList.contains('slot')) {
        targetSlot = targetSlot.parentElement;
    }
    if (targetSlot) {
        const targetIndex = parseInt(targetSlot.dataset.index);
        handleDropLogic(movedData, targetIndex);
    }
    e.target.style.position = '';
    e.target.style.left = '';
    e.target.style.top = '';
}

function handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    let targetSlot = e.target;
    while (targetSlot && !targetSlot.classList.contains('slot')) {
        targetSlot = targetSlot.parentElement;
    }
    if (targetSlot) {
        const targetIndex = parseInt(targetSlot.dataset.index);
        handleDropLogic(data, targetIndex);
    }
}

function handleDropLogic(data, targetIndex) {
    if (data.startsWith('grid-')) {
        const order = parseInt(data.split('-')[1]);
        const pres = presidents.find(p => p.order === order);
        if (!placedPresidents[targetIndex]) {
            placedPresidents[targetIndex] = pres;
            currentSet = currentSet.filter(p => p.order !== order);
            renderGrid();
            renderLineupCard();
            updateTestButton();
        }
    } else if (data.startsWith('slot-')) {
        const sourceIndex = parseInt(data.split('-')[1]);
        if (sourceIndex !== targetIndex) {
            if (placedPresidents[targetIndex]) {
                [placedPresidents[sourceIndex], placedPresidents[targetIndex]] = 
                [placedPresidents[targetIndex], placedPresidents[sourceIndex]];
            } else {
                placedPresidents[targetIndex] = placedPresidents[sourceIndex];
                placedPresidents[sourceIndex] = null;
            }
            renderLineupCard();
            updateTestButton();
        }
    }
}

function updateTestButton() {
    testButton.disabled = placedPresidents.some(p => !p);
}

function checkOrder() {
    const sortedPres = [...placedPresidents].sort((a, b) => a.order - b.order);
    let allCorrect = true;
    for (let i = 0; i < placedPresidents.length; i++) {
        const isCorrect = placedPresidents[i] === sortedPres[i];
        correctSlots[i] = isCorrect;
        if (!isCorrect && placedPresidents[i]) {
            allCorrect = false;
            misses[placedPresidents[i].name] = (misses[placedPresidents[i].name] || 0) + 1;
        }
    }
    renderLineupCard();
    if (allCorrect) {
        setTimeout(() => {
            placedPresidents.forEach(p => completedOrders.add(p.order));
            loadNextSet();
            renderTopArray();
        }, 2000);
    } else {
        setTimeout(() => {
            placedPresidents = placedPresidents.map((pres, i) => {
                if (correctSlots[i] !== true) {
                    if (pres) currentSet.push(pres);
                    correctSlots[i] = null;
                    return null;
                }
                return pres;
            });
            renderGrid();
            renderLineupCard();
            updateTestButton();
        }, 3000);
    }
}

function showCongratulations() {
    const congratsScreen = document.createElement('div');
    congratsScreen.className = 'congrats-popup';
    const message = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = 'Congratulations! You Win!';
    message.appendChild(heading);

    const totalMisses = Object.values(misses).reduce((sum, count) => sum + count, 0);
    const percentage = Math.round((31 / (31 + totalMisses)) * 100);
    const percentageText = document.createElement('p');
    percentageText.className = 'accuracy';
    percentageText.textContent = `Accuracy: ${percentage}%`;
    message.appendChild(percentageText);

    if (totalMisses > 0) {
        const mostMissedHeading = document.createElement('p');
        mostMissedHeading.textContent = 'Most missed:';
        message.appendChild(mostMissedHeading);

        const missedDetails = Object.entries(misses).map(([name, count]) => {
            const pres = presidents.find(p => p.name === name);
            return { name, count, number: pres.number, term: pres.term };
        });
        missedDetails.sort((a, b) => b.count - a.count || a.number - b.number);
        const topMissed = missedDetails.slice(0, 3);

        topMissed.forEach(missed => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${missed.name}</strong> <span class="cursive-text">${getOrdinal(missed.number)} President</span><br>served ${formatTerm(missed.term)}`;
            message.appendChild(p);
        });
    }

    const buttons = document.createElement('div');
    buttons.className = 'congrats-buttons';
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
        congratsScreen.remove();
        initGame();
    });
    buttons.appendChild(playAgainButton);

    if (percentage >= 80) {
        const tryAll31Button = document.createElement('button');
        tryAll31Button.textContent = 'Try all 31';
        tryAll31Button.addEventListener('click', () => {
            congratsScreen.remove();
            window.location.href = 'game2.html';
        });
        buttons.appendChild(tryAll31Button);
    }

    message.appendChild(buttons);
    congratsScreen.appendChild(message);
    document.body.appendChild(congratsScreen);

    if (percentage === 100) createConfetti(message);
}

let cheatCodeBuffer = '';
function handleCheatCode(e) {
    cheatCodeBuffer += e.key.toUpperCase();
    if (cheatCodeBuffer.endsWith('HINT')) {
        topArrayEl.style.display = topArrayEl.style.display === 'none' ? 'block' : 'none';
        cheatCodeBuffer = '';
    } else if (cheatCodeBuffer.length > 4) {
        cheatCodeBuffer = cheatCodeBuffer.slice(-4);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    testButton.addEventListener('click', checkOrder);
    document.addEventListener('keydown', handleCheatCode);
    initGame();
});