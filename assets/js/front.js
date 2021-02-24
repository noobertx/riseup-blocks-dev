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

        
        $('.riseup-gallery').riseupGallery({
            modalClass: '.wprig-dynamic-modal',
            toggleClass : 'button.wprig-gallery-item'
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