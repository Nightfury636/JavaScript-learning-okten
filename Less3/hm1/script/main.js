//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 1; i <= 10; i++) {
    document.write("<div>Блок " + i + "</div>");
}




//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let count = 1;


while (count <= 20) {
    document.write("<h1>Заголовок " + count + "</h1>");
    count++;
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write("<ul>");


for (let i = 0; i < listOfItems.length; i++) {
    document.write("<li>" + listOfItems[i] + "</li>");
}

document.write("</ul>");

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write('<div class="product-card">');


for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write('<h3 class="product-title">' + product.title.toUpperCase() + '. Price - ' + product.price + '</h3>');
    document.write('<img src="' + product.image + '" alt="" class="product-image">');
}

document.write('</div>');


// Масив

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write("<h2>Користувачі зі статусом true:</h2>");
document.write("<ul>");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write("<li>" + users[i].name + " - " + users[i].age + " років</li>");
    }
}
document.write("</ul>");

document.write("<h2>Користувачі зі статусом false:</h2>");
document.write("<ul>");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write("<li>" + users[i].name + " - " + users[i].age + " років</li>");
    }
}
document.write("</ul>");

document.write("<h2>Користувачі, які старші за 30 років:</h2>");
document.write("<ul>");
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write("<li>" + users[i].name + " - " + users[i].age + " років</li>");
    }
}
document.write("</ul>");
