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