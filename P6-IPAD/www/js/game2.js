let remainingPresidents = [];
let placedPresidents = [];
let correctSlots = [];
let misses = {};

const testButton = document.getElementById('test-button');
let lineupCardEl = document.getElementById('right-list');

function abbreviateName(name) {
    const parts = name.split(' ');
    if (parts.length > 2) {
        return parts[0][0] + '. ' + parts[1][0] + '. ' + parts[parts.length - 1];
    }
    return name;
}

function renderName(name) {
    if (name && name.length > 20) { // Increased from 15 to 20 for longer names
        return abbreviateName(name);
    }
    return name || '';
}

function initGame() {
    misses = {};
    startAll32Mode();
}

function startAll32Mode() {
    remainingPresidents = shuffleArray([...presidents]);
    placedPresidents = new Array(32).fill(null);
    correctSlots = new Array(32).fill(null);
    renderLeftList();
    renderLineupCard();
    updateTestButton();
}

function renderLeftList() {
    const presidentNames = document.getElementById('president-names');
    presidentNames.innerHTML = '';
    remainingPresidents.forEach(pres => {
        const nameDiv = document.createElement('div');
        nameDiv.textContent = renderName(pres.name);
        nameDiv.setAttribute('draggable', 'true');
        nameDiv.dataset.order = pres.order;
        nameDiv.addEventListener('dragstart', handleDragStart);
        nameDiv.addEventListener('touchstart', handleTouchStart, { passive: false });
        presidentNames.appendChild(nameDiv);
    });
}

function renderLineupCard() {
    lineupCardEl.innerHTML = '';
    for (let i = 0; i < 32; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.dataset.index = i;
        if (placedPresidents[i]) {
            slot.classList.add('filled');
            if (correctSlots[i] === true) slot.classList.add('correct');
            else if (correctSlots[i] === false) slot.classList.add('incorrect');
            slot.setAttribute('draggable', 'true');
            slot.addEventListener('dragstart', handleSlotDragStart);
            slot.addEventListener('touchstart', handleSlotTouchStart, { passive: false });
        }
        slot.innerHTML = `
            <span class="slot-number">${i + 1}.</span>
            <span class="name">${placedPresidents[i] ? renderName(placedPresidents[i].name) : ''}</span>
        `;
        slot.addEventListener('dragover', e => e.preventDefault());
        slot.addEventListener('drop', handleDrop);
        slot.addEventListener('touchend', handleTouchEnd);
        lineupCardEl.appendChild(slot);
    }
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
    e.target.dataset.orderMoved = `grid-${e.target.dataset.order}`;
}

function handleSlotTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
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
    delete e.target.dataset.orderMoved;
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
            remainingPresidents = remainingPresidents.filter(p => p.order !== order);
            renderLeftList();
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
            renderLeftList();
            renderLineupCard();
            updateTestButton();
        }
    }
}

function updateTestButton() {
    const presidentNames = document.getElementById('president-names');
    const testButton = document.getElementById('test-button');
    if (!placedPresidents.some(p => !p)) {
        presidentNames.style.display = 'none';
        testButton.style.display = 'block';
    } else {
        presidentNames.style.display = 'grid';
        testButton.style.display = 'none';
    }
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
        setTimeout(showCongratulations, 2000);
    } else {
        setTimeout(() => {
            placedPresidents = placedPresidents.map((pres, i) => {
                if (correctSlots[i] !== true) {
                    if (pres) remainingPresidents.push(pres);
                    correctSlots[i] = null;
                    return null;
                }
                return pres;
            });
            renderLeftList();
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
    const percentage = Math.round((32 / (32 + totalMisses)) * 100);
    const percentageText = document.createElement('p');
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
            p.innerHTML = `<strong>${missed.name}</strong> <span>${getOrdinal(missed.number)} President</span><br>served ${formatTerm(missed.term)}`;
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

    const mainMenuButton = document.createElement('button');
    mainMenuButton.textContent = 'Main Menu';
    mainMenuButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    buttons.appendChild(mainMenuButton);

    message.appendChild(buttons);
    congratsScreen.appendChild(message);
    document.body.appendChild(congratsScreen);
}

document.addEventListener('DOMContentLoaded', () => {
    testButton.addEventListener('click', checkOrder);
    initGame();
});