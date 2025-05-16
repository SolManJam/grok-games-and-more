let remainingPresidents = [];
let placedPresidents = [];
let correctSlots = [];
let misses = {};
let gridSlots = [];
let currentClone = null;
let currentElement = null;
let isPhoneMode = window.matchMedia("(max-width: 600px)").matches;

const testButton = document.getElementById('test-button');
const finalTestButton = document.getElementById('final-test-button');
let lineupCardEl = document.getElementById('right-list');
let listsWrapper = document.getElementById('lists-wrapper');
let finalList = document.getElementById('final-list');
let finalListItems = document.getElementById('final-list-items');

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
    isPhoneMode = window.matchMedia("(max-width: 600px)").matches;
    startAll32Mode();
    // Add debug element for touch coordinates
    const debugTouch = document.createElement('div');
    debugTouch.id = 'debug-touch';
    debugTouch.style.position = 'fixed';
    debugTouch.style.top = '10px';
    debugTouch.style.left = '10px';
    debugTouch.style.background = 'white';
    debugTouch.style.padding = '5px';
    debugTouch.style.zIndex = '10000';
    debugTouch.style.fontSize = '14px';
    document.body.appendChild(debugTouch);
}

function startAll32Mode() {
    remainingPresidents = shuffleArray([...presidents]);
    placedPresidents = new Array(32).fill(null);
    correctSlots = new Array(32).fill(null);
    gridSlots = isPhoneMode ? new Array(4).fill(null) : remainingPresidents.slice(0, 32).concat(new Array(32 - remainingPresidents.length).fill(null));
    if (isPhoneMode) {
        // Populate initial 4 names
        for (let i = 0; i < 4 && remainingPresidents.length > 0; i++) {
            gridSlots[i] = remainingPresidents.shift();
        }
    }
    listsWrapper.classList.remove('hidden');
    finalList.classList.remove('visible');
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
            nameDiv.addEventListener('touchend', handleTouchEnd, { passive: false });
            nameDiv.classList.add('draggable');
        } else {
            nameDiv.className = 'empty-slot';
        }
        presidentNames.appendChild(nameDiv);
    });
}

function renderLineupCard() {
    lineupCardEl.innerHTML = '';
    if (isPhoneMode) {
        for (let i = 0; i < 32; i++) {
            const slot = document.createElement('div');
            slot.className = 'slot';
            slot.dataset.index = i;
            if (placedPresidents[i]) {
                slot.classList.add('filled');
                slot.style.display = 'none'; // Hide assigned numbers
            } else {
                slot.innerHTML = `<span class="slot-number">${i + 1}</span>`;
                slot.addEventListener('dragover', e => {
                    e.preventDefault();
                    slot.querySelector('.slot-number').classList.add('highlighted');
                });
                slot.addEventListener('dragleave', () => {
                    slot.querySelector('.slot-number').classList.remove('highlighted');
                });
                slot.addEventListener('drop', handleDrop);
                slot.addEventListener('touchend', handleTouchEnd, { passive: false });
            }
            lineupCardEl.appendChild(slot);
        }
    } else {
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
                slot.addEventListener('touchend', handleTouchEnd, { passive: false });
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
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', `grid-${e.target.dataset.order}-${e.target.dataset.slotIndex}`);
}

function handleSlotDragStart(e) {
    e.dataTransfer.setData('text/plain', `slot-${e.target.dataset.index}`);
}

function handleTouchStart(e) {
    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    const element = e.target;
    const clone = element.cloneNode(true);
    clone.classList.add('dragging-clone');
    const cloneWidth = element.offsetWidth || 100;
    const cloneHeight = element.offsetHeight || 30;
    const initialX = touch.clientX - (cloneWidth / 2);
    const initialY = touch.clientY - (cloneHeight / 2);
    clone.style.position = 'fixed';
    clone.style.left = '0px';
    clone.style.top = '0px';
    clone.style.transform = `translate(${initialX}px, ${initialY}px)`;
    clone.style.zIndex = '1000';
    clone.style.opacity = '0.7';
    clone.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    clone.style.background = '#007bff';
    clone.style.color = 'white';
    clone.style.willChange = 'transform';
    clone.style.pointerEvents = 'none';
    document.body.appendChild(clone);
    element.style.opacity = '0';
    element.dataset.orderMoved = isPhoneMode ? `grid-${element.dataset.order}-${element.dataset.slotIndex}` : `grid-${element.dataset.order}-${element.dataset.slotIndex}`;
    element.dataset.cloneId = `clone-${Date.now()}`;
    clone.dataset.cloneId = element.dataset.cloneId;
    currentClone = clone;
    currentElement = element;
    document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
}

function handleSlotTouchStart(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!isPhoneMode) {
        const touch = e.touches[0];
        const element = e.target;
        element.classList.add('selected');
        const clone = element.cloneNode(true);
        clone.classList.add('dragging-clone');
        const cloneWidth = element.offsetWidth || 100;
        const cloneHeight = element.offsetHeight || 30;
        const initialX = touch.clientX - (cloneWidth / 2);
        const initialY = touch.clientY - (cloneHeight / 2);
        clone.style.position = 'fixed';
        clone.style.left = '0px';
        clone.style.top = '0px';
        clone.style.transform = `translate(${initialX}px, ${initialY}px)`;
        clone.style.zIndex = '1000';
        clone.style.opacity = '0.7';
        clone.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        clone.style.willChange = 'transform';
        clone.style.pointerEvents = 'none';
        document.body.appendChild(clone);
        element.style.opacity = '0';
        element.dataset.orderMoved = `slot-${element.dataset.index}`;
        element.dataset.cloneId = `clone-${Date.now()}`;
        clone.dataset.cloneId = element.dataset.cloneId;
        currentClone = clone;
        currentElement = element;
        document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
    }
}

function handleTouchMoveGlobal(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentClone) {
        const touch = e.touches[0];
        const x = touch.clientX - (currentClone.offsetWidth / 2);
        const y = touch.clientY - (currentClone.offsetHeight / 2);
        requestAnimationFrame(() => {
            currentClone.style.transform = `translate(${x}px, ${y}px)`;
            const debugTouch = document.getElementById('debug-touch');
            if (debugTouch) {
                debugTouch.textContent = `X: ${touch.clientX}, Y: ${touch.clientY}`;
            }
            // Highlight numbers on phone mode
            if (isPhoneMode) {
                document.querySelectorAll('#right-list .slot-number').forEach(slot => {
                    slot.classList.remove('highlighted');
                });
                let targetSlot = document.elementFromPoint(touch.clientX, touch.clientY);
                while (targetSlot && !targetSlot.classList.contains('slot')) {
                    targetSlot = targetSlot.parentElement;
                }
                if (targetSlot && !targetSlot.classList.contains('filled')) {
                    targetSlot.querySelector('.slot-number').classList.add('highlighted');
                }
            }
        });
    }
}

function handleTouchEnd(e) {
    if (currentClone) {
        currentClone.style.display = 'none'; // Temporarily hide clone
    }
    if (currentElement) {
        currentElement.style.opacity = '1';
        currentElement.classList.remove('selected');
        const movedData = currentElement.dataset.orderMoved;
        if (movedData) {
            const touch = e.changedTouches[0];
            let targetSlot = document.elementFromPoint(touch.clientX, touch.clientY);
            while (targetSlot && !targetSlot.classList.contains('slot')) {
                targetSlot = targetSlot.parentElement;
            }
            if (targetSlot) {
                const targetIndex = parseInt(targetSlot.dataset.index);
                handleDropLogic(movedData, targetIndex);
            }
            delete currentElement.dataset.orderMoved;
            delete currentElement.dataset.cloneId;
        }
        currentElement = null;
    }
    if (currentClone) {
        document.body.removeChild(currentClone);
        currentClone = null;
    }
    document.removeEventListener('touchmove', handleTouchMoveGlobal);
    document.querySelectorAll('#right-list .slot-number').forEach(slot => {
        slot.classList.remove('highlighted');
    });
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
            if (isPhoneMode) {
                gridSlots[slotIndex] = remainingPresidents.length > 0 ? remainingPresidents.shift() : null;
            } else {
                remainingPresidents = remainingPresidents.filter(p => p.order !== order);
                gridSlots[slotIndex] = null;
            }
            renderLeftList();
            renderLineupCard();
            updateTestButton();
            if (isPhoneMode && !placedPresidents.some(p => !p)) {
                showFinalList();
            }
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
    if (isPhoneMode) {
        testButton.style.display = 'none';
    } else {
        const presidentNames = document.getElementById('president-names');
        testButton.style.display = placedPresidents.some(p => !p) ? 'none' : 'block';
        presidentNames.style.display = placedPresidents.some(p => !p) ? 'grid' : 'none';
    }
}

function showFinalList() {
    listsWrapper.classList.add('hidden');
    finalList.classList.add('visible');
    finalListItems.innerHTML = '';
    placedPresidents.forEach((pres, index) => {
        if (pres) {
            const item = document.createElement('div');
            item.className = 'final-list-item';
            item.dataset.index = index;
            item.setAttribute('draggable', 'true');
            item.innerHTML = `
                <span class="slot-number">${index + 1}.</span>
                <span class="name">${renderName(pres.name)}</span>
            `;
            item.addEventListener('dragstart', handleFinalDragStart);
            item.addEventListener('dragover', e => e.preventDefault());
            item.addEventListener('drop', handleFinalDrop);
            item.addEventListener('touchstart', handleFinalTouchStart, { passive: false });
            item.addEventListener('touchend', handleFinalTouchEnd, { passive: false });
            finalListItems.appendChild(item);
        }
    });
    finalTestButton.style.display = 'block';
}

function handleFinalDragStart(e) {
    e.dataTransfer.setData('text/plain', `final-${e.target.dataset.index}`);
}

function handleFinalTouchStart(e) {
    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    const element = e.target.closest('.final-list-item');
    if (!element) return;
    element.classList.add('dragging');
    const clone = element.cloneNode(true);
    clone.classList.add('dragging-clone');
    const cloneWidth = element.offsetWidth || 200;
    const cloneHeight = element.offsetHeight || 30;
    const initialX = touch.clientX - (cloneWidth / 2);
    const initialY = touch.clientY - (cloneHeight / 2);
    clone.style.position = 'fixed';
    clone.style.left = '0px';
    clone.style.top = '0px';
    clone.style.transform = `translate(${initialX}px, ${initialY}px)`;
    clone.style.zIndex = '1000';
    clone.style.opacity = '0.7';
    clone.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    clone.style.willChange = 'transform';
    clone.style.pointerEvents = 'none';
    document.body.appendChild(clone);
    element.style.opacity = '0.5';
    element.dataset.orderMoved = `final-${element.dataset.index}`;
    element.dataset.cloneId = `clone-${Date.now()}`;
    clone.dataset.cloneId = element.dataset.cloneId;
    currentClone = clone;
    currentElement = element;
    document.addEventListener('touchmove', handleFinalTouchMoveGlobal, { passive: false });
}

function handleFinalTouchMoveGlobal(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentClone) {
        const touch = e.touches[0];
        const x = touch.clientX - (currentClone.offsetWidth / 2);
        const y = touch.clientY - (currentClone.offsetHeight / 2);
        requestAnimationFrame(() => {
            currentClone.style.transform = `translate(${x}px, ${y}px)`;
            const debugTouch = document.getElementById('debug-touch');
            if (debugTouch) {
                debugTouch.textContent = `X: ${touch.clientX}, Y: ${touch.clientY}`;
            }
        });
    }
}

function handleFinalTouchEnd(e) {
    if (currentClone) {
        document.body.removeChild(currentClone);
        currentClone = null;
    }
    if (currentElement) {
        currentElement.style.opacity = '1';
        currentElement.classList.remove('dragging');
        const movedData = currentElement.dataset.orderMoved;
        if (movedData) {
            const touch = e.changedTouches[0];
            let targetItem = document.elementFromPoint(touch.clientX, touch.clientY);
            while (targetItem && !targetItem.classList.contains('final-list-item')) {
                targetItem = targetItem.parentElement;
            }
            if (targetItem && targetItem !== currentElement) {
                const targetIndex = parseInt(targetItem.dataset.index);
                const sourceIndex = parseInt(movedData.split('-')[1]);
                [placedPresidents[sourceIndex], placedPresidents[targetIndex]] = 
                [placedPresidents[targetIndex], placedPresidents[sourceIndex]];
                showFinalList();
            }
            delete currentElement.dataset.orderMoved;
            delete currentElement.dataset.cloneId;
        }
        currentElement = null;
    }
    document.removeEventListener('touchmove', handleFinalTouchMoveGlobal);
    const debugTouch = document.getElementById('debug-touch');
    if (debugTouch) {
        debugTouch.textContent = '';
    }
}

function handleFinalDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    let targetItem = e.target;
    while (targetItem && !targetItem.classList.contains('final-list-item')) {
        targetItem = targetItem.parentElement;
    }
    if (targetItem) {
        const targetIndex = parseInt(targetItem.dataset.index);
        const sourceIndex = parseInt(data.split('-')[1]);
        if (sourceIndex !== targetIndex) {
            [placedPresidents[sourceIndex], placedPresidents[targetIndex]] = 
            [placedPresidents[targetIndex], placedPresidents[sourceIndex]];
            showFinalList();
        }
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
    if (isPhoneMode) {
        if (allCorrect) {
            setTimeout(showCongratulations, 2000);
        } else {
            finalList.classList.remove('visible');
            listsWrapper.classList.remove('hidden');
            placedPresidents = placedPresidents.map((pres, i) => {
                if (correctSlots[i] !== true) {
                    if (pres) {
                        remainingPresidents.push(pres);
                    }
                    correctSlots[i] = null;
                    return null;
                }
                return pres;
            });
            // Repopulate gridSlots with up to 4 names
            gridSlots = new Array(4).fill(null);
            for (let i = 0; i < 4 && remainingPresidents.length > 0; i++) {
                gridSlots[i] = remainingPresidents.shift();
            }
            renderLeftList();
            renderLineupCard();
            updateTestButton();
        }
    } else {
        renderLineupCard();
        if (allCorrect) {
            setTimeout(showCongratulations, 2000);
        } else {
            setTimeout(() => {
                placedPresidents = placedPresidents.map((pres, i) => {
                    if (correctSlots[i] !== true) {
                        if (pres) {
                            remainingPresidents.push(pres);
                            const emptyIndex = gridSlots.indexOf(null);
                            if (emptyIndex !== -1) {
                                gridSlots[emptyIndex] = pres;
                            } else {
                                gridSlots.push(pres);
                            }
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
    finalTestButton.addEventListener('click', checkOrder);
    initGame();
});