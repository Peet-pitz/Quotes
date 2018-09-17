export class Quote {
    public showDescription:boolean;
    constructor(public id:number,public name:string,public description: string,public completeDate:Date,public vote:number, public disvote:number){
        this.showDescription=false
        this.vote=0
        this.disvote=0
    }
}
