import { stockMarket } from "../DB/db.js";
import { buyingShare, sellingShare } from "./functionsHlpe.js";

export function searchStock(identifier){
    return stockMarket.stocks.filter((stock) => stock.name === identifier || stock.id === identifier)
}

export function filterStocksByPrice(givenPrice, above){
    if(above){
        return stockMarket.stocks.filter((stock) => stock.currentPrice > givenPrice)
    } else {
        return stockMarket.stocks.filter((stock) => stock.currentPrice < givenPrice)
    }
}

export function OperateOnStock(operation, identifier){
    const share = searchStock(identifier)
    if(share == false) {
        console.log("No data found");
        return
    } if (operation === "Buy"){
        buyingShare(share[0])
    } else sellingShare(share[0])
}