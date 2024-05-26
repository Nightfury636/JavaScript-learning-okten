//- Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function handleSubmit() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    const user = {
        name: name,
        surname: surname,
        age: age
    };

    document.getElementById('output').innerText = JSON.stringify(user, null, 2);
}

//-є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counter = localStorage.getItem('pageReloadCounter');

if (counter === null) {
    counter = 0;
} else {
    counter = parseInt(counter);
}

counter += 1;

localStorage.setItem('pageReloadCounter', counter);

document.getElementById('counter').innerText = counter;

//-Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
function saveSession() {

    const now = new Date();

    let sessions = localStorage.getItem('sessions');
    if (sessions === null) {
        sessions = [];
    } else {
        sessions = JSON.parse(sessions);
    }

    sessions.push(now.toString());

    localStorage.setItem('sessions', JSON.stringify(sessions));
}


saveSession();

//-//-зробити масив на 100 об'єктів та дві кнопки prev next
// // при завантажені сторінки з'являються перші 10 об'єктів.
// // При натисканні next виводяться настпні 10 об'єктів
// // При натисканні prev виводяться попередні 10 об'єктів

const objects = [];
for (let i = 1; i <= 100; i++) {
    objects.push({ id: i, name: `Object ${i}` });
}

let currentPage = 1;
const itemsPerPage = 10;

function displayObjects() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentObjects = objects.slice(start, end);

    const objectsList = document.getElementById('objectsList');
    objectsList.innerHTML = '' ;

    currentObjects.forEach(obj => {
        const objectDiv = document.createElement('div');
        objectDiv.className = 'object';
        objectDiv.innerText = `ID: ${obj.id}, Name: ${obj.name}`;
        objectsList.appendChild(objectDiv);
    });

    document.getElementById('prevButton').disabled = currentPage === 1;
    document.getElementById('nextButton').disabled = end >= objects.length;
}

function showPrev() {
    if (currentPage > 1) {
        currentPage--;
        displayObjects();
    }
}

function showNext() {
    if (currentPage * itemsPerPage < objects.length) {
        currentPage++;
        displayObjects();
    }
}

displayObjects();


//-Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

function hideText() {
    const textElement = document.getElementById('text');
    if (textElement) {
        textElement.style.display = 'none';
    }
}

//- - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function checkAge() {
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value);
    const messageElement = document.getElementById('message');

    if (isNaN(age)) {
        messageElement.innerText = 'Будь ласка, введіть коректний вік.';
        messageElement.style.color = 'red';
        return;
    }

    if (age < 18) {
        messageElement.innerText = 'Вам менше 18 років.';
        messageElement.style.color = 'red';
    } else {
        messageElement.innerText = 'Вам 18 років або більше.';
        messageElement.style.color = 'green';
    }
}

//- Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

function createTable() {
    const rows = parseInt(document.getElementById('rowsInput').value);
    const cols = parseInt(document.getElementById('colsInput').value);
    const content = document.getElementById('contentInput').value;

    if (isNaN(rows) || isNaN(cols) || !content) {
        alert('Будь ласка, введіть коректні дані.');
        return;
    }

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Очистити попередню таблицю, якщо є

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
}