export class Event{
    _id: number;
    _name: string;
    _type: string;
    _date: Date;
    _locate: string;
    _price: string;

    public constructor (id:number, name:string, type:string, date:Date, locate:string, price:string){
        this._id     = id;
        this._name   = name;
        this._type   = type;
        this._date   = date;
        this._locate = locate;
        this._price  = price;
    }

    public set id (id:number){
        this._id = id;
    }

    public set name (name:string){
        this._name = name;
    }

    public set type (type:string){
        this._type = type;
    }

    public set date (date:Date){
        this._date = date;
    }

    public set locate (locate:string){
        this._locate = locate;
    }

    public set price (price:string){
        this._price = price;
    }
}