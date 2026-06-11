const plants = document.querySelectorAll('.plant');
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('resetButton');

let score = 0;

// Crescimento das plantas automaticamente
plants.forEach(plant => {
    setInterval(() => {
        let grown = parseInt(plant.dataset.grown);
        if (grown < 3) {
            grown++;
            plant.dataset.grown = grown;
            if (grown === 3) plant.classList.add('grown');
        }
    }, Math.random() * 3000 + 2000); // Cresce entre 2 e 5 segundos
});

// Colher plantas
plants.forEach(plant => {
    plant.addEventListener('click', () => {
        let grown = parseInt(plant.dataset.grown);
        if (grown === 3) {
            score += 10;
            scoreDisplay.textContent = score;
            plant.dataset.grown = 0;
            plant.classList.remove('grown');
        } else {
            alert('A planta ainda não está pronta para colher!');
        }
    });
});

// Resetar jogo
resetButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;
    plants.forEach(plant => {
        plant.dataset.grown = 0;
        plant.classList.remove('grown');
    });
});