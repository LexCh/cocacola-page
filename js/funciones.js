//jQuery(document)
$(document).ready(listo);//web lista

function listo(){
    jQuery(".hamb").click(function(a){
        a.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("far fa-times-circle");
    });


    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open");

        jQuery(".hamb i").removeClass("far fa-times-circle");
        var dev = jQuery(this).attr("href");
        //alert(dev);
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top -76
        })
    })
}
