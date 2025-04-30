// ポモドーロタイマー
let time = 25 * 60;
let timerId;
let isBreak = false;

function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(() => {
        time--;
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        document.getElementById("timer").textContent = `${minutes}:${seconds}`;

        if (time === 0) {
            clearInterval(timerId);
            isBreak = !isBreak;
            time = isBreak ? 5 * 60 : 25 * 60;
            alert(isBreak ? "Break time! 🍵" : "Focus time! 💻");
            startTimer();
        }
    }, 1000);
}

// 草育成（クリックでレベル上昇）
const levels = ["level-1", "level-2", "level-3", "level-4"];

document.querySelectorAll('.day').forEach(cell => {
    cell.addEventListener('click', () => {
        let currentLevel = -1;
        for (let i = 0; i < levels.length; i++) {
            if (cell.classList.contains(levels[i])) {
                currentLevel = i;
                break;
            }
        }

        if (currentLevel !== -1) {
            cell.classList.remove(levels[currentLevel]);
        }

        const nextLevel = (currentLevel + 1) % (levels.length + 1);
        if (nextLevel < levels.length) {
            cell.classList.add(levels[nextLevel]);
        }
    });
});
