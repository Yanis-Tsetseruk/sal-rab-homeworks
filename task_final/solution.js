// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + через дефис телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - адрес доставки
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    let data = {
        client: 'Петя +7(987)65-43-666',
        order: {
            address: 'ул. Ленина, дом 12, 4 подъезд, 15 этаж, кв 153',
            sum: 1900    
        },
        goods: [
            {
            title: 'Самса',
            count: 2,
            }
        ]    
    }
    

    
    data.goods.pop();
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        delete goods[i].id;
        delete goods[i].price;
        data.goods.push(goods[i]);
    }

    data.order.address = 'ул. ' + address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж, ' + 'кв ' + address.flat;
    data.order.sum = sum;

    data.client = name + ' ' + phone;

    let jsonData = JSON.stringify({data});

    return jsonData;
}
