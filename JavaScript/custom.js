$(document).ready(function() {
    $("#lbCloseButton").click(function(){
        $("#lbBack").fadeOut(500);
    });

    $("#toTop").click(function(){
        $('html, body').animate({
            scrollTop: $("#headerBack").offset().top
        }, 500);
    });

    $("#nessLink").click(function(){
        $('html, body').animate({
            scrollTop: $("#nessBack").offset().top
        }, 500);
    });

    $("#paulaLink").click(function(){
        $('html, body').animate({
            scrollTop: $("#paulaBack").offset().top
        }, 500);
    });

    $("#jeffLink").click(function(){
        $('html, body').animate({
            scrollTop: $("#jeffBack").offset().top
        }, 500);
    });

    $("#pooLink").click(function(){
        $('html, body').animate({
            scrollTop: $("#pooBack").offset().top
        }, 500);
    });
    
    { //animations
        setTimeout(function(){
        $("#nessHeroIcon").css("-moz-transform","scaleX(-1)");
        $("#nessHeroIcon").css("-webkit-transform","scaleX(-1)");
        $("#nessHeroIcon").css("-o-transform","scaleX(-1)");
        $("#nessHeroIcon").css("transform","scaleX(-1)");
    
    }, 4000);

    setTimeout(function(){
        $("#nessHeroIcon").css("-moz-transform","scaleX(1)");
        $("#nessHeroIcon").css("-webkit-transform","scaleX(1)");
        $("#nessHeroIcon").css("-o-transform","scaleX(1)");
        $("#nessHeroIcon").css("transform","scaleX(1)");

    }, 9000);

    setTimeout(function(){
        $("#paulaHeroIcon").css("-moz-transform","scaleX(-1)");
        $("#paulaHeroIcon").css("-webkit-transform","scaleX(-1)");
        $("#paulaHeroIcon").css("-o-transform","scaleX(-1)");
        $("#paulaHeroIcon").css("transform","scaleX(-1)");
    
    }, 5000);

    setTimeout(function(){
        $("#paulaHeroIcon").css("-moz-transform","scaleX(1)");
        $("#paulaHeroIcon").css("-webkit-transform","scaleX(1)");
        $("#paulaHeroIcon").css("-o-transform","scaleX(1)");
        $("#paulaHeroIcon").css("transform","scaleX(1)");

    }, 9000);

    setTimeout(function(){
        $("#jeffHeroIcon").css("-moz-transform","scaleX(-1)");
        $("#jeffHeroIcon").css("-webkit-transform","scaleX(-1)");
        $("#jeffHeroIcon").css("-o-transform","scaleX(-1)");
        $("#jeffHeroIcon").css("transform","scaleX(-1)");
    
    }, 6000);

    setTimeout(function(){
        $("#jeffHeroIcon").css("-moz-transform","scaleX(1)");
        $("#jeffHeroIcon").css("-webkit-transform","scaleX(1)");
        $("#jeffHeroIcon").css("-o-transform","scaleX(1)");
        $("#jeffHeroIcon").css("transform","scaleX(1)");

    }, 9000);

    setTimeout(function(){
        $("#pooHeroIcon").css("-moz-transform","scaleX(-1)");
        $("#pooHeroIcon").css("-webkit-transform","scaleX(-1)");
        $("#pooHeroIcon").css("-o-transform","scaleX(-1)");
        $("#pooHeroIcon").css("transform","scaleX(-1)");
    
    }, 7000);

    setTimeout(function(){
        $("#pooHeroIcon").css("-moz-transform","scaleX(1)");
        $("#pooHeroIcon").css("-webkit-transform","scaleX(1)");
        $("#pooHeroIcon").css("-o-transform","scaleX(1)");
        $("#pooHeroIcon").css("transform","scaleX(1)");

    }, 9000);
    }

    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 481) {
            $("#nessArch").click(function(){
                jump("ness");
                heyAnim("ness");
                $(this).css({'bottom':'0','top':'0'});
            });

            $("#paulaArch").click(function(){
                jump("paula");
                heyAnim("paula");
                $(this).css({'bottom':'0','top':'0'});
            });
            $("#jeffArch").click(function(){
                jump("jeff");
                heyAnim("jeff");
                $(this).css({'bottom':'0','top':'0'});
            });
            $("#pooArch").click(function(){
                jump("poo");
                heyAnim("poo");
                $(this).css({'bottom':'0','top':'0'});

            }); 
        }
    });

    var appended=false;

    setTimeout(function(){
        
        if (!appended)
        {
            $("#descriptionNess").append("(Click Me!)");
            $("#descriptionPaula").append("(Click Me!)");
            $("#descriptionJeff").append("(Click Me!)");
            $("#descriptionPoo").append("(Click Me!)");
            appended =true;
        }

    },3000);

    $("#descriptionNess").click(function(){
        $("#nessAbout").css({display : "flex"});
        appended =true;
    });
    $("#descriptionPaula").click(function(){
        $("#paulaAbout").css({display : "flex"});
        appended =true;
    });
    $("#descriptionJeff").click(function(){
        $("#jeffAbout").css({display : "flex"});
        appended =true;
    });
    $("#descriptionPoo").click(function(){
        $("#pooAbout").css({display : "flex"});
        appended =true;
    });



    function jump(character){
        $("#"+character+"Arch").animate({bottom: "30px"}, 350);
        $("#"+character+"Arch").animate({top: "5px"},350);
    }

    function heyAnim(character){
        $("#"+character+"HeyDiv").show();
        $("#"+character+"HeyDiv").animate({left:"15px"},250);
        $("#"+character+"HeyDiv").fadeOut(500)
    }



});