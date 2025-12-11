import { questionInt } from "readline-sync"
import { stockMarket } from "../DB/db.js"
import { searchStock } from "./functions.js"

export function buyingShare(identifier){
    const share = searchStock(identifier)
    const amount = questionInt("How many shares do you want to buy? ")
    if(availabilityCheck(share, amount)){
        share.availabilityCheck -= amount
        console.table(share)
        priceCalculation(share.category, amount, true)
    } else console.log("There are not enough shares for sale.")
}

export function sellingShare(identifier){
    const share = searchStock(identifier)
    const amount = questionInt("How many shares do you want to sell? ")
    share.availabilityCheck += amount
    priceCalculation(share.category, amount, false)
    console.table(share)
}

export function availabilityCheck(share, amount){
    if(share.availabilityCheck >= amount) return true
    else return false
}

export function priceCalculation(category, amount, above){
    stockMarket.stocks.forEach((stock) => {
        if(stock.category == category){
            if(above) stock.currentPrice = ((stock.currentPrice/100) * 105) * amount
            else stock.currentPrice = ((stock.currentPrice/100) * 95) * amount
        }
    })
}