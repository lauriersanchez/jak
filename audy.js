$(document).ready(function(){
});
if (document.URL == 'http://161.35.180.62'){
    if(document.URL.indexOf('mobile/sport')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/mobile/sport');
        });
    }
    else if(document.URL.indexOf('mobile/slots')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/mobile/slots');
        });
    }
    else if(document.URL.indexOf('mobile/casino')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/mobile/casino');
        });
    }
    else if(document.URL.indexOf('mobile/register')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/mobile/register');
        });
    }
    else if(document.URL.indexOf('desktop/sport')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/sport');
        });
    }
    else if(document.URL.indexOf('desktop/slots')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/slots');
        });
    }
    else if(document.URL.indexOf('desktop/casino')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/casino');
        });
    }
    else if(document.URL.indexOf('desktop/poker')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/poker');
        });
    }
    else if(document.URL.indexOf('desktop/arcade')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/arcade');
        });
    }
    else if(document.URL.indexOf('desktop/others')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/others');
        });
    }
    else if(document.URL.indexOf('desktop/promosi')>0){
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/promosi');
        });
    }
    else {
        $(document).ready(function(){
            $("link[rel='canonical']").attr('href', 'http://161.35.180.62/desktop/home');
        });
    }
}
