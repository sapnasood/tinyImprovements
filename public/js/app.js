$(document).ready(function(){
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
  });

const giveKudos = function(event){
  event.preventDefault;
// Get all the users from DB  
$.ajax(
{url:'/api/user',
method: 'GET'
}).then(function(response){
for(let i =0; i < response.length; i++)
{
$('#kudo-from')
.append(`<option class='from' value='${response[i].username}'>${response[i].username}</option>`)

$('#kudo-to')
.append(`<option class='to' value='${response[i].username}'>${response[i].username}</option>`)
}
})
$('#kudoModal').modal('open');
};

const sendKudos = function(event){
event.preventDefault();
// Post kudos to DB
let dataNew = {
title: $('#title').val(),
from: $('#kudo-from').val(),
to: $('#kudo-to').val(),
message: $('#message').val()
};

// Make ajax call
$.ajax(
{
 url: '/api/kudos',
 method:'POST',
 data: dataNew
}

).then(function(result){
  console.log(result);
})
};

const getKudos = function(){
// Ajax call to get all the kudos from DB
$.ajax(
{
url: '/api/kudos',
method:'GET'
}

).then(function(data){
  console.log(data);
  for(let i = 0; i < data.length; i++){
  let card = $('<div>');
  card.addClass('card');
  // card.attr('id','card')
  let cardBody = $('<div>');
  cardBody.addClass('card-body');
  // cardBody.attr('id','card-body');
  let title = $('<h5>').text(data[i].title);
  let from = $('<h4>').text(`From: ${data[i].from}`);
  let to = $('<h4>').text(`To: ${data[i].to}`);
  let message = $('<h4>').text(data[i].message);
  cardBody.append(title, from, to, message);
  card.append(cardBody);
  $('#kudo-card').append(card)
  }

});
};

getKudos();
$('#give-kudos').on('click', giveKudos)
$('#send-kudos').on('click',sendKudos)