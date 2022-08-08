import { Contract } from "./contractModel";

export class contractList {
  contractList: Contract[] = [];

  constructor() {
    fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((contracts) => {
        console.log(contracts);
        //je vais boucler sur data pour assigner ca dans l'objet
        contracts.map((contract: Contract) => {
          this.contractList.push(contract);
          console.log("j ajoute un contrat à contractlist:", contract);
        });

      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  //je devrais creer des get et setteur
}

export const contractListObject= new contractList()
