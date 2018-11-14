$(document).ready(function(){
    $('.modal').modal();
  });

const giveKudos = function(event){
  event.preventDefault;
  $('#kudoModal').modal('open');
};

  $('#give-kudos').on('click', giveKudos)