(function($){
    $(".wprig-gallery").slick()
    console.log("This script")
    $(".wprig-gallery").on("click","a.slick-slide",function(e){        
        e.preventDefault();
        var $el = $(this);
        var $gallery = $el.closest(".wprig-gallery");
        var galleryData =  $gallery.data();
        var path = $el.attr("href");
        
        $(".components-modal__screen-overlay").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".components-modal__screen-overlay").find(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".components-modal__screen-overlay").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".components-modal__screen-overlay").find("#slick-img").remove()

        $(".components-modal__content").append($("<img>",{
            id:"slick-img",
            src:path
        }))

        setTimeout(function(){     
            $(".components-modal__screen-overlay").addClass("open")
        },200)
})

$(".components-modal__screen-overlay").on("click","#close-modal",function(e){
    e.preventDefault();
        var $el = $(this);
        var modalData = $el.closest(".components-modal__screen-overlay").data();
        $el.closest(".components-modal__screen-overlay").removeClass("open")
            
        setTimeout(function(){        
            $el.closest(".components-modal__screen-overlay")
            .removeClass("wprig-block-"+modalData.id)
            .removeClass(modalData.overlayEffect)
            .removeData("id")
            .removeData("overlayEffect")
        },200)
    })

    $(".wprig-grid-gallery").on("click","a.wprig-gallery-item",function(e){  
        e.preventDefault();
        var $el = $(this);
        var $gallery = $el.closest(".wprig-grid-gallery");
        var galleryData =  $gallery.data();
        var path = $el.attr("href");

        
        
        $(".components-modal__screen-overlay").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".components-modal__screen-overlay").find(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".components-modal__screen-overlay").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".components-modal__screen-overlay").find("#slick-img").remove()

        $(".components-modal__content").append($("<img>",{
            id:"slick-img",
            src:path
        }))

        setTimeout(function(){     
            $(".components-modal__screen-overlay").addClass("open")
        },200)
    })

    $(".wprig-mosaic-gallery").on("click","a.wprig-gallery-item",function(e){  
        e.preventDefault();
        var $el = $(this);
        var $gallery = $el.closest(".wprig-mosaic-gallery");
        var galleryData =  $gallery.data();
        var path = $el.attr("href");

        
        
        $(".components-modal__screen-overlay").addClass("wprig-block-"+galleryData.modal.id+" "+galleryData.modal.overlayEffect);
        $(".components-modal__screen-overlay").find(".wprig-dynamic-modal").addClass("wprig-block-"+galleryData.modal.id)
        $(".components-modal__screen-overlay").data({ "id": galleryData.modal.id ,"overlayEffect": galleryData.modal.overlayEffect});
        
        $(".components-modal__screen-overlay").find("#slick-img").remove()

        $(".components-modal__content").append($("<img>",{
            id:"slick-img",
            src:path
        }))

        setTimeout(function(){     
            $(".components-modal__screen-overlay").addClass("open")
        },200)
    })

    setTimeout(function(){

        jQuery(".wprig-mosaic-gallery").Mosaic({maxRowHeight:400});
    },500)
})(jQuery)