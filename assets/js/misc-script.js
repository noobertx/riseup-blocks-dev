(function($){
    
    // jQuery(".wprig-slick").slick().css({opacity:1,    height: '250px',    overflow: hidden})
    $.each($(".wprig-trigger-modal"),function(i,el){ 

        if(el.tagName=="DIV" ){
            $el = $(el);
            classes = $el.attr("class").split(" ");
            modalSettings = {
                layout:0,
                fx: 0
            };

            for(i in classes){
                if(classes[i].includes("wprig-trigger-modal-layout")){
                    modalSettings.layout = parseInt(classes[i].split("--")[1])
                }
                if(classes[i].includes("wprig-trigger-modal-fx")){
                    modalSettings.fx = parseInt(classes[i].split("--")[1])
                }
            }

            $el.find("a").on("click",function(e){
                e.preventDefault();
            })
        };

    })

    $.getJSON('http://riseup2.local/wp-json/new/v1/item',function(results){
        $(".modal-item-sample").html(results)
        console.log(results);
    })
    

})(jQuery)