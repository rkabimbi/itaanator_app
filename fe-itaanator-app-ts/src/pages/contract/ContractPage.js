import React from "react";
import { useState, useEffect } from "react";
import {Table} from "../../components/list/Table";

export function ContractPage() {
  
  const [contracts, setContracts] = useState();
  const [jsonKeys, setJsonKeys] = useState();
  

  useEffect(() => {
    console.log("fetch sur contract");
    //i'm fetching here to make my ListComponent reussable after
    fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((data) => {
        setContracts(data);
        setJsonKeys(Object.keys(data[0]))//allow to get the keys of JSON. I need this to make Table components reusable
        console.log(contracts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  

  return (
    <div>
      <h1>ContracPage</h1>

      <Table contracts={contracts} jsonKeys={jsonKeys} />
    </div>
  );
}
