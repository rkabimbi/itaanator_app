import React from "react";
import { useState, useEffect } from "react";
import { Table } from "../../components/list/Table";

export function ContractPage() {
  const [contracts, setContracts] = useState();
  const [jsonKeys, setJsonKeys] = useState();
  const [columnsInfos, setColumnsInfos] = useState();

  /*
  useEffect(() => {
    console.log("fetch sur contract");
    //i'm fetching here to make my ListComponent reussable after
  
    fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((data) => {
        setContracts(data);
        setJsonKeys(Object.keys(data[0])); //allow to get the keys of JSON. I need this to make Table components reusable
        console.log("contracts: ", contracts);
        return jsonKeys;
      })
      .then((res) => {
        console.log("then 3")
        let result = [];

        let columnDescription = {
          field: "",
          headerName: "",
          width: "",
        };
        console.log("then 3 - for each")
        for (let columnInfo in res) {
          console.log("then 3 - for each - num...")
          columnDescription.field = columnInfo;
          columnDescription.headerName = columnInfo;
          columnDescription.width = 70;
          let copy = { ...columnDescription }; //deepcoy
          result.push(copy);
        }
        console.log("then 3 - set state")
        setColumnsInfos(result);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  */

  useEffect(() => {
    console.log("fetch sur contract");
    //i'm fetching here to make my ListComponent reussable after

    fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((data) => {
        console.table(data);
        //setContractsAndJsonKeys(data)
        return fcttest2(data);
      })
      .then((data) => {
        console.table(data);
        //setContractsAndJsonKeys(data)
        return fcttest(data);
      })
      .then((res) => {
        console.log("then 3");
        let result = [];

        let columnDescription = {
          field: "",
          headerName: "",
          width: "",
        };
        console.log("then 3 - for each");
        console.log("keys :",res)
        for (let columnInfo of res) {
          console.log("then 3 - for each - num...");
          columnDescription.field = columnInfo;
          columnDescription.headerName = columnInfo;
          columnDescription.width = 70;
          let copy = { ...columnDescription }; //deepcoy
          result.push(copy);
        }
        console.log("then 3 - set state");
        setColumnsInfos(result);
        console.log("putain de result:",result)
      });
  }, []);

  const fcttest = (data) => {
    return new Promise((resolve) => {
      console.log("data a affiche", data);
      resolve(Object.keys(data[0]));
    });
  };

  const fcttest2 = (data) => {
    return new Promise((resolve) => {
      console.log("contracts a affiche", data);
      setContracts(data)
      resolve(data);
    });
  };

  /*
//déclarer
  const setContractsAndJsonKeys = (args) =>{
    return new Promise( (resolve) => {
      console.log("resolve1 :\n" ,  "args :", args)//ca doit tjrs s'afficher vu qu'il a attendu les args avant de venir ici
      let dicto={
        id:7,
        confrere: "Snow", 
        digitalInvoice: false, 
        invoiceAnnexe: true, 
        invoicingMethod: true, 
        comment:"blablabla",
        budget:5200
      }
      setColumnsInfos(dicto)
      console.log("column infos :",columnsInfos)
    })
  }


  const setDicto = (args) =>{
    return new Promise( (resolve) => {
      console.log("resolve2 :\n" ,  "args :", args)
      setColumnsInfos(args)
      resolve(columnsInfos)
     
    })
  }


*/

  /*
  const setTitlesFunction = function setTitlesFunc () { 
      let result = []

      let titleDescription = {
        field: "",
        headerName: "",
        width: "",
      };

      for (let title in jsonKeys) {
        titleDescription.field = title;
        titleDescription.headerName = title;
        titleDescription.width = 70;
        let copy = { ...titleDescription }; //deepcoy
        result.push(copy);
      }

      setColumnsTitles(result);
      
      console.log("col2 : \n",columnsTitles)
    }
  */

  return (
    <div>
      <h1>ContracPage</h1>

      <Table
        contracts={contracts}
        jsonKeys={jsonKeys}
        columnsInfos={columnsInfos}
      />
    </div>
  );
}
