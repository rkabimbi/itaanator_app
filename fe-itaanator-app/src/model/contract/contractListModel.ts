import { Contract } from "./contractModel";

export class contractList {
  contractList: Contract[] = [];

  constructor() {
    /*
    console.log("constructar contractList");
    fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for(let d in data)
        {
          
          console.log(d)
          //let contract= new Contract(d.id ,d.confrere,d.digitalInvoice,d.invoicingMethod,d.invoiceAnnexe,d.comment,d.budget,[])
          
          //this.contractList.push(d)
        }
        this.contractList=data
        

      })
      .catch((err) => {
        console.log(err.message);
      });
      */
  };

  

  }
  




export const contractListObject= new contractList()
