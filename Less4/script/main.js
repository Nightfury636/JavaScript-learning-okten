//-- - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calculate1(a, b) {
    return a * b;
}


let a = 5;
let b = 10;
let area2 = calculate1(a, b);
console.log("Площа прямокутника", a, "і", b, "дорівнює", area2);

//-- - створити функцію яка обчислює та повертає площу кола з радіусом r

function calculate2(r) {
    return Math.PI * r * r;
}

let radius1 = 5;
let area1 = calculate2(radius1);
console.log("Площа кола", radius1, "дорівнює", area1);

//-- - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculateCylinderArea(r, h) {

    let lateralArea = 2 * Math.PI * r * h;

    let baseArea = Math.PI * r * r;

    let totalArea = 2 * baseArea + lateralArea;

    return totalArea;
}

let radius = 5;
let height = 10;
let area = calculateCylinderArea(radius, height);
console.log("Площа циліндра з радіусом основи", radius, "і висотою", height, "дорівнює", area);

//-- - створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let myArray1 = ['apple', 'banana', 'orange', 'lemon'];
printArrayElements(myArray1);

//- - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    let paragraph = document.createElement('p'); // Створюємо новий елемент <p>
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}

let myText = "Це текст для нового параграфа.";
createParagraph(myText);

//- - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createList(text, numberOfItems) {
    let ul = document.createElement('ul');

    for (let i = 0; i < numberOfItems; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

let itemText = "Елемент списку";
let numberOfItems = 3;
createList(itemText, numberOfItems);

//- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListFromArray(array) {
    let ul = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i];
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

let myArray = [10, "Hello", true, 3.14];
createListFromArray(myArray);

//- - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function displayObjects(array) {
    let container = document.createElement('div');

    array.forEach(function(obj) {
        // Створюємо блок для об'єкта
        let block = document.createElement('div');
        block.textContent = `ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}`;
        container.appendChild(block);
    });

    document.body.appendChild(container);
}


let arrayOfObjects = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Alice', age: 25},
    {id: 3, name: 'Bob', age: 35}
];
displayObjects(arrayOfObjects);

//- - створити функцію яка повертає найменьше число з масиву

function findMinNumber(array) {
    if (array.length === 0) {
        return undefined;
    }

    let min = array[0]}

//- - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

let numbers = [1, 2, 10];
console.log(sum(numbers));



//-- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {

    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {

        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    return arr;
}


let myArray3 = [11, 22, 33, 44];
swap(myArray3, 0, 1);
console.log(myArray3);


//- - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {

    let exchangeRate = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }


    let exchangedAmount = sumUAH / exchangeRate;


    exchangedAmount = Math.round(exchangedAmount * 100) / 100;

    return exchangedAmount;
}

let sumUAH = 10000;
let currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
let exchangeCurrency = 'USD';
console.log(exchange(sumUAH, currencyValues, exchangeCurrency));





