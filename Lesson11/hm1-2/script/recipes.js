//-- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
// URL для получения информации о рецептах
// URL для получения информации о рецептах
const url = 'https://dummyjson.com/recipes';

// Функция для получения данных и их отображения
async function fetchAndDisplayRecipes() {
    try {
        // Выполнение GET-запроса
        const response = await fetch(url);

        // Проверка успешности запроса
        if (!response.ok) {
            throw new Error('Ошибка при получении данных: ${response.status}');
        }

        // Получение данных в формате JSON
        const data = await response.json();

        // Вывод информации о всех рецептах
        data.recipes.forEach(recipe => {
            console.log('ID рецепта:', recipe.id);
            console.log('Название:', recipe.title);
            console.log('Описание:', recipe.description);
            console.log('Ингредиенты:');
            recipe.ingredients.forEach(ingredient => {
                console.log('  -', ingredient);
            });
            console.log('Инструкции:', recipe.instructions);
            console.log('Время приготовления (минуты):', recipe.cookingTime);
            console.log('--------------------------------------');
        });
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Вызов функции для выполнения запроса и отображения данных
fetchAndDisplayRecipes();