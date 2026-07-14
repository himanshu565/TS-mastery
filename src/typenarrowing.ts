function getchai(kind: string | number) {
    if (typeof kind === "string") {
        return `chai is type ${kind}`;
    }
    return ` type of chai is ${kind}`; 
}
// This function takes a parameter 'kind' which can be either a string or a number. It checks the type of 'kind' and returns a corresponding message. If 'kind' is a string, it returns a message indicating the type of chai. If 'kind' is a number, it returns a different message indicating the type of chai.
function servechai(msg?: string){
    if(msg){
        return `serving ${msg}`;
    }
    return `serving default chai`;
} // here we are narrowing the type of 'msg' to check if it is defined. If 'msg' is provided, it returns a message indicating that it is serving the specified chai. If 'msg' is not provided, it returns a default message indicating that it is serving default chai.
function orderchai(size: "small" | "large" | "medium" | number) {
    if(size === "small"){
        return ` small cutting chai`;
    }
    if(size === "medium"|| size === "large"){
        return ` make extra chai`;
    }
    return ` order chai ${size}`;
}
class KulhadChai {
    serve(){
        return `serving kulhad chai`;
    }
}
class Cutting {
    serve(){
        return `serving cutting chai`;
    }}
function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return `serving kulhad chai`;
    }

}   
type masalachai = {
    type: "masala",
    spicelevel :number
};
type gingerchai= {
    type: "ginger",
    aroma: number
};
type kadakchai ={
    type: "kadak",
    sugar: number
};

type chai = masalachai | kadakchai | gingerchai ;
function MakeChai(order: chai){
    switch (order.type) {
        case "masala":
            return `you ordered masala chai`
            break;
        case "kadak":
            return  `you ordered kadak chai`
            break;
    
        case "ginger":
            return `you order ginger chai`
            break;
    }
// in this we are narrowing the type of orders by defining the type of chai.
}

function brew(order:masalachai | Cutting){
    if("spicelevel" in order)
        return `its masala chai`;
 } // this type of ex. we are checking if spicelevel is present in the object order.

 function isStringArray(arr : unknown) : arrstring[]{
    // `lala`;
// when using unknown the returning type should be mentioned when using it .
// in case of any its not necessary to mention the returning type.
 }
 type book = {
    name: string,
 }
 let bookstring = '{"name": "The Great Gatsby"}'
 let bookobject = JSON.parse(bookstring) as book;
 console.log(bookobject);
 // by defining the type of bookobject as book we are narrowing the type of bookobject to be of type book.