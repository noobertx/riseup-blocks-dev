(function($){
    if($(".wprig-gallery").length){
        $(".wprig-gallery").slick()
    }

    setTimeout(function(){


        
        jQuery(".wprig-mosaic-gallery").Mosaic();
        // $('.wprig-masonry-gallery').wookmark();
        
    },500)
   

    $(".wprig-custom-gallery").on("click","a.slick-slide",function(e){        
        e.preventDefault();
        var $el = $(this);
        var $gallery = $el.closest(".wprig-custom-gallery");
        var galleryData =  $gallery.data();
        var path = $el.attr("href");

        console.log(path);
        
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".wprig-dynamic-modal").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".wprig-dynamic-modal").find("#slick-img").remove()

        $(".components-modal__content").append($("<img>",{
            id:"slick-img",
            src:path
        }))

        setTimeout(function(){     
            $(".wprig-dynamic-modal").addClass("open")
        },400)
})

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

    $(".wprig-grid-gallery").on("click",".overlay,a.wprig-gallery-item",function(e){  
        e.preventDefault();
        var $el = $(this);
        var $gallery = $el.closest(".wprig-grid-gallery");
        var galleryData =  $gallery.data();
        var path = $(this).closest(".cells").find(".wprig-gallery-item").attr("href");

        if(galleryData.modal.overlayEffect=="let-me-in"){
            $("body").addClass("has-perspective")
        }
            
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".wprig-dynamic-modal").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".wprig-dynamic-modal").find("#slick-img").remove()
        $(".components-modal__content").append($("<img>",{
            id:"slick-img",
            src:path
        }))

        setTimeout(function(){
            $(".wprig-dynamic-modal").addClass("open")
        },400)
    })

    $(".wprig-mosaic-gallery").on("click","a.wprig-gallery-item",function(e){  
        e.preventDefault();
        var $el = $(this);

        var $gallery = $el.closest(".wprig-mosaic-gallery");
        var galleryData =  $gallery.data();
        var path = $(this).closest(".cells").find(".wprig-gallery-item").attr("href");

        if(galleryData.modal.overlayEffect=="let-me-in"){
            $("body").addClass("has-perspective")
        }
            
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".wprig-dynamic-modal").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".wprig-dynamic-modal").find("#slick-img").remove()
        $(".components-modal__content").append($("<img>",{
            id:"slick-img",
            src:path
        }))

        setTimeout(function(){
            $(".wprig-dynamic-modal").addClass("open")
        },400)
    })

    $(".wprig-gallery").on("click","a.wprig-gallery-item",function(e){  
        e.preventDefault();
        var $el = $(this);

        var $gallery = $el.closest(".wprig-gallery");
        var galleryData =  $gallery.data();
        var path = $(this).closest(".cells").find(".wprig-gallery-item").attr("href");


        if(galleryData.modal.overlayEffect=="let-me-in"){
            $("body").addClass("has-perspective")
        }
            
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".wprig-dynamic-modal").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".wprig-dynamic-modal").find("#slick-img").remove()
        $(".components-modal__content").append($("<img>",{
            id:"slick-img",
            src:path
        }))

        setTimeout(function(){
            $(".wprig-dynamic-modal").addClass("open")
        },400)
    })
 

    $(document).ready(function() {
            if($(".wprig-masonry-gallery").imagesLoaded){
                $(".wprig-masonry-gallery").imagesLoaded(function() {
                    $(".wprig-masonry-gallery").masonry({
                    });
                });
            }
            
    });
})(jQuery)