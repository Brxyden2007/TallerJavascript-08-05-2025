class cardsModal extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.render()
    this.setupEventListeners()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(1, 0, 0, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease;
        }
        
        .modal-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .modal-content {
          background-color: lightblue;
          border-radius: 20px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 30px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
          color: black;
          border: 5px solid yellow;
        }
        
        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 30px;
          cursor: pointer;
          color: red;
          background-color: white;
          border-radius: 100%;
          transition: color 0.5s ease;
        }
        
        .modal-close:hover {
          color: black;
        }
        
        .modal-header {
          margin-bottom: 10px;
          text-align: center;
        }
        
        .modal-title {
          font-size: 32px;
          margin-bottom: 10px;
          color: black;
          font-weight: 700;
          background-color: white;
          border: 5px solid yellow;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .modal-subtitle {
          font-size: 20px;
          padding: 8px;
          color: white;
          font-weight: 700;
          border: 5px solid yellow;
          background-color: black;
        }
        
        .modal-image {
          border: 15px solid yellow;
          width: 100%;
          max-height: 500px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 25px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .modal-info {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        
        .modal-info-item {
          flex: 1;
          font-weight: 600;
          min-width: 200px;
          font-size: 25px
        }
        
        .modal-info-label {
          font-weight: bold;
          margin-bottom: 8px;
          color: black;
          font-weight: 700;
          background-color: lightgray;
          font-size: 25px;
        }
        
        .modal-description {
          line-height: 1.8;
          font-size: 26px;
          color: black;
          font-weight: 700;
        }
        
        .character-house {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          margin-top: 5px;
          text-align: center;
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
        
        @media (max-width: 768px) {
          .modal-content {
            width: 95%;
            padding: 20px;
          }
          
          .modal-title {
            font-size: 28px;
          }
          
          .modal-subtitle {
            font-size: 18px;
          }
          
          .modal-description {
            font-size: 16px;
          }
        }
      </style>
      
      <div class="modal-overlay">
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          
          <div class="modal-header">
            <h2 class="modal-title"></h2>
            <div class="modal-subtitle"></div>
          </div>
          
          <img class="modal-image" src="/placeholder.svg" alt="">
          
          <div class="modal-body">
            <div class="modal-info">
              <div class="modal-info-item">
                <div class="modal-info-label">Casa:</div>
                <div class="modal-house-container"></div>
              </div>
              
              <div class="modal-info-item">
                <div class="modal-info-label">Primera Aparición:</div>
                <div class="modal-appearance"></div>
              </div>
            </div>
            
            <div class="modal-info-label">Descripción Completa:</div>
            <div class="modal-description"></div>
          </div>
          
          <div class="modal-timestamp"></div>
        </div>
      </div>
    `
  }

  setupEventListeners() {
    const modalOverlay = this.shadowRoot.querySelector(".modal-overlay")
    const closeButton = this.shadowRoot.querySelector(".modal-close")

    // Cierra el modal al darle click al cerrar
    closeButton.addEventListener("click", () => {
      this.closeModal()
    })

    // Dado el caso de que no se pueda dar a la X o por otros motivos, se ejecuta tambien este evento que nos permite salir del modal al darle afuera del modal
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        this.closeModal()
      }
    })

    // Si no funciona ninguna de las anteriores por otros motivos, ya sea hasta por no llegar a tener mouse, se usa la tecla escape para poder salir del modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        this.closeModal()
      }
    })
  }

  openModal(character) {
    const modalOverlay = this.shadowRoot.querySelector(".modal-overlay")
    const modalTitle = this.shadowRoot.querySelector(".modal-title")
    const modalSubtitle = this.shadowRoot.querySelector(".modal-subtitle")
    const modalImage = this.shadowRoot.querySelector(".modal-image")
    const modalHouseContainer = this.shadowRoot.querySelector(".modal-house-container")
    const modalAppearance = this.shadowRoot.querySelector(".modal-appearance")
    const modalDescription = this.shadowRoot.querySelector(".modal-description")

    // Obtenemos los datos del personaje para el modal
    modalTitle.textContent = character.nombre
    modalSubtitle.textContent = character.nombreClave
    modalImage.src = character.imagen
    modalImage.alt = character.nombre

    // Aplicar el estilo de casa (DC o Marvel) con el mismo formato que en las tarjetas
    const casaLowerCase = character.casa.toLowerCase()
    modalHouseContainer.innerHTML = `<div class="character-house house-${casaLowerCase}">${character.casa}</div>`

    modalAppearance.textContent = character.primeraAparicion
    modalDescription.textContent = character.descripcionCompleta

    // Con esto ejecuto que el modal se active
    modalOverlay.classList.add("active")
  }

  // Al cerrar el modal, se remueve el activo, por ende se cierra
  closeModal() {
    const modalOverlay = this.shadowRoot.querySelector(".modal-overlay")
    modalOverlay.classList.remove("active")
  }
}

// Registrar el componente
customElements.define("card-modal", cardsModal)
  