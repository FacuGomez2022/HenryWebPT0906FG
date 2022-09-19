const showFriends = function () {
  let lista = $("#lista");
  lista.empty();
  $.get(`http://localhost:5000/amigos/`, (response) => {
    for (let i = 0; i < response.length; i++) {
      let cross = `<button onclick="deleteFriend(${response[i].id})">X</button>`;
      let li = `<li>${response[i].name} ${cross}</li>`;
      lista.append(li);
    }
  });
}

$('#boton').click(showFriends);

$('#search').click (()  => {
    let inputValue = $('#input').val();
    $.get(`http://localhost:5000/amigos/${inputValue}`, response => {
        $('#amigo').text(response.name);
    });
});


const deleteFriend = function (idFriend) {
    $.ajax({
        url: `http://localhost:5000/amigos/${idFriend}`,
        type: 'DELETE',
        success: () => {
            $('#success').text('El amigo fue borrado exitosamente');
        showFriends();
        }
    })
};

$('#delete').click(() => {
  let inputValue = $('#inputDelete').val();
  deleteFriend(inputValue);
});