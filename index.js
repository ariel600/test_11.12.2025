import { menu } from "./utils/prints.js";
import { buyingShares, showingStock, stockSearch } from "./utils/utils.js";

function main(){
    let start = true
    do{
        switch(menu()){
            case 1: stockSearch(); break;
            case 2: showingStock(); break;
            case 3: buyingShares(); break;
            case 4: start = false; break;
            default: console.log("Wrong choice.")
        }
    } while(start);
}
main()