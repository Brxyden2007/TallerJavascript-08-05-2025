class CharacterCard extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: "open" })
    }
  
    // Observa los cambios que se pueden dar en los atributos
    static get observedAttributes() {
      return ["character-data"]
    }
  
    // Cuanto cambian los atributos (Callback)
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "character-data" && newValue) {
        const characterData = JSON.parse(newValue)
        this.render(characterData)
      }
    }
  
    render(character) {
      this.shadowRoot.innerHTML = `
        <style>
          .character-card {
            background-color: rgba(255, 255, 255);
            border-radius: 12px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
          
          .character-card:hover {
            transform: translateY(-15px);
            border: 5px solid yellow;
          }
          
          .card-content {
            padding: 20px;
            border: 5px solid yellow;
          }
          
          .character-name {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
            background-color: black;
            border: 5px solid yellow;
            color: white;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .character-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: 5px solid yellow;
            }
          
          .character-info {
            margin-bottom: 15px;
            font-size: 19px;
          }
          
          .info-label {
            font-weight: bold;
            color: black;
            font-size: 22px;
            text-transform: uppercase;
          }
          
          .character-house {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 19px;
            font-weight: bold;
            margin-bottom: 12px;
          }
          
          .house-dc {
            background-color: #0476F2;
            color: white;
            border: 5px solid yellow;
          }
          
          .house-marvel {
            background-color: #ED1D24;
            color: white;
            border: 5px solid yellow;
          }
          
          .character-appearance {
            font-size: 21px;
            color: #444;
            margin-bottom: 12px;
          }
          
          .character-description {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
            line-height: 1.5;
          }
          
          .see-more-btn {
            background-color: black;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.1s ease;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 5px solid yellow;
          }
          
          .see-more-btn:hover {
            background-color: white;
            color: black;
            border: 5px solid gold;
          }
        </style>
        
        <div class="character-card">
          <div class="card-content">
            <h2 class="character-name">${character.nombre}</h2>
            
            <img src="${character.imagen}" alt="${character.nombre}" class="character-image">
            
            <div class="character-info">
              <p><span class="info-label">Nombre Clave:</span> ${character.nombreClave}</p>
            </div>
            
            <div class="character-info">
              <p><span class="info-label">Casa:</span> 
                <span class="character-house house-${character.casa.toLowerCase()}">${character.casa}</span>
              </p>
            </div>
            
            <div class="character-info">
              <p><span class="info-label">Primera Aparición:</span> ${character.primeraAparicion}</p>
            </div>
            
            <div class="character-info">
              <p><span class="info-label">Descripción:</span></p>
              <div class="character-description">${character.descripcionBreve}</div>
            </div>
            
            <button class="see-more-btn" data-id="${character.id}">Ver más</button>
          </div>
        </div>
      `
  
      // Aqui agrego la funcion/evento del boton de "Ver más"
      const seeMoreBtn = this.shadowRoot.querySelector(".see-more-btn")
      seeMoreBtn.addEventListener("click", () => {
        // Hace evento para abrir el modal del personaje
        const modalEvent = new CustomEvent("open-character-modal", {
          bubbles: true, // Determina si el evento se propaga hacia arriba a través de los padres del elemento original
          composed: true, // determina si el evento puede atravesar el limite del shadow DOM
          detail: { characterId: character.id }, // Contiene la información que se pasa desde el componente que dispara el evento hasta los componentes que lo escuchan.
        })
  
        this.dispatchEvent(modalEvent) // Se utiliza para disparar el evento personalizado del modal
      })
    }
  }
  
  customElements.define("character-card", CharacterCard)
  