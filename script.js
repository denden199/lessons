let price = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");
let mainList = {
    budjet: price,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

console.log(price / 30);

console.log(mainList.shopGoods);
