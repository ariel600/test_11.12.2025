import { questionInt } from "readline-sync"
import { stockMarket } from "../DB/db.js"

export function buyingShare(share){
    const amount = questionInt("How many shares do you want to buy? ")
    if(availabilityCheck(share, amount)){
        share.availableStocks -= amount
        priceCalculation(share.category, amount, true)
        console.table(share)
    } else console.log("There are not enough shares for sale.")
}

export function sellingShare(share){
    const amount = questionInt("How many shares do you want to sell? ")
    share.availableStocks += amount
    priceCalculation(share.category, amount, false)
    console.table(share)
}

export function availabilityCheck(share, amount){
    if(share.availableStocks >= amount) return true
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

// `// ● טיפול בפעולות לא חוקיות ובמזהים לא ידועים
// `// ● עדכון ספירת המניות הזמינה
// // ● עדכון מחיר המניה שנבחרה
// // ● עדכון המחירים של כל המניות באותה קטגוריה