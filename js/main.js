$(function(){
$.extend({
    'goAnchor':function(to, time){
        $obj = (window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body');
        $($obj).animate({scrollTop:to}, time);
    }
});
//
$('#next1').click(function(){
    $.goAnchor($('#one').offset().top, 1000);
    $("#one .box").animate({
        left:0
    },1000);
    $("#one .lineF").animate({
        left:0
    },1000);
    $("#one .bannerWord").fadeIn();
});
$('#next2').click(function(){
    $.goAnchor($('#three').offset().top, 1000);
});
$('#next3').click(function(){
    $.goAnchor($('#three').offset().top, 1000);
});
$('#next4').click(function(){
    $.goAnchor($('#four').offset().top, 1000);
});
setInterval('play()',100);
high();
$(".slideBto").click(function(){
    $(".slideBto").hide();
    $(".show img").animate({
        right:25+'em'
    },1000);
    $(".slideRight").animate({
        right:0
    },1000);
});
});
$(".back").click(function(){
    $(".slideRight").animate({
        right:-115+'vw'
    },1000);
    $(".show img").animate({
        right:0
    },1000);
    $(".slideBto").show();
});
function play(){
    var mTop = $('#one').offset().top;
    var sTop = $(window).scrollTop();
    var result = mTop - sTop;
    if(result<998){
       $("#one .box").animate({
           left:0
       },1000);
       $("#one .lineF").animate({
           left:0
       },1000); 
   }
    };
function high(){
    var box=$(".boxT");
    var about=$("#about .aboutWord");
    $(box[0]).mouseover(function(){
        $("#about1").addClass("highlight");
        $(this).css({
            "background-image":"url(images/pic15.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $("#about1").removeClass("highlight");
        $(this).css("background-image","url(images/pic10.png)");
    });
    $(box[1]).mouseover(function(){
        $("#about2").addClass("highlight");
        $(this).css({
            "background-image":"url(images/pic16.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $("#about2").removeClass("highlight");
        $(this).css("background-image","url(images/pic11.png)");
    });
    $(box[2]).mouseover(function(){
        $("#about3").addClass("highlight");
        $(this).css({
            "background-image":"url(images/pic17.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $("#about3").removeClass("highlight");
        $(this).css("background-image","url(images/pic12.png)");
    });
    $(box[3]).mouseover(function(){
        $("#about4").addClass("highlight");
        $(this).css({
            "background-image":"url(images/pic18.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $("#about4").removeClass("highlight");
        $(this).css("background-image","url(images/pic13.png)");
    }); 
    $(box[4]).mouseover(function(){
        $(".aboutWord").hide();
        $("#about5").show();
        $("#about5").addClass("highlight");
        $(this).css({
            "background-image":"url(images/pic19.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $(".aboutWord").show();
        $("#about5").hide();   
        $(this).css("background-image","url(images/pic14.png)");                  
    });





    $("#about1").mouseover(function(){
        $(this).addClass("highlight");
        $(box[0]).css({
            "background-image":"url(images/pic15.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $(this).removeClass("highlight");
        $(box[0]).css("background-image","url(images/pic10.png)");
    });

    $("#about2").mouseover(function(){
        $(this).addClass("highlight");
        $(box[1]).show().css({
            "background-image":"url(images/pic16.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $(this).removeClass("highlight");
        $(box[1]).css("background-image","url(images/pic11.png)");
    });
    $("#about3").mouseover(function(){
        $(this).addClass("highlight");
        $(box[2]).show().css({
            "background-image":"url(images/pic17.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $(this).removeClass("highlight");
        $(box[2]).css("background-image","url(images/pic12.png)");
    });
    $("#about4").mouseover(function(){
        $(this).addClass("highlight");
        $(box[3]).show().css({
            "background-image":"url(images/pic18.png)",
            "background-size":"cover"
        });
    }).mouseout(function(){
        $(this).removeClass("highlight");
        $(box[3]).css("background-image","url(images/pic13.png)");
    });
}