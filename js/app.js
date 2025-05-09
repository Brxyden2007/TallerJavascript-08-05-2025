document.addEventListener("DOMContentLoaded", () => {
    const containerShowCharacters = document.getElementById("containerShowCharacters")
    const cardsModal = document.getElementById("cardsModal")
  
    // Aqui se cargan los personajes que estan en la data
    loadCharacters(window.comicCharacters)
  
    // Agrego addEventListener para empezar a ejecutar el sistema
    document.addEventListener("character-search", (e) => {
      const query = e.detail.query.toLowerCase()
  
      if (query.trim() === "") { // Use el trim para eliminar los espacios extras que pueden llegar a haber
        loadCharacters(window.comicCharacters)
      } else {
        // Use esta constante para filtrar los nombres por clave
        const filteredCharacters = window.comicCharacters.filter((character) =>
          character.nombreClave.toLowerCase().includes(query),
        )
  
        loadCharacters(filteredCharacters)
      }
    })
  
    // Agregue addEventListener para cerrar el modal
    document.addEventListener("open-character-modal", (e) => {
      const characterId = e.detail.characterId
      const character = window.comicCharacters.find((char) => char.id === characterId)
  
      if (character) {
        cardsModal.openModal(character)
      }
    })
  
    // Carga los personajes
    function loadCharacters(characters) {
      // Con esto limpio completamente el contenedor
      containerShowCharacters.innerHTML = ""
  
      // Agrego y creo tarjetas de personaje (ordenado)
      characters.forEach((character) => {
        const characterCard = document.createElement("character-card")
        characterCard.setAttribute("character-data", JSON.stringify(character))
        containerShowCharacters.appendChild(characterCard)
      })
    }
  })
  