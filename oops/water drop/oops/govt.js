class CM{
    salcm = 1000000;
    applysal(){
        console.log("applying sal- cheif minister");
    }
}
class MLA extends CM{
    sal = 100000;
    saldetails(){
        console.log(this.sal);
        console.log(this.salcm);
    }
    
}
let MLA1 = new MLA();
MLA1.saldetails()
MLA1 .applysal();