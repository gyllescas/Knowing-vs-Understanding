function showDefault(){
	$('#success').addClass('hidden');
  $('#bartleby_waving').addClass('hidden');
  $('#bartleby_default').removeClass('hidden');
	$('#defaultView').removeClass('hidden');
  //$('#bartleby').children('img').attr('src','images/bartleby.svg');
}
function rfidSuccess(name){
  $('#bartleby_default').addClass('hidden');
  $('#bartleby_waving').removeClass('hidden');
  //$('#bartleby').children('img').attr('src','images/bartleby-waving.svg');
	$('#defaultView').addClass('hidden');
	$('#success').removeClass('hidden');
	var successName = "Hi "+name+"!";
  
	$('#message_header').text(successName);

}
//background: url(../images/button.gif) center center no-repeat;

function getContent()
{	
    $.post('../door/php/check_status.php',{dataType:'json'}).done(function(data) {
    if(data){
	var obj = jQuery.parseJSON(data);
      if(obj.success === 'true'){
        //hide the lock screen
        var name = obj.employee_name;
       	rfidSuccess(name);
        
      }

      if(obj.success === 'false'){
      	showDefault();
       

      }
    }
   getContent();
  });
    
 }

$(document).ready(function(){
  var $boopButton = $('#boop');
  var doorbellAudio = document.createElement('audio');
  doorbellAudio.setAttribute('src','http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');


  $('#boop').on('click',function(){
  $('.button').css("background","url(../images/button-pressed.gif)center center no-repeat");
  //play audio
  doorbellAudio.play();
  $('.button').css("background","url(../images/button.gif)center center no-repeat");
});

	getContent();


})
