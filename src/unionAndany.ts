let subs: number |string; 
let ApiRequest: "success" | "pending" | "error" = "success";
const orders = ["apple", "banana", "orange"];
let currentorder:string | number | undefined;
subs = 29;
for(let order of orders){
    if(order =="28"){
        currentorder = order;
        break;
    }
    currentorder = "11";

}   
console.log(currentorder);