//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let cars = ['bmw', 'audi', 'opel', 'mazda', 'nissan', 'ford', 'ferrari','lotus', 'skoda', 'jeep'];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: "Harry Potter",
    pageCount: 300,
    genre: "Fantasy",
    authors: [
        { name: "Joanne Kathleen Rowling", age: 58 }]
};


let book2 = {
    title: "Alice in Wonderland",
    pageCount: 220,
    genre: "Children Fantasy",
    authors: [
        { name: "Luis Karroll", age: 70 }]
};


let book3 = {
    title: "The Chronicles Of Narnia",
    pageCount: 767,
    genre: "Fantasy",
    authors: [
        { name: "Klaiva Luisa", age: 58 }]
};


console.log(book1);
console.log(book2);
console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача



let users = [
    { name: "Ivan", username: "ivan123", password: "qwerty123" },
    { name: "Maria", username: "maria456", password: "password456" },
    { name: "Alex", username: "alex789", password: "abc123" },
    { name: "Katya", username: "katya_01", password: "secret123" },
    { name: "Petr", username: "petro567", password: "mypassword" },
    { name: "Anna", username: "anna_02", password: "hello123" },
    { name: "Victor", username: "victor777", password: "victorpass" },
    { name: "Olena", username: "olena_03", password: "password123" },
    { name: "Andiy", username: "andrew999", password: "andrewpass" },
    { name: "Ylia", username: "yulia_04", password: "yuliapassword" }
];

users.forEach(function(user) {
    console.log("password " + user.name + ": " + user.password);
});

