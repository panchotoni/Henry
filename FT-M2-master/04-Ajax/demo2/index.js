btn = document.querySelector('.boton1')


 btn.addEventListener('click', () => {
    // $.get(`https://pokeapi.co/api/v2/pokemon/pikachu`, (data) => {
    //     console.log(data);
    //     var stat = data.stats[4].stat.name
    //     console.log(stat);
    // })
    
    var input = document.querySelector('.nombrePok')

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${input.value}`,
        type: `get`,
        success: (data) => {
            var datos = []
            datos.push(data.name, data.id, data.height)
            
            var contenedor = document.querySelector('.contenedor')
            var nombre = document.createElement('h2')

            nombre.innerText = data.name
            contenedor.appendChild(nombre)

            var id = document.createElement('h2')
            id.innerText = data.id
            contenedor.appendChild(id)

            var heigth = document.createElement('h2')
            heigth.innerText = data.height
            contenedor.appendChild(heigth)
        }
    })
 })