var totalsteps=5;
var currentstep=1;
var currentslide;

$(function(){
  $('totalsteps').html(totalsteps);
  $('.steps li, .finish, #prev, #finish').hide()
  $('p').on('mouseover', function(){
    $(this).css('color','#F5DEB3')
  });
});

$('.begin').on('click', function(){
  $('.begin').hide();
  currentstep = 1;
  currentslide=$('#step1');
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);
  $('h2').html('Step '+ currentstep);
});
$('#next').on('click', function(){
  if(currentstep != totalsteps){
  $(currentslide).hide();
  currentstep++;
  currentslide=$('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step '+ currentstep);
}
  if(currentstep == totalsteps){
  $('#next').hide();
  }
  if(currentstep != 1){
    $('#prev').show();
  }
});
$('#prev').on('click', function(){

  $(currentslide).hide();
  currentstep--;
  currentslide=$('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step '+ currentstep);
  if(currentstep != totalsteps){
  $('#next').show();
  }
  if(currentstep == 1){
    $('#prev').hide();
  }
});
$('#end').on('click', function (){
  $(currentslide).hide();
  currentstep=0;
  currentslide=$('.finish, #finish');
  $(currentslide).fadeIn(1000);
});
