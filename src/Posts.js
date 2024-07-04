import Post from "./Post";


export default function Posts(){
    const arrayPosts =[{ srcuser:"assets/img/filomoderna.svg", altuser:"filomoderna", name:"filomoderna", foto:"assets/img/ramboimg.jpeg", fotoalt: "rambo", imgcurtida:"assets/img/wawawicomics.svg", curtidaalt:"wawawicomics", curtidopor:"rambo"},
                       { srcuser:"assets/img/marvelimg.jpeg", altuser:"marvel", name:"marvel", foto:"assets/img/marvelheroes.jpg", fotoalt: "gato-telefone", imgcurtida:"assets/img/filomoderna.svg", curtidaalt:"filomoderna", curtidopor:"filomoderna"},
                       { srcuser:"assets/img/meowed.svg", altuser:"meowed", name:"meowed", foto:"assets/img/gato-telefone.svg", fotoalt: "gato-telefone", imgcurtida:"assets/img/respondeai.svg", curtidaalt:"respondeai", curtidopor:"respondeai"},
                       { srcuser:"assets/img/barked.svg", altuser:"barked", name:"barked", foto:"assets/img/dog.svg", fotoalt: "dog", imgcurtida:"assets/img/adorable_animals.svg", curtidaalt:"adorable_animals", curtidopor:"petcenter"}
    ]
    
    return (
        <div className="posts">
             {arrayPosts.map((post,index)=>  <Post key={index} srcuser={post.srcuser} altuser={post.altuser} name={post.name}  foto={post.foto} fotoalt={post.fotoalt}  imgcurtida={post.imgcurtida} curtidaalt={post.curtidaalt} curtidopor={post.curtidopor}/>)}   
            
        </div>
    );
}