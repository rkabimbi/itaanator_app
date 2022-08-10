import React from "react";
import { useState, useEffect } from "react";
import List from "../../components/list/List";

export function ContracPage() {
  const [contracts, setContracts] = useState();

  useEffect(() => {
    console.log("fetch sur contract");
    //i'm fetching here to make my ListComponent reussable after
    fetch("http://localhost:3001/contract")
      .then((response) => response.json())
      .then((data) => {
        setContracts(data);
        console.log(contracts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1>ContracPage</h1>

      <List contracts={contracts} />
    </div>
  );
}
