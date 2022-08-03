$(function(){
    const about=$("#about");
    var showing=false;
    const timeLabel=$("#timeLabel");
    var date;
    const showAboutButton=$("#showAboutButton");
    const swStartButton=$("#swStartButton");
    const swStopButton=$("#swStopButton");
    const swResetButton=$("#swResetButton");
    const swLabel=$("#swLabel");
    var swStartTime=0;
    var swTime=0;
    var swActive=false;

    about.css("display","none");
    swStopButton.prop("disabled",true);
    var gotCookies=document.cookie;
    var CookieArray=gotCookies.split(';');
    for(var c of CookieArray){
        var cArray=c.split('=');
        var ArrayTitle=cArray[0].trim();
        var value=cArray[1];

        if(ArrayTitle=="swTime"){
            swTime=Number(value);
        }else if(ArrayTitle=="swActive"){
            swActive=JSON.parse(value);
        }else if(ArrayTitle=="swStartTime"){
            swStartTime=Number(value);
        }
    }

    if(swActive){
        swStartButton.prop("disabled",true);
        swStopButton.prop("disabled",false);
    }

    setDateTime();
    showSWTime();

    showAboutButton.click(function(){
        if(showing){
            about.css("display","none");
            showing=false;
        }else{
            about.css("display","block");
            showing=true;
        }
    });

    swStartButton.click(function(){
        swActive=true;
        document.cookie="swActive="+swActive;
        swStartTime=Math.floor(date.getTime()/1000)-swTime;
        document.cookie="swStartTime="+swStartTime;
        swStartButton.prop("disabled",true);
        swStopButton.prop("disabled",false);
    });

    swStopButton.click(function(){
        swActive=false;
        document.cookie="swActive="+swActive;
        swStartButton.prop("disabled",false);
        swStopButton.prop("disabled",true);
    });

    swResetButton.click(function(){
        swActive=false;
        document.cookie="swActive="+swActive;
        swStartButton.prop("disabled",false);
        swStopButton.prop("disabled",true);
        swTime=0;
        showSWTime();
    });

    setInterval(() => {
        setDateTime();

        if(swActive){
            swTime=Math.floor(date.getTime()/1000)-swStartTime;
            showSWTime();
        }
    }, 1000);

    function setDateTime(){
        date=new Date();
        var hour=("00"+date.getHours()).slice(-2);
        var minute=("00"+date.getMinutes()).slice(-2);
        var sec=("00"+date.getSeconds()).slice(-2);
        timeLabel.html(hour+":"+minute+":"+sec);
    }

    function showSWTime(){
        var swsec=("00"+swTime%60).slice(-2);
        var swmin=("00"+Math.floor(swTime/60)%60).slice(-2);
        var swhour=("00"+Math.floor(swTime/3600)%24).slice(-2);
        swLabel.html(swhour+":"+swmin+":"+swsec);
        document.cookie="swTime="+swTime;
    }
})