/* back to top */	
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});

/* sliding-panel-fixed */
$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});	
/* Animate a hover with jQuery   */
$(function() {
			$('ul.hover_block li').hover(function(){
				$(this).find('img').animate({left:'250px'},{queue:true,duration:300});
			}, function(){
				$(this).find('img').animate({left:'0px'},{queue:true,duration:300});
			});
		});
		
/**  Twitter  Ticker**/
    jQuery(function($){
        $("#ticker").tweet({
          username: "icanbeCreative",
          page: 1,
          avatar_size: 32,
          count: 20,
          loading_text: "loading ..."
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-4em'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 10000);
          };
          ticker();
        });
      });	
	  
	  /** tooltip ***/
	   $(document).ready(function () {
    $("[rel=tooltip]").tooltip();
  });
  
  
  
    