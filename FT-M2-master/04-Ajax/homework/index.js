$('#boton').click(() => {
    $('#lista').empty()
    $.get(`http://localhost:5000/amigos/`, (info) => {
        info.forEach((object, index) => {
            console.log(object);
            $('#lista').append(`<li>  ${object.name}  </li>`)
        });
    })
})

$('#search').click(() => {
    $('#amigo').empty()
    const valueInput = $('#input').val()
    if(!valueInput || typeof Number(valueInput) != "number") return alert("Digite un numero")
    $.ajax({
        url: `http://localhost:5000/amigos/${valueInput}`,
        type: `get`,
        success: (data) => {
            $('#amigo').append(`<span> ${data.name} </span>`)
        }
    })
})

$('#delete').click(() =>{
    const valueInput = $('#inputDelete').val()
    if(!valueInput) return alert("Digite un numero para poder eliminar")
    $.ajax({
        url: `http://localhost:5000/amigos/${valueInput}`,
        type: `delete`,
        success: (data) => {
            let elementoborrado = $('#inputDelete').val()
            console.log(elementoborrado);
            $('#success').append(`<span> ${data[valueInput].name} </span>`)
        }
    })
})