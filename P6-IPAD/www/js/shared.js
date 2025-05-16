const presidents = [
    { name: "George Washington", image: "assets/CARDS/POTUS/1.jpg", term: "1789 – 1797", order: 1, number: 1 },
    { name: "John Adams", image: "assets/CARDS/POTUS/2.jpg", term: "1797 – 1801", order: 2, number: 2 },
    { name: "Thomas Jefferson", image: "assets/CARDS/POTUS/3.jpg", term: "1801 – 1809", order: 3, number: 3 },
    { name: "James Madison", image: "assets/CARDS/POTUS/4.jpg", term: "1809 – 1817", order: 4, number: 4 },
    { name: "James Monroe", image: "assets/CARDS/POTUS/5.jpg", term: "1817 – 1825", order: 5, number: 5 },
    { name: "John Quincy Adams", image: "assets/CARDS/POTUS/6.jpg", term: "1825 – 1829", order: 6, number: 6 },
    { name: "Andrew Jackson", image: "assets/CARDS/POTUS/7.jpg", term: "1829 – 1837", order: 7, number: 7 },
    { name: "Martin Van Buren", image: "assets/CARDS/POTUS/8.jpg", term: "1837 – 1841", order: 8, number: 8 },
    { name: "William Henry Harrison", image: "assets/CARDS/POTUS/9.jpg", term: "1841 – 1841", order: 9, number: 9 },
    { name: "John Tyler", image: "assets/CARDS/POTUS/10.jpg", term: "1841 – 1845", order: 10, number: 10 },
    { name: "James K. Polk", image: "assets/CARDS/POTUS/11.jpg", term: "1845 – 1849", order: 11, number: 11 },
    { name: "Zachary Taylor", image: "assets/CARDS/POTUS/12.jpg", term: "1849 – 1850", order: 12, number: 12 },
    { name: "Millard Fillmore", image: "assets/CARDS/POTUS/13.jpg", term: "1850 – 1853", order: 13, number: 13 },
    { name: "Franklin Pierce", image: "assets/CARDS/POTUS/14.jpg", term: "1853 – 1857", order: 14, number: 14 },
    { name: "James Buchanan", image: "assets/CARDS/POTUS/15.jpg", term: "1857 – 1861", order: 15, number: 15 },
    { name: "Abraham Lincoln", image: "assets/CARDS/POTUS/16.jpg", term: "1861 – 1865", order: 16, number: 16 },
    { name: "Andrew Johnson", image: "assets/CARDS/POTUS/17.jpg", term: "1865 – 1869", order: 17, number: 17 },
    { name: "Ulysses S. Grant", image: "assets/CARDS/POTUS/18.jpg", term: "1869 – 1877", order: 18, number: 18 },
    { name: "Rutherford B. Hayes", image: "assets/CARDS/POTUS/19.jpg", term: "1877 – 1881", order: 19, number: 19 },
    { name: "James A. Garfield", image: "assets/CARDS/POTUS/20.jpg", term: "1881 – 1881", order: 20, number: 20 },
    { name: "Chester A. Arthur", image: "assets/CARDS/POTUS/21.jpg", term: "1881 – 1885", order: 21, number: 21 },
    { name: "Cleveland 1st Term", image: "assets/CARDS/POTUS/22.jpg", term: "1885 – 1889", order: 22, number: 22 },
    { name: "Benjamin Harrison", image: "assets/CARDS/POTUS/23.jpg", term: "1889 – 1893", order: 23, number: 23 },
    { name: "Cleveland 2nd Term", image: "assets/CARDS/POTUS/24.jpg", term: "1893 – 1897", order: 24, number: 24 },
    { name: "William McKinley", image: "assets/CARDS/POTUS/25.jpg", term: "1897 – 1901", order: 25, number: 25 },
    { name: "Theodore Roosevelt", image: "assets/CARDS/POTUS/26.jpg", term: "1901 – 1909", order: 26, number: 26 },
    { name: "William Howard Taft", image: "assets/CARDS/POTUS/27.jpg", term: "1909 – 1913", order: 27, number: 27 },
    { name: "Woodrow Wilson", image: "assets/CARDS/POTUS/28.jpg", term: "1913 – 1921", order: 28, number: 28 },
    { name: "Warren G. Harding", image: "assets/CARDS/POTUS/29.jpg", term: "1921 – 1923", order: 29, number: 29 },
    { name: "Calvin Coolidge", image: "assets/CARDS/POTUS/30.jpg", term: "1923 – 1929", order: 30, number: 30 },
    { name: "Herbert Hoover", image: "assets/CARDS/POTUS/31.jpg", term: "1929 – 1933", order: 31, number: 31 },
    { name: "Franklin D. Roosevelt", image: "assets/CARDS/POTUS/32.jpg", term: "1933 – 1945", order: 32, number: 32 }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatTerm(term) {
    const [start, end] = term.split(' – ');
    const formatYear = year => {
        const prefix = year.slice(0, 2);
        const suffix = year.slice(-2);
        return `<i>${prefix}</i><span style="font-weight: bold; font-style: italic; font-size: 1.2em;">${suffix}</span>`;
    };
    return `${formatYear(start)} ~ ${formatYear(end)}`;
}

function createConfetti(container) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        confetti.style.setProperty('--dx', `${dx}px`);
        confetti.style.setProperty('--dy', `${dy}px`);
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.animationDuration = `${1.5 + Math.random() * 1}s`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        container.appendChild(confetti);
    }
}