$(document).ready(init);

let dogs = [];

function init() {
  console.log('Scott!');

  $.ajax({
    type: 'GET',
    url: '/dog',
  })
    .then((dataFromServer) => {
      dogs = dataFromServer;
      console.log('Rachael!');
      render();
    })
    .catch((err) => {
      console.log(err);
    });

  console.log('Myron!');
}

function render() {
  $('.js-container').empty();
  for (let dog of dogs) {
    $('.js-container').append(`<p>${dog}</p>`);
  }
}
