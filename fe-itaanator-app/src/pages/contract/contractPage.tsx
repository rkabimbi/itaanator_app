import React, { useEffect, useState } from "react";
import {ListComponent} from "../../components/list/ListComponent";
import { Contract } from "../../model/contract/contractModel";



export function ContractPage() {

  const [contracts, setContracts] = useState<[]>();

  useEffect(() => {
  
    console.log("fetch sur contract");
   //i'm fetching here to make my ListComponent reussable after
   fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContracts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  return (
    <React.Fragment>
      <div>
        <h1> contractPage</h1>
          <ListComponent props={contracts}/>
        
      </div>
    </React.Fragment>
  );
}

/*
{contracts &&
          contracts.map((contract) => (
            <div>
              <h3> budget : {contract.budget}</h3>
              <h3> commentaire : {contract.comment}</h3>
              <h3> invoice method: {contract.invoicingMethod}</h3>
            </div>
          ))}
*/