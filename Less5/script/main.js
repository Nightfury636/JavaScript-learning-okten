// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const calculateRectangleArea = (a, b) => a * b;

const sideA = 5;
const sideB = 10;
const area = calculateRectangleArea(sideA, sideB);
console.log("Площа прямокутника зі сторонами", sideA, "і", sideB, "дорівнює", area);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const calculateCircleArea = (r) => Math.PI * r * r;

const radius = 5;
const area1 = calculateCircleArea(radius);
console.log("Площа кола з радіусом", radius, "дорівнює", area1);

// - - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const calculateCylinderSurfaceArea = (r, h) => 2 * Math.PI * r * (r + h);

const radius1 = 3;
const height = 5;
const surfaceArea = calculateCylinderSurfaceArea(radius1, height);
console.log("Площа поверхні циліндра з радіусом", radius1);

// - створити функцію яка приймає масив та виводить кожен його елемент

const printArrayElements = (array) => {
    array.forEach(element => console.log(element));
};

const myArray = ['apple', 'banana', 'orange', 'grape'];
printArrayElements(myArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
};

const myText = "Це текст.";
createParagraph(myText);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createList = (text, count) => {
    const ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

const listItemText = "Елемент списку";
const numberOfItems = 3;
createList(listItemText, numberOfItems);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const buildList = (array) => {
    const ul = document.createElement('ul');

    array.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
};


const myArray1 = [1, 'hello', true, 'world', 42];
buildList(myArray1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const displayObjects = (objects) => {
    objects.forEach(obj => {
        const div = document.createElement('div');
        div.innerHTML = `<p>ID: ${obj.id}</p><p>Name: ${obj.name}</p><p>Age: ${obj.age}</p>`;
        document.body.appendChild(div);
    });
};

const arrayOfObjects = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Tom', age: 40 }
];
displayObjects(arrayOfObjects);

// - створити функцію яка повертає найменьше число з масиву

const findMinNumber = (array) => {
    if (array.length === 0) {
        return undefined; // Повертає undefined, якщо масив порожній
    }
    return Math.min(...array);
};

const numbers = [10, 5, 8, 3, 12];
console.log("Найменше число в масиві:", findMinNumber(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
};

const numbers1 = [1, 2, 10];
console.log("Сума елементів масиву:", sum(numbers1));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    return arr;
};

const myArray2 = [11, 22, 33, 44];
console.log(swap(myArray2, 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  
    const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency)?.value;

    const exchangedAmount = sumUAH / exchangeRate;

    return exchangedAmount.toFixed(2);
};

const result = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(result);











