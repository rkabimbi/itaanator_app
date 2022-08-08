import React, { useEffect, useState } from 'react'
import { contractList } from '../../model/contract/contractListModel';

export  function ContractPage() {

  
   const [contracts, setContracts] = useState(null);

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
            setContracts(data[0].budget)
           
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
   <div>
      <h1> contractPage</h1>
      <div>{contracts ? contracts : "rien"} </div>
   </div> 


  );
}


