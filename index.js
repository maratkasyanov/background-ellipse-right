const background = document.querySelector('.pulse-background');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // Получаем размеры элемента
  const rect = background.getBoundingClientRect();

  // Определяем координаты курсора относительно элемента
  const offsetX = ((clientX - rect.left) / rect.width - 0.1) * 5; // От -15 до 15 градусов
  const offsetY = ((clientY - rect.top) / rect.height - 0.1) * 2; // От -15 до 15 градусов

  // Применяем изменения к transform
  background.style.transform = `skew(${offsetX}deg, ${offsetY}deg)`;
});
