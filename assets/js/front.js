(function($){
    $(document).ready(function() {
        if($(".wprig-gallery").length){
            $(".wprig-gallery").slick()
        }

        if($(".wprig-product-carousel").length){
            $(".wprig-product-carousel").slick()
        }
        if($(".wprig-tm-product-carousel").length){
            $(".wprig-tm-product-carousel").slick()
        }
        if($(".wprig-sb-product-carousel").length){
            $(".wprig-sb-product-carousel").slick()
        }

        if($('.riseup-gallery').length){
            $('.riseup-gallery').riseupGallery({
                modalClass: '.wprig-dynamic-modal',
                toggleClass : 'button.wprig-gallery-item'
            });
        }

        if($(".wprig-mosaic-gallery").length){
            $(".wprig-mosaic-gallery").Mosaic();
        }

        if($(".wprig-masonry-gallery").imagesLoaded){
            $(".wprig-masonry-gallery").imagesLoaded(function() {
                $(".wprig-masonry-gallery").masonry({
                });
            });
        }


        if($(".wprig-block-accordion").length){
            $(".wprig-accordion-item").on("click",function(e){
                e.preventDefault();
                $parent = $(this).closest(".wprig-block-accordion")
                $(this).closest(".wprig-block-accordion")
                .find(".wprig-accordion-item.wprig-accordion-active")
                .removeClass("wprig-accordion-active")
                .find(".wprig-accordion-body").css({"display":"none"});
                $(this).addClass("wprig-accordion-active").find(".wprig-accordion-body").css({"display":"block"});
                
            })
        }
    });
})(jQuery)