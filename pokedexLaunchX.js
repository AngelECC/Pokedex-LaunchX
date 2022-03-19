//Se ejecuta después de cargar el HTML para que funcione la tecla Enter en el input
window.onload=function (){
    document.querySelector('#pokeName').addEventListener ('keypress', function(e){
        var keycode = e.keyCode || e.which;
    if (keycode == 13) {
        fetchPokemon();
    }
    })
} 

//Consultar un API

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200") {
            console.log(res);
            pokeImage("./img/pokemonsad.gif");
        }
        else {
            return res.json();
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        let pokeNamee = `Nombre: ${data.name} - ID: ${data.id}`;
        //console.log(pokeNamee);
        pokeNombre(pokeNamee);
        // let pokeType = `Type: ${data.types.type}`;
        // console.log(pokeType);
        let arrayType = data.types;
        let pokeType = 'Tipo: ' + recorreType (arrayType);
        pokemonType(pokeType);
        // let pokeStats = `stats: ${data.stats}`;
        // console.log(pokeStats);
        let arrayStats = data.stats;
        let pokeStats = 'Estadiscticas: ' + recorreStats (arrayStats);
        stats(pokeStats);
        // let pokeMoves = `Moves: ${data.moves}`;
        // //console.log(pokeMoves);
        let arrayMoves = data.moves  //Creamos el array de los movimientos
        let pokeMoves = 'Movimientos: ' + recorreMovimientos (arrayMoves);      //moves => array[] => move => name
        moves(pokeMoves); 
        //Insertar Datos
        //generarDatos(pokeNamee, pokeType, pokeStats, pokeMoves);
        generarDatos(pokeNamee);
        generarTipo(pokeType);
        generarStat(pokeStats);
        generarMovimientos(pokeMoves);
    })
}

//fetchPokemon();

const recorreMovimientos = (movimientos) => {
    let contador = 0;
    let cadenaMoves = '';
    movimientos.forEach(item => {
    if(contador > 5){ //contador para solo imprimir cierto número de movimientos.
        return;
    }
    cadenaMoves = cadenaMoves + item.move.name + '. ';
    contador = contador + 1;
  });
  return cadenaMoves;
}

const recorreStats = (estats) => { 
    let cadenaStats = '';
    estats.forEach(item => {
    cadenaStats = cadenaStats + item.stat.name + ': ' + item.base_stat + ' | ' ;
  });
  return cadenaStats;
}

const recorreType = (pokeTipo) => { 
    let cadenaType = '';
    pokeTipo.forEach(item => {
    cadenaType = cadenaType + item.type.name;
  });
  return cadenaType;
}


//Crear imagen
const pokeImage = (url) => {
    const pokeImg = document.getElementById(`pokeImg`);
    pokeImg.src = url;
}

//Nombre o ID
const pokeNombre = (url) => {
    const pokeNamee = document.createElement('h1');
    pokeNamee.innerText = url;
}


//Type
const pokemonType = (url) => {
    const pokeType = document.createElement('h2');
    pokeType.innerText = url;
}


//Stats
const stats = (url) => {
    const pokeStats = document.createElement('h2');
    pokeStats.innerText = url;
}

//Moves
const moves = (url) => {
    const pokeMoves = document.createElement('h2');
    pokeMoves.innerText = url;
}

// const generarDatos = (nombre, tipo, stats, moves) => {
//     const caja = document.getElementById('test'); //Obetemos el div
//     while (caja.firstChild) {
//         caja.removeChild(caja.firstChild); 
//     }

//     const tnombre = document.createElement('p'); //Creacion de la etiqueta p
//     const tType = document.createElement('p');
//     const tStats = document.createElement('p');
//     const tMoves = document.createElement('p');

//     tnombre.innerText  = nombre; //Meter la info a la p
//     tType.innerText = tipo;
//     tStats.innerText = stats;
//     tMoves.innerText = moves;

//     caja.appendChild(tnombre); //La p la metemos al div
//     caja.appendChild(tType);
//     caja.appendChild(tStats);
//     caja.appendChild(tMoves);
    
// }

const generarDatos = (nombre) => {
    const caja = document.getElementById('nombre1'); //Obetemos el div
    while (caja.firstChild) {
        caja.removeChild(caja.firstChild); 
    }

    const tnombre = document.createElement('p'); //Creacion de la etiqueta p
    tnombre.innerText  = nombre; //Meter la info a la p
    caja.appendChild(tnombre); //La p la metemos al div
}

const generarTipo = (tipo) => {
    const caja2 = document.getElementById('tipo1'); //Obetemos el div
    while (caja2.firstChild) {
        caja2.removeChild(caja2.firstChild); 
    }

    const tType = document.createElement('p');
    tType.innerText = tipo;
    caja2.appendChild(tType);
}

const generarStat = (stats) => {
    const caja3 = document.getElementById('stats1'); //Obetemos el div
    while (caja3.firstChild) {
        caja3.removeChild(caja3.firstChild); 
    }

    const tStats = document.createElement('p');
    tStats.innerText = stats;
    caja3.appendChild(tStats);
}

const generarMovimientos = (moves) => {
    const caja4 = document.getElementById('movimientos1'); //Obetemos el div
    while (caja4.firstChild) {
        caja4.removeChild(caja4.firstChild); 
    }
    
    const tMoves = document.createElement('p');
    tMoves.innerText = moves;
    caja4.appendChild(tMoves);
}

//pokeImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png`);