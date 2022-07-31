import React from "react";

//faire un context avec ca comme ca c'est le composant de page qui renverra le bon titre
interface Titre {
  titre: string;
}

export default function SearchBar(props: Titre) {
  return (
    <div>
      <div>searchinput</div>
      <div>{props.titre} + tri </div>
    </div>
  );
}
