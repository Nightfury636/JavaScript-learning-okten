//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


const users = [];


users.push(new User(1, "John", "Doe", "john.doe@example.com", "123-456-7890"));
users.push(new User(2, "Jane", "Smith", "jane.smith@example.com", "123-456-7891"));
users.push(new User(3, "Emily", "Jones", "emily.jones@example.com", "123-456-7892"));
users.push(new User(4, "Michael", "Brown", "michael.brown@example.com", "123-456-7893"));
users.push(new User(5, "Chris", "Johnson", "chris.johnson@example.com", "123-456-7894"));
users.push(new User(6, "Patricia", "Williams", "patricia.williams@example.com", "123-456-7895"));
users.push(new User(7, "Robert", "Miller", "robert.miller@example.com", "123-456-7896"));
users.push(new User(8, "Linda", "Davis", "linda.davis@example.com", "123-456-7897"));
users.push(new User(9, "James", "Wilson", "james.wilson@example.com", "123-456-7898"));
users.push(new User(10, "Barbara", "Moore", "barbara.moore@example.com", "123-456-7899"));


console.log(users);

// Фільтруємо масив, залишаючи тільки об'єкти з парними id
const filteredUsers = users.filter(user => user.id % 2 === 0);


console.log(filteredUsers);

//- - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a, b) => a.id - b.id);

console.log(users);

//- - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [];

clients.push(new Client(1, "John", "Doe", "john.doe@example.com", "123-456-7890", ["item1", "item2"]));
clients.push(new Client(2, "Jane", "Smith", "jane.smith@example.com", "123-456-7891", ["item3", "item4"]));
clients.push(new Client(3, "Emily", "Jones", "emily.jones@example.com", "123-456-7892", ["item5", "item6"]));
clients.push(new Client(4, "Michael", "Brown", "michael.brown@example.com", "123-456-7893", ["item7"]));
clients.push(new Client(5, "Chris", "Johnson", "chris.johnson@example.com", "123-456-7894", ["item8", "item9", "item10"]));
clients.push(new Client(6, "Patricia", "Williams", "patricia.williams@example.com", "123-456-7895", ["item11"]));
clients.push(new Client(7, "Robert", "Miller", "robert.miller@example.com", "123-456-7896", ["item12", "item13"]));
clients.push(new Client(8, "Linda", "Davis", "linda.davis@example.com", "123-456-7897", ["item14", "item15"]));
clients.push(new Client(9, "James", "Wilson", "james.wilson@example.com", "123-456-7898", ["item16"]));
clients.push(new Client(10, "Barbara", "Moore", "barbara.moore@example.com", "123-456-7899", ["item17", "item18", "item19"]));


console.log(clients);

//-  - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);


console.log(clients);

//-- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop} - ${this[prop]}`);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}
let myCar = new Car('Civic', 'Honda', 2020, 180, '1.8L');
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.drive();
myCar.changeYear(2021);
myCar.info();
myCar.addDriver({ name: 'John', age: 30, license: 'A1' });
console.log(myCar.driver);

//-- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Cars{
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop} - ${this[prop]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}



//--створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let cinderellas = [];
for (let i = 1; i <= 10; i++) {
    let cinderella = new Cinderella(`Cinderella ${i}`, Math.floor(Math.random() * 30) + 18, Math.floor(Math.random() * 10) + 20);
    cinderellas.push(cinderella);
}

let prince = new Prince('Prince Charming', 25, Math.floor(Math.random() * 10) + 20);

let foundCinderella = null;
for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.foundShoe) {
        foundCinderella = cinderellas[i];
        break;
    }
}

if (foundCinderella) {
    console.log(`Принц ${prince.name} знайшов свою попелюшку ${foundCinderella.name}`);
} else {
    console.log('Принц не знайшов свою попелюшку');
}

let foundCinderellaWithFind = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe);

if (foundCinderellaWithFind) {
    console.log(`Принц ${prince.name} знайшов свою попелюшку ${foundCinderellaWithFind.name}`);
} else {
    console.log('Принц не знайшов свою попелюшку');
}


//-Через Array.prototype. створити власний foreach


if (!Array.prototype.myForEach) {
    // Додаємо метод до прототипу Array
    Array.prototype.myForEach = function(callback, thisArg) {
        // Перевіряємо, чи передана callback функція
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        let len = this.length;

        for (let i = 0; i < len; i++) {
            if (i in this) { // Перевіряємо, чи елемент існує в масиві
                callback.call(thisArg, this[i], i, this);
            }
        }
    };
}

const array = [1, 2, 3, 4, 5];

array.myForEach(function(element, index, array) {
    console.log('Element: ' + element + ', Index: ' + index);
});

//-Через Array.prototype. створити власний filter


if (!Array.prototype.myFilter) {

    Array.prototype.myFilter = function(callback, thisArg) {

        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }


        let len = this.length;

        let result = [];


        for (let i = 0; i < len; i++) {
            if (i in this) { // Перевіряємо, чи елемент існує в масиві

                if (callback.call(thisArg, this[i], i, this)) {

                    result.push(this[i]);
                }
            }
        }


        return result;
    };
}


const array1 = [1, 2, 3, 4, 5];

const filteredArray = array1.myFilter(function(element, index, array) {
    return element > 2;
});

console.log(filteredArray); // [3, 4, 5]

//-Через Array.prototype. створити власний map
Array.prototype.myMap = function(callback) {

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }


    const result = [];


    for (let i = 0; i < this.length; i++) {

        result.push(callback(this[i], i, this));
    }


    return result;
};


const arr = [1, 2, 3, 4, 5];

const mappedArr = arr.myMap(function(element, index, array) {
    return element * 2;
});

console.log(mappedArr);