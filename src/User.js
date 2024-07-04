import React from "react";


export default function User() {


    const [nome, setNome] = React.useState("");

    function getName(){
        let namePronpt = prompt("Digite um nome para altera-lo: ");
        setNome(namePronpt);
    }

    return (<div className="usuario">
        <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
        <div className="texto">
            <span>
                <strong>{!nome ? "catanacomics" : nome}</strong>
                <ion-icon name="pencil" onClick={getName}></ion-icon>
            </span>
        </div>
    </div>
    )
}
