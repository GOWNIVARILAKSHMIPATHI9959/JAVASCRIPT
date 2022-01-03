class loan{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    present(){
        return "my name "+ this.name
        return "my age "+ this.age

    }
}



class personalloan extends loan{
    constructor(name,age,city){
        super(name,age,city);
        this.name=name;
        this.age=age;
        this.city=city;

    }
    show_details(){
        return this.present()+ ' my name is '+ this.name;
        return this.present()+ ' my name is '+ this.age;
        return this.present()+ ' my name is '+ this.city;
        
    }
    
}
details1=new personalloan('lakshmipathi',21,'bng');
console.log(details1.show_details());

