import React from "react";
import { useState, useEffect } from "react";
import { Table } from "../../components/list/Table";

export function ContractPage() {
  const [contracts, setContracts] = useState();
  const [jsonKeys, setJsonKeys] = useState();
  const [columnsInfos, setColumnsInfos] = useState();

  useEffect(() => {
    console.log("fetch sur contract");
    //i'm fetching here to make my ListComponent reussable after

    fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((data) => {
        console.table(data);
        return setTheStateContracts(data);
      })
      .then((data) => {
        console.table(data);
        return getJsonKeys(data);
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
        console.log("keys :", res);
        for (let columnInfo of res) {
          console.log("then 3 - for each - num...");
          columnDescription.field = columnInfo;
          columnDescription.headerName = columnInfo;
          columnDescription.width = 180;
          let copy = { ...columnDescription }; //deepcoy
          result.push(copy);
        }
        console.log("then 3 - set state");
        setColumnsInfos(result);
        console.log("putain de result:", result);
      });
  }, []);

  const getJsonKeys = (data) => {
    return new Promise((resolve) => {
      console.log("data a affiche", data);
      resolve(Object.keys(data[0]));
    });
  };

  const setTheStateContracts = (data) => {
    return new Promise((resolve) => {
      console.log("contracts a affiche", data);
      setContracts(data);
      resolve(data);
    });
  };

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
