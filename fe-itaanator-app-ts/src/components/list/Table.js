import React, { useEffect } from "react";
import "./Table.sass";

import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";
import { useState } from "react";



//display all the received arrays in a UI MATERIAL list
export function Table(props) {
  


if(props.columnsInfos && props.contracts){

  return (
    <div className='tabContract' >
      <DataGrid className='tab'
        rows={props.contracts}
        columns={props.columnsInfos}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <div> </div>
    </div>
  );

}
}


