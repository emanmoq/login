
$(function(){
    $(".shaddowdiv").hide();
    $(".startbutton").click(function(){
       $(this).hide();
         $(".shaddowdiv").show();
    });
    $(".shaddowdiv").click(function(){
        $(".startbutton").show();
        $(this).hide();
    });
    $(".submitBtn").click(function(){
        $(".shaddowdiv").hide();
    });
});
/*  using css to show and hide items */

/*
$(function(){
    $(".startbutton").click(function(){
       $(this).hide();
         $(".shaddowdiv").css("display","block");
    });
    $(".shaddowdiv").click(function(){
        $(".startbutton").show();
        $(this).css("display","none");
    });
});
*/