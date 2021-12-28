class Bank{
    min_bal=500;
    open_account(){
        console.log("Account openend successfully");  
    }
    get_balance(){
        return this.min_bal+200;
    }
}
let c1 = new Bank();
console.log(c1.min_bal);
let amount = c1.get_balance();
console.log(c1.get_balance());
c1.open_account();