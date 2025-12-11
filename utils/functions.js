import { stockMarket } from "../DB/db.js";

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

}
// מטפל בקנייה או מכירה של מניה.
// דרישות:
// ● הפעולה חייבת להיות "קנייה" או "מכירה"
// ● המזהה יכול להיות שם או מזהה
// ● טיפול בפעולות לא חוקיות ובמזהים לא ידועים
// ● שאל את המשתמש כמה יחידות לקנות או למכור
// ● עדכון ספירת המניות הזמינה
// ● עדכון מחיר המניה שנבחרה
// ● עדכון המחירים של כל המניות באותה קטגוריה
// לא מחזיר דבר

