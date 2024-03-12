// IIFE (Expresión de Función Invocada Inmediatamente) que encapsula la lógica de inyectar y mostrar contenido
let iifeGlobal = (() => {
    let inyectarTodo = (url, id) => {
      id.setAttribute("src", url);
      id.style.display = "block";
    };
  
    return {
      mostrarTodo: (url, id) => inyectarTodo(url, id),
    };
  })();
  
  // Definición de la clase Multimedia para manejar la URL
  class Multimedia {
    constructor(url) {
      let _url = url;
  
      this.getUrl = () => _url;
    }
  
    // Getter para obtener la URL
    getUrl() {
        return this.getUrl();
      }
  
    // Método para establecer el inicio del video 
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
      }
    }
  
  
  // Definición de la clase Reproductor que hereda de Multimedia
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      let _id = id;
  
      this.getId = () => _id;
    }
  
    getId() {
      return this.getId();
    }
  
    playMultimedia() {
      iifeGlobal.mostrarTodo(this.getUrl(), this.getId());
    }
   // Método para establecer el inicio del video
    setInicio(tiempo) {
      const url = `${this.getUrl()}?start=${tiempo}`;
      this.getId().setAttribute("src", url);
    }
  }
  
     
// Crear instancias de Reproductor para reproducir diferentes videos
let musica = document.getElementById("musica");
let peliculas = document.getElementById("peliculas");
let series = document.getElementById("series");

let playMusica = new Reproductor(
  "https://www.youtube.com/embed/eiJq0jYuico?si=-Jm-AN0JGg282oJW",
  musica
);
playMusica.playMultimedia();
playMusica.setInicio(200);

let playPelicula = new Reproductor(
  "https://www.youtube.com/embed/_NwoPYUsiKM?si=sVQRimy3OuNp0AYs",
  peliculas
);
playPelicula.playMultimedia();

let playSerie = new Reproductor(
  "https://www.youtube.com/embed/CQNJCbBzMhM?si=AxiX_GL0DcbMYp4N",
  series
);
playSerie.playMultimedia();