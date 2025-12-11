import { questionFloat, questionInt } from "readline-sync";

export function menu(){
    console.log("1 - Search for a stock by name or ID.");
    console.log("2 - View all stocks by price.");
    console.log("3 - Buy or sell stocks.");
    console.log("4 - Exit.");
    switch(questionInt("Enter your choice: ")){
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return 4;
        default: return menu()
    }
}

export function menuGivenPrice(){
    console.log("1 - Above given price.");
    console.log("2 - Below given price");
    switch(questionInt("Enter your choice: ")){
        case 1: return 1;
        case 2: return 2;
        default: return menuGivenPrice()
    }
}

export function givenPrice(){
    return questionFloat("Enter the price: ")
}

export function menuBuyOrSell(){
    console.log("1 - Buy");
    console.log("2 - Sell");
    switch(questionInt("Enter your choice: ")){
        case 1: return "Buy";
        case 2: return "Sell";
        default: return menuBuyOrSell()
    }
}