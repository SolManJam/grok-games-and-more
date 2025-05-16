let remainingPresidents = [];
let placedPresidents = [];
let correctSlots = [];
let misses = {};
let gridSlots = [];

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
    if (name && name.length > 20) {
        return abbreviateName(name);
    }
    return name || '';
}

function initGame() {
    misses = {};
    startAll32Mode();
    // Add a debug element to show touch coordinates
    const debugTouch = document.createElement('div');
    debugTouch.id = 'debug-touch';
    debugTouch.style.position = 'fixed';
    debugTouch.style.top = '10px';
    debugTouch.style.left = '10px';
    debugTouch.style.background = 'white';
    debugTouch.style.padding = '5px';
    debugTouch.style.zIndex = '10000';
    document.body.appendChild(debugTouch);
}

function startAll32Mode() {
    remainingPresidents = shuffleArray([...presidents]);
    placedPresidents = new Array(32).fill(null);
    correctSlots = new Array(32).fill(null);
    gridSlots = remainingPresidents.slice(0, 32).concat(new Array(32 - remainingPresidents.length).fill(null));
    renderLeftList();
    renderLineupCard();
    updateTestButton();
}

function renderLeftList() {
    const presidentNames = document.getElementById('president-names');
    presidentNames.innerHTML = '';
    gridSlots.forEach((pres, index) => {
        const nameDiv = document.createElement('div');
        if (pres) {
            nameDiv.textContent = renderName(pres.name);
            nameDiv.setAttribute('draggable', 'true');
            nameDiv.dataset.order = pres.order;
            nameDiv.dataset.slotIndex = index;
            nameDiv.addEventListener('dragstart', handleDragStart);
            nameDiv.addEventListener('touchstart', handleTouchStart, { passive: false });
            nameDiv.classList.add('draggable');
        } else {
            nameDiv.className = 'empty-slot';
        }
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
        slot.addEventListener('touchend', handleTouchEnd, { passive: false });
        lineupCardEl.appendChild(slot);
    }
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', `grid-${e.target.dataset.order}-${e.target.dataset.slotIndex}`);
}

function handleSlotDragStart(e) {
    e.dataTransfer.setData('text/plain', `slot-${e.target.dataset.index}`);
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const element = e.target;
    // Create a clone for visual dragging
    const clone = element.cloneNode(true);
    clone.classList.add('dragging-clone');
    clone.style.position = 'fixed';
    clone.style.left = '0px';
    clone.style.top = '0px';
    clone.style.transform = `translate(${touch.clientX - 50}px, ${touch.clientY - 15}px)`;
    clone.style.zIndex = '1000';
    clone.style.opacity = '0.7';
    clone.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'; // For visibility
    clone.style.willChange = 'transform'; // Optimize rendering
    clone.style.pointerEvents = 'none'; // Prevent interference
    document.body.appendChild(clone);
    // Hide original but keep its place
    element.style.opacity = '0';
    element.dataset.orderMoved = `grid-${element.dataset.order}-${element.dataset.slotIndex}`;
    element.dataset.cloneId = `clone-${Date.now()}`;
    clone.dataset.cloneId = element.dataset.cloneId;
}

function handleSlotTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const element = e.target;
    // Create a clone for visual dragging
    const clone = element.cloneNode(true);
    clone.classList.add('dragging-clone');
    clone.style.position = 'fixed';
    clone.style.left = '0px';
    clone.style.top = '0px';
    clone.style.transform = `translate(${touch.clientX - 50}px, ${touch.clientY - 15}px)`;
    clone.style.zIndex = '1000';
    clone.style.opacity = '0.7';
    clone.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'; // For visibility
    clone.style.willChange = 'transform'; // Optimize rendering
    clone.style.pointerEvents = 'none'; // Prevent interference
    document.body.appendChild(clone);
    // Hide original but keep its place
    element.style.opacity = '0';
    element.dataset.orderMoved = `slot-${element.dataset.index}`;
    element.dataset.cloneId = `clone-${Date.now()}`;
    clone.dataset.cloneId = element.dataset.cloneId;
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const clone = document.querySelector(`.dragging-clone[data-clone-id="${e.target.dataset.cloneId}"]`);
    if (clone) {
        const x = touch.clientX - 50;
        const y = touch.clientY - 15;
        clone.style.transform = `translate(${x}px, ${y}px)`;
        // Update debug element with touch coordinates
        const debugTouch = document.getElementById('debug-touch');
        if (debugTouch) {
            debugTouch.textContent = `X: ${touch.clientX}, Y: ${touch.clientY}`;
        }
    }
}

function handleTouchEnd(e) {
    const element = e.target;
    const clone = document.querySelector(`.dragging-clone[data-clone-id="${element.dataset.cloneId}"]`);
    if (clone) {
        document.body.removeChild(clone);
    }
    element.style.opacity = '1';
    const movedData = element.dataset.orderMoved;
    if (!movedData) return;
    const touch = e.changedTouches[0];
    let targetSlot = document.elementFromPoint(touch.clientX, touch.clientY);
    while (targetSlot && !targetSlot.classList.contains('slot')) {
        targetSlot = targetSlot.parentElement;
    }
    if (targetSlot) {
        const targetIndex = parseInt(targetSlot.dataset.index);
        handleDropLogic(movedData, targetIndex);
    }
    delete element.dataset.orderMoved;
    delete element.dataset.cloneId;
    // Clear debug element
    const debugTouch = document.getElementById('debug-touch');
    if (debugTouch) {
        debugTouch.textContent = '';
    }
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
        const [_, orderStr, slotIndexStr] = data.split('-');
        const order = parseInt(orderStr);
        const slotIndex = parseInt(slotIndexStr);
        const pres = presidents.find(p => p.order === order);
        if (!placedPresidents[targetIndex]) {
            placedPresidents[targetIndex] = pres;
            remainingPresidents = remainingPresidents.filter(p => p.order !== order);
            gridSlots[slotIndex] = null;
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
                    if (pres) {
                        const emptyIndex = gridSlots.indexOf(null);
                        if (emptyIndex !== -1) {
                            gridSlots[emptyIndex] = pres;
                        } else {
                            gridSlots.push(pres);
                        }
                        remainingPresidents.push(pres);
                    }
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