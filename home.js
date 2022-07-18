window.onload = function() {
    startAnimation();
}

setInterval(() => {
    startAnimation();
}, 50000);

function startAnimation(){
    Animation0();
    setTimeout(function(){Animation1();},10000);
    setTimeout(function(){Animation2();},20000);
    setTimeout(function(){Animation3();},30000);
    setTimeout(function(){Animation4();},40000);
}

function Animation0(){
    document.getElementById("rightcar1").animate({
        left:["-15%","100%"]
    },{
        duration: 20000,
        fill:"forwards"
    });
    document.getElementById("rightcar3").animate({
        left:["-15%","100%"]
    },{
        delay:2000,
        duration: 15000,
        fill:"forwards"
    });
    document.getElementById("rightplane").animate({
        transform:["translateX(-100%)","translateX(0%)"],
        left:["-10%","110%"]
    },{
        duration: 50000,
        fill:"forwards"
    });

    document.getElementById("leftcar1").animate({
        left:["100%","-30%"]
    },{
        duration: 25000,
        fill:"forwards"
    });
}

function Animation1(){
    document.getElementById("lefttrain1").animate({
        transform:["translateX(0%)","translateX(-100%)"],
        left:["100%","0%"]
    },{
        delay:5000,
        duration: 6000,
        easing:"ease-out",
        fill:"forwards"
    });
    document.getElementById("leftcar4").animate({
        left:["100%","-30%"]
    },{
        duration: 10000,
        fill:"forwards"
    });
    document.getElementById("rightcar2").animate({
        left:["-20%","100%"]
    },{
        delay:1000,
        duration: 25000,
        fill:"forwards"
    });
    document.getElementById("leftplane").animate({
        transform:["translateX(0%)","translateX(-100%)"],
        left:["110%","-10%"]
    },{
        duration: 40000,
        fill:"forwards"
    });
    document.getElementById("righttrain1").animate({
        transform:["translateX(-100%)","translateX(0%)"],
        left:["0%","100%"]
    },{
        easing:"ease-in",
        delay:5000,
        duration: 7000,
        fill:"forwards"
    });
}

function Animation2(){
    
    document.getElementById("rightcar4").animate({
        left:["-15%","100%"]
    },{
        duration: 30000,
        fill:"forwards"
    });
}

function Animation3(){
    document.getElementById("leftcar2").animate({
        left:["100%","-20%"]
    },{
        duration: 20000,
        fill:"forwards"
    });
    document.getElementById("rightcar5").animate({
        left:["-15%","100%"]
    },{
        duration: 20000,
        fill:"forwards"
    });
    
}

function Animation4(){
    document.getElementById("leftcar3").animate({
        left:["100%","-20%"]
    },{
        duration: 15000,
        fill:"forwards"
    });document.getElementById("leftcar5").animate({
        left:["100%","-20%"]
    },{
        duration: 20000,
        fill:"forwards"
    });
}