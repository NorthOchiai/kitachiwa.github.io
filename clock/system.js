$(function(){
    const about=$("#about");
    let showing=false;
    const timeLabel=$("#timeLabel");
    let date;
    const showAboutButton=$("#showAboutButton");
    const swStartButton=$("#swStartButton");
    const swStopButton=$("#swStopButton");
    const swResetButton=$("#swResetButton");
    const swLabel=$("#swLabel");
    let swStartTime=0;
    let swTime=0;
    let swActive=false;
    let hour;
    let minute;
    let second;
    const chimeRadioButton=$(".chime");
    let chimetype="0";
    const biginChime=new Audio('./AirportSE.wav');
    const restChime=new Audio('./AirPlaneSE.wav');

    about.css("display","none");
    swStopButton.prop("disabled",true);
    let gotCookies=document.cookie;
    let CookieArray=gotCookies.split(';');
    for(let c of CookieArray){
        let cArray=c.split('=');
        let ArrayTitle=cArray[0].trim();
        let value=cArray[1];

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

    chimeRadioButton.click(function(){
        for(let i=0;i<chimeRadioButton.length;i++){
            if(chimeRadioButton[i].checked){
                chimetype=chimeRadioButton[i].value;
            }
        }
    })

    setInterval(() => {
        setDateTime();
        checkChime();        

        if(swActive){
            swTime=Math.floor(date.getTime()/1000)-swStartTime;
            showSWTime();
        }
    }, 1000);

    function setDateTime(){
        date=new Date();
        hour=("00"+date.getHours()).slice(-2);
        minute=("00"+date.getMinutes()).slice(-2);
        second=("00"+date.getSeconds()).slice(-2);
        timeLabel.html(hour+":"+minute+":"+second);
    }

    function showSWTime(){
        let swsec=("00"+swTime%60).slice(-2);
        let swmin=("00"+Math.floor(swTime/60)%60).slice(-2);
        let swhour=("00"+Math.floor(swTime/3600)%24).slice(-2);
        swLabel.html(swhour+":"+swmin+":"+swsec);
        document.cookie="swTime="+swTime;
    }

    function checkChime(){
        let isBigin;
        let isRest;
        let min=Number(minute);        
        switch(chimetype){
            case "4":
                isBigin=Number.isInteger(min/5);
                isRest=Number.isInteger((min+2)/5);
            break;
            case "8":
                isBigin=Number.isInteger(min/10);
                isRest=Number.isInteger((min+2)/10);
            break;
            case "13":
                isBigin=Number.isInteger(min/15);
                isRest=Number.isInteger((min+2)/15);
            break;
            case "15":
                isBigin=Number.isInteger(min/20);
                isRest=Number.isInteger((min+5)/20);
            break;
            case "16":
                isBigin=Number.isInteger(min/20);
                isRest=Number.isInteger((min+4)/20);
            break;
            case "17":
                isBigin=Number.isInteger(min/20);
                isRest=Number.isInteger((min+3)/20);
            break;
            case "25":
                isBigin=Number.isInteger(min/30);
                isRest=Number.isInteger((min+5)/30);
            break;
            case "26":
                isBigin=Number.isInteger(min/30);
                isRest=Number.isInteger((min+4)/30);
            break;
            case "27":
                isBigin=Number.isInteger(min/30);
                isRest=Number.isInteger((min+3)/30);
            break;
            case "45":
                isBigin=Number.isInteger(min/60);
                isRest=Number.isInteger((min+15)/60);
            break;
            case "50":
                isBigin=Number.isInteger(min/60);
                isRest=Number.isInteger((min+10)/60);
            break;
            default:
                isBigin=false;
                isRest=false;
        }

        if(second=="00"){
            if(isBigin){
                biginChime.play();
            }
            if(isRest){
                restChime.play();
            }
        }
    }
})
