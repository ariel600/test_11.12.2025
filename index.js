import { menu } from "./utils/prints.js";
import { buyingShares, showingStock, stockSearch } from "./utils/utils.js";

function main(){
    do{
        switch(menu()){
            case 1: stockSearch(); break;
            case 2: showingStock(); break;
            case 3: buyingShares(); break;
            case 4: return
            default: console.log("Wrong choice.")
        }
    } while(true);
}
main()