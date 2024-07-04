import Suggestion from "./Suggestion"

export default function Suggestions() {
  const arraySuggestion =[{src:"assets/img/marvelimg.jpeg", alt:"marvel", nome:"marvel", razao:"Segue você"},
                          {src:"assets/img/filomoderna.svg", alt:"filomoderna", nome:"filomoderna", razao:"Segue você"},
                          {src:"assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
                          {src:"assets/img/chibirdart.svg", alt:"chibirdart", nome:"chibirdart", razao:"Segue você"}
  ]
  return (
    <div>
      
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {arraySuggestion.map((suggestion,index)=>  <Suggestion key={index} src={suggestion.src} alt={suggestion.alt} nome={suggestion.nome} razao={suggestion.razao}/>)}   
      </div>
    </div>
  )
}