export default function Post(props) {
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
                    <img src={props.foto} alt={props.fotoalt} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.imgcurtida} alt={props.curtidaalt} />
                        <div className="texto">
                            Curtido por <strong>{props.curtidopor}</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}