function initCircleSlider() {
    const circleContainer = document.querySelector('.circle-container');
    const nextButton = document.getElementById('nextButton');

    // Масив для зберігання порядку кружечків
    let circlesArray = Array.from(circleContainer.children);

    nextButton.addEventListener('click', () => {
        // Вилучаємо перший кружечок з масиву та додаємо його в кінець
        const firstCircle = circlesArray.shift();
        circlesArray.push(firstCircle);

        // Оновлюємо відображення кружечків
        circleContainer.innerHTML = ''; // Очищаємо контейнер
        circlesArray.forEach(circle => {
            circleContainer.appendChild(circle); // Додаємо кружечки в новому порядку
        });
    });

    // Добавляем обработчик для клавиш стрелок и Tab
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'Tab') {
            event.preventDefault();
            const firstCircle = circlesArray.shift();
            circlesArray.push(firstCircle);
            circleContainer.innerHTML = '';
            circlesArray.forEach(circle => {
                circleContainer.appendChild(circle);
            });
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            const lastCircle = circlesArray.pop();
            circlesArray.unshift(lastCircle);
            circleContainer.innerHTML = '';
            circlesArray.forEach(circle => {
                circleContainer.appendChild(circle);
            });
        }
    });

    // Добавляем поддержку сенсорных экранов
    let startX;
    circleContainer.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    circleContainer.addEventListener('touchmove', (event) => {
        if (!startX) return;
        const endX = event.touches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 30) { // Чувствительность свайпа
            if (diff > 0) {
                const firstCircle = circlesArray.shift();
                circlesArray.push(firstCircle);
            } else {
                const lastCircle = circlesArray.pop();
                circlesArray.unshift(lastCircle);
            }
            circleContainer.innerHTML = '';
            circlesArray.forEach(circle => {
                circleContainer.appendChild(circle);
            });
            startX = null;
        }
    });

    circleContainer.addEventListener('touchend', () => {
        startX = null;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCircleSlider();
});






// function initCircleSlider() {
//     const circleContainer = document.querySelector('.circle-container');
//     const nextButton = document.getElementById('nextButton');
  
    
//     let circlesArray = Array.from(circleContainer.children);
  
//     nextButton.addEventListener('click', () => {
      
//       const firstCircle = circlesArray.shift();
//       circlesArray.push(firstCircle);
  
      
//       circleContainer.innerHTML = '';
//       circlesArray.forEach(circle => {
//         circleContainer.appendChild(circle);
//       });
//     });
//   }
//   document.addEventListener('DOMContentLoaded', () => {
//     initCircleSlider();
//   });