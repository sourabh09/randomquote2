function getData() {

          

        $.ajax({
            url: 'https://api.quotable.io/random',
            
            success: function(data) {

              console.log(data);


              $('#advice').html('"'+data.content+'"'+"<br>"+"<span>"+"- "+data.author+"</span>");

              $('#twitterlink').attr("href","https://twitter.com/share?text="+'"'+data.content+'"'+" - "+data.author);
              $('#whatsapplink').attr("href","whatsapp://send?text="+'"'+data.content+'"'+" - "+data.author);
              $('.dummy').css("display","none");
              $('.social').fadeIn();
              

              //$('#facebooklink').attr("href","https://www.facebook.com/sharer/sharer.php?u="+data.content+" - "+data.author);
            }
         
     })

    }

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  showMessage();

}

function showMessage(){

  $('#title_name').text("COPIED!!");
  $('header').css("color","#FFF");
  //$('header').css("backgroundColor","#f0002f");
  $('header').css("backgroundColor","#53a653");
  

  setTimeout(hideMessage, 1500)
}

function hideMessage(){

  $('#title_name').text("RANDOM QUOTE");
  $('header').css("color","#f0002f");
  $('header').css("backgroundColor","#F5F5F5");


}

$(function(){
   $("#switch-2").click(function () {
     
     if($('body').css( "background-color" )=="rgb(245, 245, 245)"){

      $('body').css("background-color","#1a1a1a");
      $('#advice').css("color","#F5F5F5");
      $('header').css("background-color","#1a1a1a");
     }else{
      $('body').css("background-color","#F5F5F5");
      $('#advice').css("color","#333333");
      $('header').css("background-color","#F5F5F5");
     }
   });
})



