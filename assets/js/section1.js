
$(".text-bounce").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("animate")  
  })
  
  $(".text-bounce").hover(function(){
    $(this).addClass("animate");        
  })


  $(".box-bounce").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("animate")  
  })
  
  $(".box-bounce").hover(function(){
    $(this).addClass("animate");        
  })

