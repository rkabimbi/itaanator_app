import React from "react";

//display all the received arrays in a UI MATERIAL list
export default function List(props) {
  console.log("dans list");
  console.log(props);
  console.log(props.contracts);
  return (
    <div>
      {props.contracts &&
        props.contracts.map((contract) => (
          <div>
            <h3> budget : {contract.budget}</h3>
            <h3> commentaire : {contract.comment}</h3>
            <h3> invoice method: {contract.invoicingMethod}</h3>
          </div>
        ))}
    </div>
  );
}
