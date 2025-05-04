// ポモドーロタイマー
let time = 25 * 60;
let timerId;
let isBreak = false;

function startTimer(minutes = 25) {
    clearInterval(timerId);
    time = minutes * 60; // 指定された分を秒に変換
    timerId = setInterval(() => {
        time--;
        const displayMinutes = String(Math.floor(time / 60)).padStart(2, '0');
        const displaySeconds = String(time % 60).padStart(2, '0');
        document.getElementById("timer").textContent = `${displayMinutes}:${displaySeconds}`;

        if (time === 0) {
            clearInterval(timerId);
            isBreak = !isBreak;
            const nextTime = isBreak ? 5 : 25; // デフォルトは5分休憩と25分作業
            alert(isBreak ? "Break time! 🍵" : "Focus time! 💻");
            startTimer(nextTime); // 次のタイマーを開始
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
