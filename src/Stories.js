  
    import Story from './Story'

    export default function Stories() {
        const arrayStories = [{src:"assets/img/9gag.svg", alt:"9gag", nome:"9gag"},
                              {src:"assets/img/meowed.svg", alt:"meowed", nome:"meowed"},
                              {src:"assets/img/barked.svg", alt:"barked", nome:"barked"},
                              {src:"assets/img/nathanwpylestrangeplanet.svg", alt:"nathanwpylestrangeplanet", nome:"nathanwpylestrangeplanet"},
                              {src:"assets/img/wawawicomics.svg", alt:"wawawicomics", nome:"wawawicomics"},
                              {src:"assets/img/respondeai.svg", alt:"respondeai", nome:"respondeai"},
                              {src:"assets/img/filomoderna.svg", alt:"filomoderna", nome:"filomoderna"},
                              {src:"assets/img/memeriagourmet.svg", alt:"memeriagourmet", nome:"memeriagourmet"}
                            ]
        return (
            <div>
                <div className="stories">
                    
                    {arrayStories.map((story,index)=>  <Story key={index} src={story.src} alt={story.alt} nome={story.nome}/>)}    
    
                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
            </div>
        )
    }