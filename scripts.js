// Открытие модального окна
function openModal(id) {
    document.getElementById(`modal${id}`).style.display = "block";
}

// Закрытие модального окна
function closeModal(id) {
    document.getElementById(`modal${id}`).style.display = "none";
}

// Плавная прокрутка к секции
function scrollToSection(sectionID) {
    const element = document.querySelector(sectionID);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Показ анимации загрузки страницы
function showAnimation() {
    // Здесь можно добавить анимацию появления элементов страницы, если нужно
}

// Проверка формы
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".modal-content");
    form.addEventListener("submit", validateForm);
});

function validateForm(event) {
    event.preventDefault(); // Предотвращаем отправку формы сразу же
    const inputs = this.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']");
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            alert(`${input.placeholder} должно быть заполнено.`);
            valid = false;
        }
    });

    if (valid) {
        alert("Форма успешно отправлена!");
        this.reset();
    }
}
