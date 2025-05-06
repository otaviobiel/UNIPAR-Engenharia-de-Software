let buy = document.querySelector("#buy");
let price = document.querySelector("#price");
let result = document.querySelector("#troco");

function troco(){
    let valbuy = parseFloat(buy.value);
    let valprice = parseFloat(price.value);
    let troco = valbuy-valprice;

    result.textContent = troco;
}