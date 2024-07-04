import React from "react";


export default function User() {


    let [nome, setNome] = React.useState("");
    let [link, setLink] = React.useState(""); 
    function getName(){
        let namePronpt = prompt("Digite um nome para altera-lo: ");
        setNome(namePronpt);
    }

    function getLink(){
        let linkPronpt = prompt("Digite um link para alter a imagem: ");
        setLink(linkPronpt);
    }

    return (<div className="usuario">
        <img src={!link ? "assets/img/catanacomics.svg" : link} alt="imagem de perfil" onClick={getLink} />
        <div className="texto">
            <span>
                <strong>{!nome ? "catanacomics" : nome}</strong>
                <ion-icon name="pencil" onClick={getName}></ion-icon>
            </span>
        </div>
    </div>
    )
}
