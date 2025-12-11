import { question } from "readline-sync";
import { filterStocksByPrice, OperateOnStock, searchStock } from "./functions.js";
import { givenPrice, menuBuyOrSell, menuGivenPrice } from "./prints.js";

export function stockSearch(){
    const result = searchStock(question("Enter the value you want to search for (ID or name): "))
    if(result){
        console.table(result)
    } else console.log("No data found.")
};

export function showingStock(){
    let result
    const choice = menuGivenPrice()
    if(choice === 1) {result = filterStocksByPrice(givenPrice(), true)}
    else {result = filterStocksByPrice(givenPrice(), false)}
    if(result){
        console.table(result)
    } else console.log("No data found.")
};

export function buyingShares(){
    const choice = menuBuyOrSell()
    const identifier = question("Enter the value you want to search for (ID or name): ")
    OperateOnStock(choice, identifier)
};