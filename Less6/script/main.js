//-Знайти та вивести довжину наступних стрінгових значень:
const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
strings.forEach(str => console.log(`${str}: ${str.length}`));

//-Перевести до великого регістру наступні стрінгові значення:

const stringsToUpperCase = strings.map(str => str.toUpperCase());
console.log(stringsToUpperCase);

//-Перевести до нижнього регістру наступні стрінгові значення:

const stringsLower = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
const stringsToLowerCase = stringsLower.map(str => str.toLowerCase());
console.log(stringsToLowerCase);

//-Почистити "брудну" стрінгу від зайвих пробілів: let str = ' dirty string   ' .

let str1 = ' dirty string   ';
let cleanedStr = str1.trim();
console.log(cleanedStr);

//-Написати функцію stringToarray(str), яка перетворює рядок на масив слів:

function stringToarray(str) {
    return str.split(' ');
}

let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);
console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(arr, direction) {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    } else {
        throw new Error('Invalid direction');
    }
}

let nums = [11,21,3];
console.log(sortNums(nums, 'ascending'));  // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedArray = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log('Sorted Array:', sortedArray);

let filteredArray = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log('Filtered Array:', filteredArray);

let transformedArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log('Transformed Array:', transformedArray);

//-  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const colors = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: colors[suit]
        });
    }
}

console.log('Deck of cards:', deck);

let aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Ace of Spades:', aceOfSpades);

let sixes = deck.filter(card => card.value === '6');
console.log('All Sixes:', sixes);

let redCards = deck.filter(card => card.color === 'red');
console.log('All Red Cards:', redCards);

let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('All Diamonds:', diamonds);

let clubsNineOrMore = deck.filter(card => card.cardSuit === 'clubs' && (values.indexOf(card.value) >= values.indexOf('9')));
console.log('All Clubs from 9 and above:', clubsNineOrMore);

//-Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

const suits1 = ['spade', 'diamond', 'heart', 'clubs'];
const values1 = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const color1 = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };

let deck1 = [];

for (let suit of suits1) {
    for (let value of values1) {
        deck1.push({
            cardSuit: suit,
            value: value,
            color: color1[suit]
        });
    }
}

let groupedBySuits = deck.reduce((acc, card) => {
    if (card.cardSuit === 'spade') acc.spades.push(card);
    if (card.cardSuit === 'diamond') acc.diamonds.push(card);
    if (card.cardSuit === 'heart') acc.hearts.push(card);
    if (card.cardSuit === 'clubs') acc.clubs.push(card);
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(groupedBySuits);

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        modules: ['html', 'css', 'js', 'react', 'node', 'sass', 'docker']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        modules: ['html', 'css', 'js', 'react', 'java', 'spring', 'docker']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        modules: ['html', 'css', 'js', 'react', 'python', 'flask']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        modules: ['html', 'css', 'js', 'react', 'python', 'flask', 'sass']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        modules: ['html', 'css', 'js', 'react', 'node', 'docker']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        modules: ['html', 'css', 'js', 'react', 'sass']
    }
];

let coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log('Courses with SASS:', coursesWithSass);

let coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log('Courses with Docker:', coursesWithDocker);






