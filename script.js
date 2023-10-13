// Функция для изменения цвета фона
function changeBackgroundColor() {
    // Генерируем случайный цвет
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Изменяем цвет фона страницы
    document.body.style.backgroundColor = randomColor;
}

// Получаем кнопку и добавляем обработчик события на клик
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', changeBackgroundColor);

// Получаем элемент и добавляем обработчики событий наведения мыши и клика
const colorfulDiv = document.getElementById('colorfulDiv');
colorfulDiv.addEventListener('mouseover', function() {
    colorfulDiv.textContent = 'Мышь наведена!';
    colorfulDiv.style.backgroundColor = 'yellow';
});

colorfulDiv.addEventListener('mouseout', function() {
    colorfulDiv.textContent = 'Наведите мышь или кликните здесь';
    colorfulDiv.style.backgroundColor = 'white';
});

colorfulDiv.addEventListener('click', function() {
    colorfulDiv.textContent = 'Вы кликнули!';
    colorfulDiv.style.backgroundColor = 'green';
});
