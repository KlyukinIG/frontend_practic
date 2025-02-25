const count = document.getElementById('count')

let countValue = Number(count.textContent); // Получаем текущее значение и преобразуем в число

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        const newDiv = document.createElement('div')
        newDiv.classList.add('form__group');
        newDiv.classList.add('otherInput');

        const otherInput = document.createElement('input')
        otherInput.setAttribute('placeholder', 'Ваш вариант')
        otherInput.setAttribute('type', 'text') 
        
        newDiv.appendChild(otherInput)
        document.querySelector('#form').insertBefore(newDiv, document.querySelector('.form__submit')); 
    }
    if(event.target.value !== 'other') {
        const otherInput = document.querySelector('.otherInput')
        document.querySelector('#form').removeChild(otherInput)
    }
})


function counterUsers() {
    let index = 0; // Начинаем с 0
    const interval = setInterval(() => {
        if (index <= 5000) {
            count.textContent = index; // Обновляем значение в DOM
            index += 100; // Увеличиваем значение на 100
        } else {
            count.textContent = index + '+'
            clearInterval(interval); // Останавливаем интервал, когда достигли 5000
            setTimeout(counterUsers, 100); // Перезапускаем функцию через 50 мс
        }
    }, 100); // Задержка 50 мс между изменениями
}

counterUsers(); // Запускаем функцию

