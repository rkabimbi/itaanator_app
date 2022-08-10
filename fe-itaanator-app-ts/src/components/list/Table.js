import React, { useEffect } from "react";
import "./Table.sass";

import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, confrere: "Snow", digitalInvoice: false, invoiceAnnexe: true, invoicingMethod: true, comment:"blablabla",budget:5200 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];


//display all the received arrays in a UI MATERIAL list
export function Table(props) {
  const [columns2, setColumns] = useState();
  
  useEffect(() => {
    
  
      let result = [];
  

      let titleDescription = {
        field: "",
        headerName: "",
        width: "",
      };

      for (let title in props.jsonKeys) {
        titleDescription.field = title;
        titleDescription.headerName = title;
        titleDescription.width = 70;
        let copy = { ...titleDescription }; //deepcoy
        result.push(copy);
      }

       setColumns(result);
      console.log("col2")
      console.log(columns2)
    }

  , []);

  console.log("dans list");
  console.log(props);
  console.log(props.contracts);
  console.log(props.jsonKeys);





  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

/*
{props.contracts &&
  props.contracts.map((contract) => (
    <div>
      <h3> budget : {contract.budget}</h3>
      <h3> commentaire : {contract.comment}</h3>
      <h3> invoice method: {contract.invoicingMethod}</h3>
    </div>
  ))}

  */
