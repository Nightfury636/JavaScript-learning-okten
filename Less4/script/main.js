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
