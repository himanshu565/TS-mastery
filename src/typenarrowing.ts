function getchai(kind: string | number) {
    if (typeof kind === "string") {
        return `chai is type ${kind}`;
    }
    return ` type of chai is ${kind}`; 
}