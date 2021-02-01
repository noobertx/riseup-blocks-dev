(function($){
    if($(".wprig-gallery").length){
        $(".wprig-gallery").slick()
    }

$(".components-modal__frame").on("click","#close-modal",function(e){
    e.preventDefault();
        var $el = $(this);
        var modalData = $(".wprig-dynamic-modal").data();
        
        $(".wprig-dynamic-modal").removeClass("open")                    

        setTimeout(function(){  
            $(".wprig-dynamic-modal")
            .removeClass("wprig-block-"+modalData.id)
            .removeClass(modalData.overlayEffect)
            .removeData("id")
            .removeData("overlayEffect") 
            $("body").removeClass("has-perspective")        
            
        },700)

    })

    
    // }


    $(document).ready(function() {

        $('.riseup-gallery').riseupGallery({
            modalClass: '.wprig-dynamic-modal',
            toggleClass : 'a.wprig-gallery-item'
        });


        if($(".wprig-mosaic-gallery").length){
            $(".wprig-mosaic-gallery").Mosaic();
        }


            if($(".wprig-masonry-gallery").imagesLoaded){
                $(".wprig-masonry-gallery").imagesLoaded(function() {
                    $(".wprig-masonry-gallery").masonry({
                    });
                });
            }
            
    });
})(jQuery)