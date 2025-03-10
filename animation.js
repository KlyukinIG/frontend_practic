//функция счетчик
function counterUsers() {
    let count = document.getElementById('count')
    let index = 0; // Начинаем с 0
    const interval = setInterval(() => {
        if (index <= 5000) {
            count.textContent = index; // Обновляем значение 
            index += 100; // Увеличиваем значение
        } else {
            count.textContent = index + '+'
            clearInterval(interval); // Останавливаем интервал, когда достигли 5000
            setTimeout(counterUsers, 100); // Перезапускаем функцию
        }
    }, 100); 
}

counterUsers(); 

//input со своим значением
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

//плавный скрол
function smoothScroll(element) {
    element.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'})
    }) 
}

    
document.querySelectorAll('a[href^="#"]').forEach(element => {
    smoothScroll(element)
})    

