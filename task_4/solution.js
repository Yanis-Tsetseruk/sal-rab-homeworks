// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON

    let data = JSON.parse(json); // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    let products = data.products; // и запишите в переменную data
    return products; // Верните как результат функции свойство products объекта data
}

function renderProductsCards(json) {// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
clearProducts(); // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
let products = parseProducts(json); // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
let length = products.length; // Запишите в переменную length значение свойства products.length
for (let i = 0; i < length; i += 1) {// Напишите цикл, в котором перебираете все products от 0 до (length)
addProduct(products[i]);
}// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
}