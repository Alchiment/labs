$(function(){
    
    
    function alqResize(){
        var cache_width = $(window).width();

        if( $(window).width() < 992 )
            $("#logintop").removeClass("in")
        else
            $("#logintop").addClass("in")
        
    }

    $(window).resize(function(){
        
        alqResize();

    });

    alqResize();
    
})