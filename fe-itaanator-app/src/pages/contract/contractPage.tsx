import React, { useEffect, useState } from 'react'
import { contractList } from '../../model/contract/contractListModel';
import { Contract } from '../../model/contract/contractModel';

export  function ContractPage() {

  
   const [contracts, setContracts] = useState<Contract[]>();

   useEffect(() => {
      console.log("composant ContractPage màj")
      //je dois prevoir une fonction qui quand on modifie le composant avec un setState qqpart et qu'on arrive ici
      //1. renvoi côté back-end les données màj (fetch)


      //2. met à jour le tableau interne


      //le mieux serait probablement d'utiliser un hook qui a la fermeture de l'app charge tt les nouveaux tableaux dans le back (question de performance...mais bon j'y suis pas encore)
   
      

         fetch('http://localhost:3001/contract')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setContracts(data)
           
         })
         .catch((err) => {
            console.log(err.message);
         }); 
    
   }, []);




   //implementer plus tard
   const modifyContracts= () => {
      console.log("je modifie le composant")
      };




  return (
   <React.Fragment>
      <div> 
      <h1> contractPage</h1>

      { contracts && 
                  contracts.map( (contract) =>(
                     <div>
                        <h3> budget : {contract.budget}</h3>
                        <h3> commentaire : {contract.comment}</h3>
                        <h3> invoice method: {contract.invoicingMethod}</h3>

                        </div>
                  ))
                  
               
      }
         
      </div>  
   </React.Fragment>


  )
}


