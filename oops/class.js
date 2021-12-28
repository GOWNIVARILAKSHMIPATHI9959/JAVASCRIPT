class SbiBank{
    min_bal=1000
    open_account(){
        console.log("account opened successfully");
    }
}
let c1 = new SbiBank();
console.log(c1);
console.log(c1.min_bal);
c1.open_account();
