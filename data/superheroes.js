const comicCharacters = [
    {
      id: 1,
      nombre: "Superman",
      nombreClave: "Clark Kent",
      casa: "DC",
      primeraAparicion: "Action Comics #1 (1938)",
      descripcionBreve: "Último hijo de Krypton con super fuerza, vuelo y visión de calor.",
      descripcionCompleta:
        "Superman es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics. El personaje fue creado por el escritor Jerry Siegel y el artista Joe Shuster, estudiantes de secundaria que vivían en Cleveland, Ohio, en 1933. Superman nació en el planeta Krypton y recibió el nombre de Kal-El al nacer. Cuando era bebé, sus padres, el científico Jor-El y su esposa Lara, lo enviaron a la Tierra en una pequeña nave espacial momentos antes de que Krypton fuera destruido en un cataclismo natural. Su nave aterrizó en el campo estadounidense, cerca de la ciudad ficticia de Smallville. Fue encontrado y adoptado por los granjeros Jonathan y Martha Kent, quienes lo llamaron Clark Kent.",
      imagen: "/img/superman.jpeg",
    },
    {
      id: 2,
      nombre: "Batman",
      nombreClave: "Bruce Wayne",
      casa: "DC",
      primeraAparicion: "Detective Comics #27 (1939)",
      descripcionBreve: "Vigilante de Gotham City que utiliza su intelecto y tecnología para combatir el crimen.",
      descripcionCompleta:
        "Batman es un superhéroe de cómic creado por el artista Bob Kane y el escritor Bill Finger. El personaje apareció por primera vez en Detective Comics #27 en 1939. La identidad secreta de Batman es Bruce Wayne, un empresario multimillonario, playboy y filántropo. Después de presenciar el asesinato de sus padres, el Dr. Thomas Wayne y Martha Wayne, cuando era niño, juró venganza contra los criminales, un juramento moderado por el sentido de la justicia. Bruce Wayne se entrena física e intelectualmente y crea un personaje inspirado en los murciélagos para combatir el crimen. Batman opera en la ficticia ciudad de Gotham, con la asistencia de varios personajes secundarios, incluidos su compañero Robin y su mayordomo Alfred Pennyworth.",
      imagen: "/img/batman.jpeg",
    },
    {
      id: 3,
      nombre: "Spider-Man",
      nombreClave: "Peter Parker",
      casa: "Marvel",
      primeraAparicion: "Amazing Fantasy #15 (1962)",
      descripcionBreve: "Joven con poderes arácnidos y un gran sentido de la responsabilidad.",
      descripcionCompleta:
        "Spider-Man es un superhéroe creado por el escritor Stan Lee y el dibujante Steve Ditko. Apareció por primera vez en el cómic de antología Amazing Fantasy #15 en 1962. El personaje es un adolescente huérfano llamado Peter Parker que, después de ser mordido por una araña radiactiva, desarrolla poderes similares a los de una araña, incluyendo fuerza sobrehumana, la capacidad de adherirse a la mayoría de las superficies y un 'sentido arácnido' que le alerta del peligro. Cuando Parker inicialmente busca usar sus nuevas habilidades para la fama y la fortuna, permite que un ladrón escape, quien más tarde asesina a su tío Ben. Devastado y lleno de culpa, Parker decide usar sus poderes para combatir el crimen como Spider-Man.",
      imagen: "/img/spiderman.jpeg",
    },
    {
      id: 4,
      nombre: "Wonder Woman",
      nombreClave: "Diana Prince",
      casa: "DC",
      primeraAparicion: "All Star Comics #8 (1941)",
      descripcionBreve: "Princesa amazona con super fuerza, velocidad y el Lazo de la Verdad.",
      descripcionCompleta:
        "Wonder Woman es una superheroína creada por el psicólogo y escritor William Moulton Marston y el artista Harry G. Peter. El personaje es una princesa guerrera de las Amazonas, una tribu ficticia de mujeres que viven en la isla paradisíaca de Themyscira. En su tierra natal es conocida como la Princesa Diana de Themyscira, pero fuera de su tierra natal utiliza el alias de Diana Prince. Wonder Woman posee una amplia gama de habilidades sobrehumanas y equipo de combate avanzado, como el Lazo de la Verdad, brazaletes que pueden desviar balas, y una tiara que sirve como arma. Fue enviada como embajadora al mundo de los hombres, luchando por la paz, la justicia y la igualdad de género.",
      imagen: "/img/wonderwoman.jpeg",
    },
    {
      id: 5,
      nombre: "Iron Man",
      nombreClave: "Tony Stark",
      casa: "Marvel",
      primeraAparicion: "Tales of Suspense #39 (1963)",
      descripcionBreve: "Genio, multimillonario, playboy y filántropo con una armadura tecnológica avanzada.",
      descripcionCompleta:
        "Iron Man es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue co-creado por el escritor y editor Stan Lee, desarrollado por el guionista Larry Lieber y diseñado por los artistas Don Heck y Jack Kirby. El personaje hizo su primera aparición en Tales of Suspense #39 (marzo de 1963). Anthony Edward 'Tony' Stark es un multimillonario industrial, genio inventor y playboy, que sufre una grave lesión en el pecho durante un secuestro. Cuando sus captores intentan forzarlo a construir un arma de destrucción masiva, en su lugar crea una armadura motorizada para salvar su vida y escapar del cautiverio. Más tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnológicos que diseñó a través de su compañía, Stark Industries.",
      imagen: "/img/ironman.jpeg",
    },
    {
        id: 6,
        nombre: "Black Panther",
        nombreClave: "T'Challa",
        casa: "Marvel",
        primeraAparicion: "Fantastic Four #52 (1966)",
        descripcionBreve: "Rey de Wakanda y un poderoso superhéroe, conocido por su inteligencia, habilidades de combate.",
        descripcionCompleta:
          "Pantera Negra es un icónico superhéroe del universo de Marvel Comics, conocido tanto por su profundidad narrativa como por su importancia cultural. Fue creado por Stan Lee (escritor) y Jack Kirby (dibujante), y apareció por primera vez en el cómic Fantastic Four #52, publicado en julio de 1966. Su debut marcó un momento histórico, ya que fue el primer superhéroe negro en aparecer en los cómics estadounidenses de gran circulación, estableciendo un precedente para una representación más inclusiva en la industria del entretenimiento.",
        imagen: "/img/blackpanther.jpeg",
      },
  ]
  
  // Lo use para que se exporten los datos a otros archivos
  window.comicCharacters = comicCharacters
  