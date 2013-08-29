$(document).ready(function() {  
   
    $('a[name=lightbox]').click(function(event) {
        event.preventDefault();

        // var id = $(this).attr('href');
        var id = $(this).attr('data-id');
        var lightboxHeight = $(document).height();
        var lightboxWidth = $(window).width();
        
        $('#lightbox').css({
            'width':lightboxWidth,
            'height':lightboxHeight
        });

        $('#lightbox').fadeIn(500);    
        $('#lightbox').fadeTo("slow",0.8);  
        
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        
        $(id).css('top',  winHeight/2-$(id).height()/2);
        $(id).css('left', winWidth/2-$(id).width()/2);
        
        $(id).fadeIn(500); 
    });
    
    $('.window .close').click(function(event) {
        event.preventDefault();
        $('#lightbox, .window').hide();
    });     
    
    $('#lightbox').click(function () {
        $(this).hide();
        $('.window').hide();
    });
});