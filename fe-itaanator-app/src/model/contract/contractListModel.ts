export class contractList{
    contractList=[]

    constructor(){
    fetch('http://localhost:3001/contract')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         //je vais boucler sur data pour assigner ca dans l'objet
         for (let contract  in data){
            console.log("un contrat")

         }
        console.log("je cree")
         
      })
      .catch((err) => {
         console.log(err.message);
      });

   

    }

//je devrais creer des get et setteur

}