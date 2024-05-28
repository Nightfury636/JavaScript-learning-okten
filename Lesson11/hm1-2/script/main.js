//- - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

const url = 'https://dummyjson.com/carts';

async function fetchAndDisplayCarts() {
    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Ошибка при получении данных: ${response.status}');
        }

        const data = await response.json();


        data.carts.forEach(cart => {
            console.log('ID корзины:', cart.id);
            console.log('ID пользователя:', cart.userId);
            console.log('Дата:', cart.date);
            console.log('Продукты:');
            cart.products.forEach(product => {
                console.log('  ID продукта:', product.id);
                console.log('  Название:', product.title);
                console.log('  Цена:', product.price);
                console.log('  Количество:', product.quantity);
                console.log('  Общее количество:', product.total);
                console.log('  Скидка в процентах:', product.discountPercentage);
                console.log('  Скидка в долларах:', product.discountedPrice);
            });
            console.log('Общее количество продуктов:', cart.totalProducts);
            console.log('Общая цена:', cart.total);
            console.log('Общая скидка:', cart.totalDiscount);
            console.log('--------------------------------------');
        });
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

fetchAndDisplayCarts();

