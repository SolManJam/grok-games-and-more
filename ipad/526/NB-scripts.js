
        const presidents = [
            { name: "Washington", suit: "other", rank: 1, term: "1789-1797" },
            { name: "J. Adams", suit: "other", rank: 2, term: "1797-1801" },
            { name: "Jefferson", suit: "democratic", rank: 3, term: "1801-1809" },
            { name: "Madison", suit: "democratic", rank: 4, term: "1809-1817" },
            { name: "Monroe", suit: "democratic", rank: 5, term: "1817-1825" },
            { name: "J.Q. Adams", suit: "other", rank: 6, term: "1825-1829" },
            { name: "Jackson", suit: "democratic", rank: 7, term: "1829-1837" },
            { name: "Van Buren", suit: "democratic", rank: 8, term: "1837-1841" },
            { name: "W.H. Harrison", suit: "other", rank: 9, term: "1841" },
            { name: "Tyler", suit: "other", rank: 10, term: "1841-1845" },
            { name: "Polk", suit: "democratic", rank: 11, term: "1845-1849" },
            { name: "Taylor", suit: "other", rank: 12, term: "1849-1850" },
            { name: "Fillmore", suit: "other", rank: 13, term: "1850-1853" },
            { name: "Pierce", suit: "democratic", rank: 14, term: "1853-1857" },
            { name: "Buchanan", suit: "democratic", rank: 15, term: "1857-1861" },
            { name: "Lincoln", suit: "republican", rank: 16, term: "1861-1865" },
            { name: "Johnson", suit: "democratic", rank: 17, term: "1865-1869" },
            { name: "Grant", suit: "republican", rank: 18, term: "1869-1877" },
            { name: "Hayes", suit: "republican", rank: 19, term: "1877-1881" },
            { name: "Garfield", suit: "republican", rank: 20, term: "1881" },
            { name: "Arthur", suit: "republican", rank: 21, term: "1881-1885" },
            { name: "Cleveland", suit: "democratic", rank: 22, term: "1885-1889" },
            { name: "B. Harrison", suit: "republican", rank: 23, term: "1889-1893" },
            { name: "Cleveland", suit: "democratic", rank: 24, term: "1893-1897" },
            { name: "McKinley", suit: "republican", rank: 25, term: "1897-1901" },
            { name: "T. Roosevelt", suit: "republican", rank: 26, term: "1901-1909" },
            { name: "Taft", suit: "republican", rank: 27, term: "1909-1913" },
            { name: "Wilson", suit: "democratic", rank: 28, term: "1913-1921" },
            { name: "Harding", suit: "republican", rank: 29, term: "1921-1923" },
            { name: "Coolidge", suit: "republican", rank: 30, term: "1923-1929" },
            { name: "Hoover", suit: "republican", rank: 31, term: "1929-1933" },
            { name: "FDR", suit: "democratic", rank: 32, term: "1933-1945" }
        ];

        let round = 1;
        let order = [];
        let currentIndex = 0;
        let currentPresident;
        let currentMode = 'number'; // Default mode
        let attempts = 0;
        let roundCorrects = 0;
        let currentRoundResults = [];
        let previousRoundWrong = [];
        let reportCardData = Array(4).fill().map(() => ({ round: 0, data: [], numberCorrectOnFirstTry: 0, missed: [] }));
        let column4Presidents = new Set();
        let roundResults = [];
        const optionDivs = document.querySelectorAll('.option');
        let timeoutId;

        let savedData = localStorage.getItem('presidentsData');
        if (savedData) {
            let data = JSON.parse(savedData);
            presidents.forEach((p, i) => {
                p.streak = data[i].streak || 0;
                p.totalTrials = data[i].totalTrials || 0;
                p.corrects = data[i].corrects || 0;
            });
        } else {
            presidents.forEach(p => {
                p.streak = 0;
                p.totalTrials = 0;
                p.corrects = 0;
            });
        }

        function getSuitLetter(suit) {
            if (suit === "democratic") return "D";
            if (suit === "republican") return "R";
            if (suit === "other") return "O";
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function getDeviation(streak) {
            if (streak === 0) return { minD: 5, maxD: 9 };
            else if (streak === 1) return { minD: 3, maxD: 7 };
            else if (streak === 2) return { minD: 2, maxD: 5 };
            else return { minD: 1, maxD: 2 };
        }

        function getOrdinalSuffix(rank) {
            let j = rank % 10,
                k = rank % 100;
            if (j === 1 && k !== 11) return "st";
            if (j === 2 && k !== 12) return "nd";
            if (j === 3 && k !== 13) return "rd";
            return "th";
        }

        function getOrdinal(rank) {
            if (rank === 1) return "First";
            if (rank === 2) return "Second";
            if (rank === 3) return "Third";
            return rank + getOrdinalSuffix(rank);
        }

        function generateOptions(correctRank, streak, mode) {
    let { minD, maxD } = getDeviation(streak);
    let r = correctRank;
    let lower = Math.max(1, r - maxD);
    let upper = Math.min(32, r + maxD);
    let possibleRanks = [];
    for (let i = lower; i <= upper; i++) {
        if (Math.abs(i - r) >= minD && i !== r) {
            possibleRanks.push(i);
        }
    }
    if (currentPresident.name === "Cleveland") {
        let otherRank = r === 22 ? 24 : (r === 24 ? 22 : null);
        if (otherRank) {
            possibleRanks = possibleRanks.filter(x => x !== otherRank);
        }
    }
    let incorrect1 = possibleRanks[Math.floor(Math.random() * possibleRanks.length)];
    let remaining = possibleRanks.filter(x => x !== incorrect1);
    let incorrect2 = remaining[Math.floor(Math.random() * remaining.length)];
    let ranks = [r, incorrect1, incorrect2];
    shuffle(ranks);
    if (mode === 'number') {
        return ranks.map(rank => rank.toString()); // Convert to strings for consistency
    } else { // mode === 'years'
        return ranks.map(rank => presidents[rank - 1].term); // Get terms from presidents array
    }
}

        function showMessage(text) {
            document.getElementById('message').innerText = text;
        }

        function saveData() {
            let data = presidents.map(p => ({
                streak: p.streak,
                totalTrials: p.totalTrials,
                corrects: p.corrects
            }));
            localStorage.setItem('presidentsData', JSON.stringify(data));
        }

        function preloadAllImages() {
            presidents.forEach(p => {
                let img = new Image();
                img.src = `CARDS/${getSuitLetter(p.suit)}-${p.rank}.jpg`;
            });
        }

        function changeImageSmoothly(newSrc) {
            const img = document.getElementById('presidentImage');
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = newSrc;
                img.onload = () => {
                    img.style.opacity = 1;
                };
            }, 300);
        }

        function startNewPresident() {
    if (currentIndex >= order.length) {
        showReportCard();
        return;
    }
    currentPresident = presidents[order[currentIndex]];
    currentPresident.totalTrials += 1;
    attempts = 0;

    let imgSrc = `CARDS/${getSuitLetter(currentPresident.suit)}-${currentPresident.rank}.jpg`;
    changeImageSmoothly(imgSrc);

    let options = generateOptions(currentPresident.rank, currentPresident.streak, currentMode);
    optionDivs.forEach((div, i) => {
        div.innerText = options[i];
        div.dataset.value = options[i];
        div.classList.remove('disabled', 'correct');
    });

    showMessage('');
}

        function moveToNextPresident() {
            currentIndex += 1;
            saveData();
            startNewPresident();
        }

        function startNewRound() {
            if (round === 1) {
                order = Array.from({ length: 32 }, (_, i) => i);
                shuffle(order);
            } else if (round === 2) {
                let T = 12; // Reduced from 16 to 12
                let W = previousRoundWrong;
                if (W.length >= T) {
                    order = shuffle(W).slice(0, T);
                } else {
                    let additional = T - W.length;
                    let C = Array.from({ length: 32 }, (_, i) => i).filter(i => !W.includes(i));
                    order = W.concat(shuffle(C).slice(0, additional));
                }
            } else if (round === 3) {
                let T = 10;
                let W = previousRoundWrong;
                if (W.length >= T) {
                    order = shuffle(W).slice(0, T);
                } else {
                    let additional = T - W.length;
                    let C = Array.from({ length: 32 }, (_, i) => i).filter(i => !W.includes(i));
                    order = W.concat(shuffle(C).slice(0, additional));
                }
            } else if (round === 4) {
                let accuracy = presidents.map((p, i) => ({
                    index: i,
                    accuracy: p.totalTrials > 0 ? p.corrects / p.totalTrials : 1
                }));
                accuracy.sort((a, b) => a.accuracy - b.accuracy);
                let mostMissed = accuracy.slice(0, 6).map(a => a.index);
                let remaining = accuracy.filter(a => !mostMissed.includes(a.index));
                let notInColumn4 = remaining.filter(a => !column4Presidents.has(a.index));
                if (notInColumn4.length >= 2) {
                    notInColumn4.sort((a, b) => a.accuracy - b.accuracy);
                    let additional = notInColumn4.slice(0, 2).map(a => a.index);
                    order = mostMissed.concat(additional);
                } else if (notInColumn4.length > 0) {
                    let additional = notInColumn4.map(a => a.index);
                    let needed = 2 - additional.length;
                    let closest = remaining.filter(a => !additional.includes(a.index)).sort((a, b) => {
                        let minDistA = Math.min(...mostMissed.map(m => Math.abs(presidents[m].rank - presidents[a.index].rank)));
                        let minDistB = Math.min(...mostMissed.map(m => Math.abs(presidents[m].rank - presidents[b.index].rank)));
                        return minDistA - minDistB;
                    }).slice(0, needed).map(a => a.index);
                    order = mostMissed.concat(additional, closest);
                } else {
                    remaining.sort((a, b) => a.accuracy - b.accuracy);
                    let additional = remaining.slice(0, 2).map(a => a.index);
                    order = mostMissed.concat(additional);
                }
            } else {
                let W = previousRoundWrong;
                if (W.length >= 8) {
                    order = shuffle(W).slice(0, 8);
                } else {
                    let additional = 8 - W.length;
                    let remaining = Array.from({ length: 32 }, (_, i) => i).filter(i => !column4Presidents.has(i));
                    if (remaining.length >= additional) {
                        let accuracyRemaining = remaining.map(i => ({
                            index: i,
                            accuracy: presidents[i].totalTrials > 0 ? presidents[i].corrects / presidents[i].totalTrials : 1
                        }));
                        accuracyRemaining.sort((a, b) => a.accuracy - b.accuracy);
                        let selected = accuracyRemaining.slice(0, additional).map(a => a.index);
                        order = W.concat(selected);
                    } else {
                        let selected = remaining;
                        let stillNeeded = additional - selected.length;
                        if (stillNeeded > 0) {
                            let otherPresidents = Array.from({ length: 32 }, (_, i) => i).filter(i => !W.includes(i) && !selected.includes(i));
                            let accuracyOther = otherPresidents.map(i => ({
                                index: i,
                                accuracy: presidents[i].totalTrials > 0 ? presidents[i].corrects / presidents[i].totalTrials : 1
                            }));
                            accuracyOther.sort((a, b) => a.accuracy - b.accuracy);
                            let moreSelected = accuracyOther.slice(0, stillNeeded).map(a => a.index);
                            selected = selected.concat(moreSelected);
                        }
                        order = W.concat(selected);
                    }
                }
            }
            if (round >= 4) {
                column4Presidents = new Set([...column4Presidents, ...order]);
            }
            currentRoundResults = new Array(order.length).fill(false);
            currentIndex = 0;
            roundCorrects = 0;
            document.getElementById('reportCard').style.display = 'none';
            document.getElementById('gameArea').style.display = 'flex';
            startNewPresident();
        }

        function showReportCard() {
            if (round === 9) {
                let sumCorrect = roundResults.reduce((acc, r) => acc + r.correct, 0);
                let sumTotal = roundResults.reduce((acc, r) => acc + r.total, 0);
                let overallAccuracy = (sumCorrect / sumTotal * 100).toFixed(2);
                let grade;
                if (overallAccuracy >= 90) {
                    grade = "A 😊";
                } else if (overallAccuracy >= 80) {
                    grade = "B";
                } else if (overallAccuracy >= 70) {
                    grade = "C";
                } else {
                    grade = "F <span style='color:red;'>SEE ME</span>";
                }
                document.getElementById('finalScore').innerHTML = `You scored ${overallAccuracy}%`;
                document.getElementById('grade').innerHTML = grade;
                document.getElementById('finalMessage').style.display = 'block';
                document.getElementById('gameArea').style.display = 'none';
                document.getElementById('reportCard').style.display = 'none';
                return;
            }

            document.getElementById('gameArea').style.display = 'none';
            showMessage('');
            let reportCard = document.getElementById('reportCard');
            reportCard.style.display = 'block';

            let columnIndex = Math.min(round - 1, 3);
            let missedInRound = order.filter((_, i) => !currentRoundResults[i]);
            reportCardData[columnIndex] = {
                round: round,
                numberCorrectOnFirstTry: roundCorrects,
                data: order.map(index => ({
                    presidentIndex: index,
                    corrects: presidents[index].corrects,
                    totalTrials: presidents[index].totalTrials
                })),
                missed: missedInRound
            };

            roundResults.push({ round: round, correct: roundCorrects, total: order.length });

            document.getElementById('roundIndicator').innerText = `Rd ${round}/9`;

            if (round === 1) {
                document.getElementById('column1').classList.add('centered');
            } else {
                document.getElementById('column1').classList.remove('centered');
            }

            if (reportCardData[0].round > 0) {
                let col1 = document.getElementById('column1');
                let sortedData = [...presidents].sort((a, b) => a.rank - b.rank);
                let missedSet1 = new Set(reportCardData[0].missed);
                let total = 32;
                let correct = reportCardData[0].numberCorrectOnFirstTry;
                let percentage = Math.round((correct / total) * 100);
                let entries = sortedData.map(p => {
                    let index = presidents.indexOf(p);
                    let isMissed = missedSet1.has(index);
                    let displayName = isMissed ? `${p.rank} ${p.name}` : p.name;
                    return `<div class="${isMissed ? 'missed' : ''}">${displayName}</div>`;
                });
                let displayList = entries.slice(0, 10).join('') + `<a href="#" class="showMore" data-column="1">show more</a>`;
                col1.innerHTML = `<p class="percentage">${percentage.toString().padStart(2, '0')}%</p><h3>Round 1: ${correct}/${total}</h3>${displayList}`;
            }

            for (let i = 1; i <= 2; i++) {
                if (reportCardData[i].round > 0) {
                    let col = document.getElementById(`column${i + 1}`);
                    let missedSet = new Set(reportCardData[i].missed);
                    let total = reportCardData[i].data.length;
                    let correct = reportCardData[i].numberCorrectOnFirstTry;
                    let percentage = Math.round((correct / total) * 100);
                    let entries = reportCardData[i].data.map(d => {
                        let p = presidents[d.presidentIndex];
                        let isMissed = missedSet.has(d.presidentIndex);
                        let displayName = isMissed ? `${p.rank} ${p.name}` : p.name;
                        return `<div class="${isMissed ? 'missed' : ''}">${displayName}</div>`;
                    });
                    let displayList = entries.slice(0, 10).join('') + `<a href="#" class="showMore" data-column="${i + 1}">show more</a>`;
                    col.innerHTML = `<p class="percentage">${percentage.toString().padStart(2, '0')}%</p><h3>Round ${reportCardData[i].round}: ${correct}/${total}</h3>${displayList}`;
                }
            }

            if (round >= 4) {
                let col4 = document.getElementById('column4');
                let missedSet = new Set(missedInRound);
                let presidentsInColumn4 = Array.from(column4Presidents).map(index => presidents[index]);
                presidentsInColumn4.sort((a, b) => {
                    let accA = a.totalTrials > 0 ? a.corrects / a.totalTrials : 1;
                    let accB = b.totalTrials > 0 ? b.corrects / b.totalTrials : 1;
                    return accA - accB;
                });

                let cumulativeCorrect = roundResults.filter(r => r.round >= 4 && r.round <= round).reduce((acc, r) => acc + r.correct, 0);
                let cumulativeTotal = roundResults.filter(r => r.round >= 4 && r.round <= round).reduce((acc, r) => acc + r.total, 0);
                let cumulativePercentage = cumulativeTotal > 0 ? Math.round((cumulativeCorrect / cumulativeTotal) * 100) : 0;

                let header = `<p class="percentage">${cumulativePercentage.toString().padStart(2, '0')}%</p><h3>${round === 4 ? 'Round 4' : `Rounds 4 ~ ${round}`}: ${cumulativeCorrect}/${cumulativeTotal}</h3>`;

                let entries = presidentsInColumn4.map(p => {
                    let index = presidents.indexOf(p);
                    let isMissed = missedSet.has(index);
                    let displayName = isMissed ? `${p.rank} ${p.name}` : p.name;
                    return `<div class="${isMissed ? 'missed' : ''}">${displayName}: ${Math.round((p.corrects / p.totalTrials) * 100)}%</div>`;
                });
                let displayList = entries.slice(0, 10).join('') + `<a href="#" class="showMore" data-column="4">show more</a>`;
                col4.innerHTML = header + displayList;
            }

            previousRoundWrong = missedInRound;
        }

        function showFullList(column) {
            let gridContainer = document.getElementById('gridContainer');
            gridContainer.innerHTML = '';
            let entries = [];

            if (column === '1') {
                let sortedData = [...presidents].sort((a, b) => a.rank - b.rank);
                let missedSet = new Set(reportCardData[0].missed);
                entries = sortedData.map(p => {
                    let index = presidents.indexOf(p);
                    let isMissed = missedSet.has(index);
                    let displayName = `${p.rank} ${p.name}`;
                    return `<div class="${isMissed ? 'missed' : ''}">${displayName}</div>`;
                });
            } else if (column === '2' || column === '3') {
                let i = column - 1;
                let data = reportCardData[i].data;
                let missedSet = new Set(reportCardData[i].missed);
                entries = data.map(d => {
                    let p = presidents[d.presidentIndex];
                    let isMissed = missedSet.has(d.presidentIndex);
                    let displayName = `${p.rank} ${p.name}<br><span style="font-size: smaller;">${p.term}</span>`;
                    return `<div class="${isMissed ? 'missed' : ''}">${displayName}</div>`;
                });
            } else if (column === '4') {
                let missedSet = new Set(previousRoundWrong);
                let presidentsInColumn4 = Array.from(column4Presidents).map(index => presidents[index]);
                presidentsInColumn4.sort((a, b) => {
                    let accA = a.totalTrials > 0 ? a.corrects / a.totalTrials : 1;
                    let accB = b.totalTrials > 0 ? b.corrects / b.totalTrials : 1;
                    return accA - accB;
                });
                entries = presidentsInColumn4.map(p => {
                    let index = presidents.indexOf(p);
                    let isMissed = missedSet.has(index);
                    let displayName = `${p.rank} ${p.name} <span style="float: right;">${Math.round((p.corrects / p.totalTrials) * 100)}%</span>`;
                    return `<div class="${isMissed ? 'missed' : ''}">${displayName}</div>`;
                });
            }

            let gridItems = entries.map(entry => `<div>${entry}</div>`);
            while (gridItems.length < 32) {
                gridItems.push('<div></div>');
            }
            gridContainer.innerHTML = gridItems.join('');

            document.getElementById('fullScreenView').style.display = 'block';
            document.getElementById('reportCard').style.display = 'none';

            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                document.getElementById('fullScreenView').style.display = 'none';
                document.getElementById('reportCard').style.display = 'block';
            }, 30000);
        }

        optionDivs.forEach(div => {
    div.addEventListener('click', function() {
        if (div.classList.contains('disabled')) return;
        let selectedValue = div.dataset.value;
        let isCorrect;
        if (currentMode === 'number') {
            isCorrect = Number(selectedValue) === currentPresident.rank;
        } else { // currentMode === 'years'
            isCorrect = selectedValue === currentPresident.term;
        }
        if (isCorrect) {
            div.classList.add('correct');
            optionDivs.forEach(d => d.classList.add('disabled'));
            if (attempts === 0) {
                currentPresident.corrects += 1;
                roundCorrects += 1;
                currentPresident.streak += 1;
                currentRoundResults[currentIndex] = true;
            } else {
                currentPresident.streak = 0;
            }
            setTimeout(moveToNextPresident, 1000);
        } else {
            div.innerText = "try again";
            div.classList.add('disabled');
            attempts += 1;
            if (attempts === 2) {
                optionDivs.forEach(d => {
                    if (currentMode === 'number') {
                        if (Number(d.dataset.value) === currentPresident.rank) {
                            d.classList.add('correct');
                        }
                    } else {
                        if (d.dataset.value === currentPresident.term) {
                            d.classList.add('correct');
                        }
                    }
                });
                let message = `Sorry. ${currentPresident.name} was actually the ${getOrdinal(currentPresident.rank)} President in ${currentPresident.term}.`;
                showMessage(message);
                currentPresident.streak = 0;
                setTimeout(moveToNextPresident, 3000);
            }
        }
    });
});

document.getElementById('mode').addEventListener('change', function() {
    currentMode = this.value;
    if (currentIndex < order.length) {
        startNewPresident(); // Refresh options for the current president
    }
});

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('showMore') && event.target.hasAttribute('data-column')) {
                event.preventDefault();
                let column = event.target.getAttribute('data-column');
                showFullList(column);
            }
        });

        document.getElementById('returnLink').addEventListener('click', function(event) {
            event.preventDefault();
            clearTimeout(timeoutId);
            document.getElementById('fullScreenView').style.display = 'none';
            document.getElementById('reportCard').style.display = 'block';
        });

        

        document.getElementById('continue').addEventListener('click', () => {
            if (round < 9) {
                round += 1;
                startNewRound();
            }
        });

        document.getElementById('playAgain').addEventListener('click', function(event) {
            event.preventDefault();
            presidents.forEach(p => {
                p.streak = 0;
                p.totalTrials = 0;
                p.corrects = 0;
            });
            saveData();
            round = 1;
            reportCardData = Array(4).fill().map(() => ({ round: 0, data: [], numberCorrectOnFirstTry: 0, missed: [] }));
            column4Presidents = new Set();
            roundResults = [];
            document.getElementById('finalMessage').style.display = 'none';
            document.getElementById('gameArea').style.display = 'flex';
            startNewRound();
        });

        preloadAllImages();
        startNewRound();
    