(function($){
    $(".wprig-gallery").slick()
    console.log("This script")
    $(".wprig-gallery").on("click","a.slick-slide",function(e){        
        e.preventDefault();
        var $el = $(this);
        var $gallery = $el.closest(".wprig-gallery");
        var galleryData =  $gallery.data();
        var path = $el.attr("href");
        
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".wprig-dynamic-modal").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".wprig-dynamic-modal").find("#slick-img").remove()

        // $(".components-modal__content").append($("<img>",{
        //     id:"slick-img",
        //     src:path
        // }))

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

    // $(".wprig-grid-gallery").on("click","a.wprig-gallery-item",function(e){  
    //     e.preventDefault();
    //     var $el = $(this);
    //     var $gallery = $el.closest(".wprig-grid-gallery");
    //     var galleryData =  $gallery.data();
    //     var path = $el.attr("href");

        
        
    //     $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
    //     $(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
    //     $(".components-modal__screen-overlay").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
    //     $(".wprig-dynamic-modal").find("#slick-img").remove()

      

    //     setTimeout(function(){     
    //         $(".wprig-dynamic-modal").addClass("open")
    //         $(".components-modal__content").append($("<img>",{
    //             id:"slick-img",
    //             src:path
    //         }))
    //     },200)
    // })

    $(".wprig-mosaic-gallery").on("click","a.wprig-gallery-item",function(e){  
        e.preventDefault();
        var $el = $(this);
        var $gallery = $el.closest(".wprig-mosaic-gallery");
        var galleryData =  $gallery.data();
        var path = $el.attr("href");

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

    setTimeout(function(){

        jQuery(".wprig-mosaic-gallery").Mosaic({maxRowHeight:400});
    },500)
})(jQuery)