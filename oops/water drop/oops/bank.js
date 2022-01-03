class parent{
    constructor(){
        console.log("pathi");
    }
}
class child extends parent{
    constructor(){
        super();
        console.log("goud");
    }
}
new child();