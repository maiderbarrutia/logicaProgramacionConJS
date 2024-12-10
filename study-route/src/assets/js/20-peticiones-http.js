/*
 * EJERCICIO:
 * Utilizando un mecanismo de peticiones HTTP de tu lenguaje, realiza
 * una petición a la web que tú quieras, verifica que dicha petición
 * fue exitosa y muestra por consola el contenido de la web.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la PokéAPI (https://pokeapi.co), crea un programa por
 * terminal al que le puedas solicitar información de un Pokémon concreto
 * utilizando su nombre o número.
 * - Muestra el nombre, id, peso, altura y tipo(s) del Pokémon
 * - Muestra el nombre de su cadena de evoluciones
 * - Muestra los juegos en los que aparece
 * - Controla posibles errores
 */

// Realizamos una petición HTTP usando fetch
fetch('https://pokeapi.co/api/v2/') // Aquí puedes poner cualquier URL
  .then(response => {
    // Verificamos si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('La petición no fue exitosa');
    }
    // Convertimos la respuesta a formato JSON
    return response.json();
  })
  .then(data => {
    // Mostramos el contenido de la respuesta en consola
    console.log('Contenido de la web:', data);
  })
  .catch(error => {
    // Capturamos errores (por ejemplo, problemas de red o respuesta no válida)
    console.error('Error al hacer la petición:', error);
  });


  //PROGRAMA

console.log("\n ---------------- PROGRAMA -----------------\n")


async function obtenerPokemonInfo(pokemonNameOrId) {
    try {
      // Verificar si el valor introducido es numérico (ID) o un nombre de Pokémon
      const isNumeric = !isNaN(pokemonNameOrId); // Si no es un número, isNaN devuelve true, así que invertimos con '!'
      const pokemonId = isNumeric ? pokemonNameOrId : pokemonNameOrId.toLowerCase(); // Si es numérico, usamos como ID, si no, usamos el nombre (en minúsculas)
  
      // 1. Realizar una petición a la PokéAPI usando el nombre o ID del Pokémon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      
      // 2. Comprobar si la respuesta es correcta (status 200)
      if (!response.ok) {
        throw new Error('No se encontró el Pokémon'); // Si no fue exitosa, lanzamos un error
      }
  
      // 3. Convertir la respuesta a formato JSON para poder leerla
      const data = await response.json();
  
      // 4. Mostrar la información básica del Pokémon
      console.log(`Nombre: ${data.name}`);
      console.log(`ID: ${data.id}`);
      console.log(`Peso: ${data.weight / 10} kg`);
      console.log(`Altura: ${data.height / 10} m`);
      console.log(`Tipos: ${data.types.map(type => type.type.name).join(', ')}`);
      
      // 5. Después de obtener la información del Pokémon, obtener su cadena de evoluciones
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();
  
      // 6. Obtener la URL de la cadena de evoluciones
      const evolutionChainUrl = speciesData.evolution_chain.url;
      
      // 7. Realizar la petición para obtener la cadena de evoluciones
      const evolutionResponse = await fetch(evolutionChainUrl);
      const evolutionData = await evolutionResponse.json();
  
      // 8. Mostrar la cadena de evoluciones
      let evolution = [];
      let current = evolutionData.chain;
  
      // Recorrer la cadena de evoluciones
      while (current) {
        evolution.push(current.species.name);  // Agregamos el nombre del Pokémon a la cadena
        current = current.evolves_to.length > 0 ? current.evolves_to[0] : null;  // Si hay más evoluciones, continuamos
      }
      console.log('Cadena de evoluciones:', evolution.join(' -> '));
  
      // 9. Finalmente, mostramos los juegos en los que aparece el Pokémon
      const gameIndices = data.game_indices.map(game => game.version.name);
      console.log('Juegos en los que aparece:', gameIndices.join(', '));
  
    } catch (error) {
      // Si algo sale mal (error en la petición, Pokémon no encontrado, etc.), lo mostramos
      console.error('Ocurrió un error:', error.message);
    }
  }
  
//   obtenerPokemonInfo('pikachu');
obtenerPokemonInfo(255); 
  
  
  