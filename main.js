$(function(){
    startBackAnimation();
    setUpdateDay();
    setEvents();
    checkSize();
    

    function setUpdateDay(){    
        var modified=new Date(document.lastModified);
        var modyear = modified.getFullYear();
        var modmonth = modified.getMonth() + 1;
        var moddate = modified.getDate();
        $("#updateday").html(modyear+"/"+modmonth+"/"+moddate);
    }    

    function jump(){    
        $('html, body').animate({
            scrollTop: 0
        }, 600, 'easeInOutQuart');
    }

    function checkSize(){
        if(window.innerWidth>880){
            setIntro();
            setTopLabel();
        }else{
            setIntroSmall();
            setTopLabelSmall();
        }
    }

    function setIntroAll(){
        $("#linklogos").find(".linklogo").each(function(index){
            $(this).delay(index*100+1200).animate({
                bottom:0,
                opacity:1
            },500,"easeOutBounce");
        });
        setDetailCard();

        $("#introsentence").load("./IntroductionSentence.txt");
        $("#introsentence").delay(1500).animate({
            opacity:1
        },500);
        $("#introsentencedate").delay(1500).animate({
            opacity:1
        },500)
        
    }

    function setIntro(){
        $("#introicon").animate({
            left:0
        },2000,"easeOutCubic");
        $("#introabout").animate({
            right:0
        },2000,"easeOutCubic");
        
        setTimeout(function(){
            $(".introduction").animate({
                opacity:1
            },2000);
        },1000);
        setIntroAll();
    }

    function setIntroSmall(){
        $("#introicon").animate({
            top:0
        },2000,"easeOutCubic");
        $("#introabout").animate({
            top:0
        },2000,"easeOutCubic");

        setTimeout(function(){
            $(".introduction").animate({
                opacity:1
            },2000);
        },1000);
        setIntroAll();
    }

    function setDetailCard(){
        $("#details").find(".detail").each(function(index){
            $(this).delay(index*100+1000).animate({
                opacity:1,
                top:0
            },500,"easeOutBack");
        });
    }

    function setEvents(){
        const seltar=$("#selecttarget");
        $("#topinfoul").find(".topinfoli").each(function(index){
            $(this).mouseover(function(e) {
                var wid=$(this).outerWidth();
                var pos=$(this).offset().left+wid*0.5;
                $("#topinfoul").mouseenter(function(e){
                    seltar.offset({left:pos});

                    seltar.stop();
                    seltar.animate({
                        width:wid,
                    },250,"easeOutQuart");
                    return;
                });            
                seltar.stop();
                seltar.animate({
                    width:wid,
                    left:pos
                },250,"easeOutQuart");            
            });
        });

        $("#topinfoul").mouseleave(function(e){
            seltar.stop();
            seltar.animate({
                width:0
            },250,"easeOutQuart");
        });

        $(window).resize(function() {
            checkSize();            
        });
    }

    function setTopLabel(){
        $("#toplabel1").html("TOP");
        $("#toplabel2").html("WORKS");
        $("#toplabel3").html("LIKES");
        $("#toplabel4").html("CONTACT");
    }

    function setTopLabelSmall(){
        $("#toplabel1").html("<img src='./img/203.png' height='22px'>");
        $("#toplabel2").html("<img src='./img/3459.png' height='22px'>");
        $("#toplabel3").html("<img src='./img/646.png' height='22px'>");
        $("#toplabel4").html("<img src='./img/805.png' height='22px'>");
    }

    function startBackAnimation(){
        $("#rightplane")[0].animate({
            transform:["translateX(-100%)","translateX(0%)"],
            left:["0%","150%"],
            top:["10%","10%"]
        },{
            duration: 100000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#leftplane")[0].animate({
            transform:["translateX(0%)","translateX(-100%)"],
            left:["100%","-50%"],
            top:["15%","15%"]
        },{
            delay:50000,
            duration: 90000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#rightcar1")[0].animate({
            transform:["translateX(-100%)","translateX(0%)"],
            left:["0%","200%"],
            top:["20%","20%"]
        },{
            duration: 30000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#rightcar2")[0].animate({
            transform:["translateX(-100%)","translateX(0%)"],
            left:["0%","200%"],
            top:["80%","80%"]
        },{
            delay:8000,
            duration: 25000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#rightcar3")[0].animate({
            transform:["translateX(-100%)","translateX(0%)"],
            left:["0%","200%"],
            top:["60%","60%"]
        },{
            duration: 40000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#rightcar4")[0].animate({
            transform:["translateX(-100%)","translateX(0%)"],
            left:["0%","200%"],
            top:["40%","40%"]
        },{
            delay:18000,
            duration: 24000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#rightcar5")[0].animate({
            transform:["translateX(-100%)","translateX(0%)"],
            left:["0%","200%"],
            top:["35%","35%"]
        },{
            delay:10000,
            duration: 40000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#leftcar1")[0].animate({
            transform:["translateX(0%)","translateX(-100%)"],
            left:["100%","-100%"],
            top:["45%","45%"]
        },{
            delay:15000,
            duration: 40000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#leftcar2")[0].animate({
            transform:["translateX(0%)","translateX(-100%)"],
            left:["100%","-100%"],
            top:["30%","30%"]
        },{
            duration: 38000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#leftcar3")[0].animate({
            transform:["translateX(0%)","translateX(-100%)"],
            left:["100%","-100%"],
            top:["50%","50%"]
        },{
            delay:10000,
            duration: 40000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#leftcar4")[0].animate({
            transform:["translateX(0%)","translateX(-100%)"],
            left:["100%","-900%"],
            top:["90%","90%"]
        },{
            delay:8000,
            duration: 60000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#leftcar5")[0].animate({
            transform:["translateX(0%)","translateX(-100%)"],
            left:["100%","-100%"],
            top:["55%","55%"]
        },{
            delay:9000,
            duration: 22000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#righttrain")[0].animate({
            transform:["translateX(-100%)","translateX(0%)"],
            left:["0%","2000%"],
            top:["75%","75%"]
        },{
            delay:20000,
            duration: 65000,
            fill:"forwards",
            iterations:Infinity
        });
        $("#lefttrain")[0].animate({
            transform:["translateX(0%)","translateX(-100%)"],
            left:["100%","-1900%"],
            top:["65%","65%"]
        },{
            delay: 5000,
            duration: 70000,
            fill:"forwards",
            iterations:Infinity
        });
    }
});
