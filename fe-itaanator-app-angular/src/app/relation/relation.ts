export class Relation {

  
    id: number;
    //readonly timestamp: Date;
    VATLiability: string;
    taxDebt: boolean;
    finDebt: boolean;
    
  
  
      constructor(
        id:number, VATLiability: string, taxDebt: boolean, finDebt: boolean
      ){
        this.id=id
        this.VATLiability=VATLiability
        this.taxDebt=taxDebt
        this.finDebt=finDebt
      }
    }