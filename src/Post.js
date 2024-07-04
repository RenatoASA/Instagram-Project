import React from "react";



export default function Post(props) {

    
    let [icon, setIcon] = React.useState("bookmark-outline");
    let [iconLike, setIconLike] = React.useState("assets/img/likeImg.png");
    let [like, setLike] = React.useState(0);

    

    function likePost(){
        if(iconLike === "assets/img/likeImg.png"){
            setIconLike("assets/img/likevermelhoimg.png");
            setLike(like+1);
        }else{
            setIconLike("assets/img/likeImg.png");
            setLike(like-1);
        }

    }
    function likePhoto(){
        if(iconLike === "assets/img/likeImg.png"){
            setIconLike("assets/img/likevermelhoimg.png");
            setLike(like+1);
        }
    }
    function salvePost(){
        if(icon === "bookmark-outline"){
            setIcon("bookmark");
        }else{
            setIcon("bookmark-outline");
        }
    }    
    return (
        <div>
            <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={props.srcuser} alt={props.altuser} />
                        {props.name}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img src={props.foto} alt={props.fotoalt} onClick={likePhoto}/>
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                        <img src={iconLike} alt="imagem de perfil" onClick={likePost} className="icon" />
                            <ion-icon name="chatbubble-outline" className="ion"></ion-icon>
                            <ion-icon name="paper-plane-outline" className="ion"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={icon} onClick={salvePost} className="ion"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.imgcurtida} alt={props.curtidaalt} />
                        <div className="texto">
                            Curtido por <strong>{props.curtidopor}</strong> e <strong>outras {like} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}