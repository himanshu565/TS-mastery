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