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
  }
  document.addEventListener('DOMContentLoaded', () => {
    initCircleSlider();
  });