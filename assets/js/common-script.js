jQuery(document).ready(function ($) {
    'use strict';
    // Magnific Popup
    if (typeof $(document).magnificPopup !== 'undefined') {
        $('.wprig-video-popup').magnificPopup({
            type: 'iframe',
            rtl: true,
            mainClass: 'mfp-fade',
            removalDelay: 300,
            preloader: false,
            fixedContentPos: false
        });
    }


    //Table of Contents
    if (document.getElementsByClassName("wprig-table-of-contents").length > 0) {

        let tocOffsetTop = $('.wprig-table-of-contents').data('scroll-offset');
        tocOffsetTop = typeof tocOffsetTop !== "undefined" && tocOffsetTop ? parseInt(tocOffsetTop) : 0

        $('.wprig-table-of-contents-body a').on('click', function () {
            let currentAnchor = $(this).attr('href');
            currentAnchor = $(`${currentAnchor}`)[0].offsetTop
            $("html, body").animate({
                scrollTop: currentAnchor > tocOffsetTop ? currentAnchor + tocOffsetTop : currentAnchor
            }, 400);

        })


        $('.wprig-table-of-contents-toggle a').on('click', function () {
            const parentElem = $(this).parent('.wprig-table-of-contents-toggle');
            parentElem.toggleClass('wprig-toc-collapsed');

            parentElem.closest('.wprig-table-of-contents').find('.wprig-table-of-contents-body').slideToggle(300)

        });

        if (!$('.block-editor-block-list__layout').length) {

            const backToTop = $('.wprig-back-to-top-button');
            $('.wprig-back-to-top-button').on("click", function (e) {
                e.preventDefault();
                $("html, body").animate({
                    scrollTop: 0
                }, 800);
            });

            window.onscroll = () => {
                if ($(window).scrollTop() > 300) {
                    backToTop[0].classList.add("wprig-show-scroll")
                } else {
                    backToTop[0].classList.remove("wprig-show-scroll")
                }
            }
        }

    }
    //ACCORDION BLOCK
    $('.wprig-block-accordion:not(.wprig-accordion-ready)').each(function () {
        const $accordion = $(this);
        const itemToggle = $accordion.attr('data-item-toggle');
        $accordion.addClass('wprig-accordion-ready');
        $accordion.on('click', '.wprig-accordion-item .wprig-accordion-panel', function (e) {
            e.preventDefault();

            const $selectedItem = $(this).parent('.wprig-accordion-item');
            const $selectedItemContent = $selectedItem.find('.wprig-accordion-body');
            const isActive = $selectedItem.hasClass('wprig-accordion-active');

            if (isActive) {
                $selectedItemContent.css('display', 'block').slideUp(150);
                $selectedItem.removeClass('wprig-accordion-active');
            } else {
                $selectedItemContent.css('display', 'none').slideDown(150);
                $selectedItem.addClass('wprig-accordion-active');
            }

            if (itemToggle == 'true') {
                const $collapseItems = $accordion.find('.wprig-accordion-active').not($selectedItem);
                if ($collapseItems.length) {
                    $collapseItems.find('.wprig-accordion-body').css('display', 'block').slideUp(150);
                    $collapseItems.removeClass('wprig-accordion-active');
                }
            }
        });
    });


    //ANIMATED HEADLINE BLOCK
    $('.wprig-block-animated-heading .animated-heading-text').each(function () {
        let animatedHeadline = $(this)
        if (window.animatedHeading) {
            new window.animatedHeading({ heading: $(animatedHeadline) })
        }

    });

    //TAB BLOCK
    $('.wprig-tab-title').on('click', function (event) {
        var $wprigTab = $(this).parent();
        var wprigIndex = $wprigTab.index();
        if ($wprigTab.hasClass('wprig-active')) {
            return;
        }
        $wprigTab.closest('.wprig-tab-nav').find('.wprig-active').removeClass('wprig-active');
        $wprigTab.addClass('wprig-active');
        $wprigTab.closest('.wprig-block-tab').find('.wprig-tab-content.wprig-active').removeClass('wprig-active');
        $wprigTab.closest('.wprig-block-tab').find('.wprig-tab-content').eq(wprigIndex).addClass('wprig-active')
    });

    //TAB BLOCK
    $('.wprig-vertical-tab-item-button').on('click', function (event) {
        var $that = $(this);
        var $currentNav = $that.parent();
        if ($currentNav.hasClass('wprig-vertical-active')) {
            return;
        };

        var $parentTab = $that.closest('.wprig-block-vertical-tab');
        var $currentNavIndex = $currentNav.index();

        // nav
        $parentTab.find('.wprig-vertical-tab-item').removeClass('wprig-vertical-active');
        $currentNav.addClass('wprig-vertical-active');

        // nav content
        $parentTab.find('.wprig-vertical-tab-nav-text').slideUp(300);
        $that.find('.wprig-vertical-tab-nav-text').slideDown(300);

        // body
        var $currentTabBody = $currentNav.closest('.wprig-vertical-tab-nav').next();
        var $currentVerticalContent = $currentTabBody.find('.wprig-tab-content').eq($currentNavIndex);

        $parentTab.find('.wprig-tab-content').removeClass('wprig-vertical-active').fadeOut(0);
        $currentVerticalContent.addClass('wprig-vertical-active').fadeIn();

    });

    //Carousel BLOCK
    $('.wprig-carousel-title').on('click', function (event) {
        var $wprigCarousel = $(this).parent();
        var wprigCarouselIndex = $wprigCarousel.index();

        if ($wprigCarousel.hasClass('wprig-active')) {
            return;
        }
        $wprigCarousel.closest('.wprig-carousel-nav-wraper').find('.wprig-active').removeClass('wprig-active');
        $wprigCarousel.addClass('wprig-active');
        $wprigCarousel.closest('.wprig-block-carousel').find('.wprig-carousel-item.wprig-active').hide().removeClass('wprig-active');
        $wprigCarousel.closest('.wprig-block-carousel').find('.wprig-carousel-item').eq(wprigCarouselIndex).fadeIn(400, function () {
            $(this).addClass('wprig-active');
        });

    });
    $('.wprig-carousel-nav').on('click', function (event) {
        let $wprigCarouselBody = $(this).parent()
        let $wprigCarouselBlock = $wprigCarouselBody.closest('.wprig-block-carousel')
        let $nav = $(this);
        let direction = $nav.attr('data-direction');
        let items = $nav.attr('data-items');

        let activeItemlIndex = $('.wprig-carousel-item-indicator.wprig-active').index('.wprig-carousel-item-indicator')
        let nextActiveItem = direction === 'next' ? activeItemlIndex < items - 1 ? activeItemlIndex + 1 : 0 : activeItemlIndex > 0 ? activeItemlIndex - 1 : items - 1

        $wprigCarouselBlock.find('.wprig-carousel-item.wprig-active').hide().removeClass('wprig-active');
        $wprigCarouselBlock.find('.wprig-carousel-item-indicator.wprig-active').removeClass('wprig-active');
        $wprigCarouselBlock.find('.wprig-carousel-item').eq(nextActiveItem).fadeIn(400, function () {
            $(this).addClass('wprig-active');
        });
        $wprigCarouselBlock.find('.wprig-carousel-item-indicator').eq(nextActiveItem).addClass('wprig-active');
    });

});



(function ($) {

    var inviewObjects = {}, viewportSize, viewportOffset,
        d = document, w = window, documentElement = d.documentElement, expando = $.expando, timer;

    $.event.special.inview = {
        add: function (data) {
            inviewObjects[data.guid + "-" + this[expando]] = { data: data, $element: $(this) };
            if (!timer && !$.isEmptyObject(inviewObjects)) {
                timer = setInterval(checkInView, 250);
            }
        },

        remove: function (data) {
            try { delete inviewObjects[data.guid + "-" + this[expando]]; } catch (e) { }
            if ($.isEmptyObject(inviewObjects)) {
                clearInterval(timer);
                timer = null;
            }
        }
    };

    function getViewportSize() {
        var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };
        if (!size.height) {
            mode = d.compatMode;
            if (mode || !$.support.boxModel) { // IE, Gecko
                domObject = mode === 'CSS1Compat' ?
                    documentElement : // Standards
                    d.body; // Quirks
                size = {
                    height: domObject.clientHeight,
                    width: domObject.clientWidth
                };
            }
        }

        return size;
    }

    function getViewportOffset() {
        return {
            top: w.pageYOffset || documentElement.scrollTop || d.body.scrollTop,
            left: w.pageXOffset || documentElement.scrollLeft || d.body.scrollLeft
        };
    }

    function checkInView() {
        var $elements = $(), elementsLength, i = 0;

        $.each(inviewObjects, function (i, inviewObject) {
            var selector = inviewObject.data.selector,
                $element = inviewObject.$element;
            $elements = $elements.add(selector ? $element.find(selector) : $element);
        });

        elementsLength = $elements.length;
        if (elementsLength) {
            viewportSize = viewportSize || getViewportSize();
            viewportOffset = viewportOffset || getViewportOffset();

            for (; i < elementsLength; i++) {
                if (!$.contains(documentElement, $elements[i])) {
                    continue;
                }

                var $element = $($elements[i]),
                    elementSize = { height: $element.height(), width: $element.width() },
                    elementOffset = $element.offset(),
                    inView = $element.data('inview'),
                    visiblePartX,
                    visiblePartY,
                    visiblePartsMerged;

                if (!viewportOffset || !viewportSize) {
                    return;
                }

                if (elementOffset.top + elementSize.height > viewportOffset.top &&
                    elementOffset.top < viewportOffset.top + viewportSize.height &&
                    elementOffset.left + elementSize.width > viewportOffset.left &&
                    elementOffset.left < viewportOffset.left + viewportSize.width) {
                    visiblePartX = (viewportOffset.left > elementOffset.left ?
                        'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
                            'left' : 'both');
                    visiblePartY = (viewportOffset.top > elementOffset.top ?
                        'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
                            'top' : 'both');
                    visiblePartsMerged = visiblePartX + "-" + visiblePartY;
                    if (!inView || inView !== visiblePartsMerged) {
                        $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
                    }
                } else if (inView) {
                    $element.data('inview', false).trigger('inview', [false]);
                }
            }
        }
    }

    $(w).bind("scroll resize scrollstop", function () {
        viewportSize = viewportOffset = null;
    });

    if (!documentElement.addEventListener && documentElement.attachEvent) {
        documentElement.attachEvent("onfocusin", function () {
            viewportOffset = null;
        });
    }


    $(document).on('inview', '[data-wpriganimation]', function (event, visible, visiblePartX, visiblePartY) {
        var $this = $(this);
        if (visible) {
            let animation = $this.data('wpriganimation');
            if (animation && typeof animation.name != 'undefined' && animation.openAnimation != 0) {
                setTimeout(() => {
                    $this.css({ opacity: 1 })
                }, parseInt(animation.delay) + 100)
                $this.css({
                    'animation-name': animation.name,
                    'animation-timing-function': animation.curve,
                    'animation-duration': animation.duration + 'ms',
                    'animation-delay': animation.delay + 'ms',
                    'animation-iteration-count': animation.repeat === 'once' ? 1 : 'infinite'
                })
            }
        }
        $this.unbind('inview');
    });


    // Parallax
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function () { windowHeight = $window.height(); });
    $.fn.parallax = function (xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        $this.each(function () { firstTop = $this.offset().top; });
        if (outerHeight) {
            getHeight = function (jqo) { return jqo.outerHeight(true); };
        } else {
            getHeight = function (jqo) { return jqo.height(); };
        }
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;
        function update() {
            var pos = $window.scrollTop();
            $this.each(function () {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }
        $window.bind('scroll', update).resize(update);
        update();
    };
    if (typeof jQuery.fn.parallax !== 'undefined') {
        $(document).ready(function () {
            $('.wprig-row-parallax').each(function () {
                $(this).parallax("center", 0.4)
            })
        })
    }



    // check if element in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    $(document).on('ready', function () {

        //Countdown Block
        $('.wprig-block-pie-progress').each(function () {
            var $that = $(this);
            var circle = $that.find('circle:last-child');
            var pieOffset = circle.data('dashoffset');
            var transition = circle.data('transition');
            var duration = circle.data('transition-duration');
            var progressCount = $that.find('.wprig-pie-counter');
            var number = parseInt(circle.data('percent'));

            if (parseInt(duration) > 0) {
                progressCount.html(0);
            }

            var pieEvent = function () {
                if (isElementInViewport($that.find('svg')[0])) {
                    circle.css('transition', transition)
                    circle.attr('stroke-dashoffset', pieOffset);
                    if (parseInt(duration) > 0) {
                        progressCounter();
                    }
                    window.removeEventListener('scroll', pieEvent, true)
                }
            }

            var progressCounter = function () {
                var current = 0;
                var time = parseInt(duration);
                var interval = Math.ceil(time / number);

                var timer = function () {
                    if (current >= number) {
                        intvlId && clearInterval(intvlId)
                    }
                    progressCount.html(current)
                    current++;
                }
                var intvlId = setInterval(timer, interval)
            }

            window.addEventListener('scroll', pieEvent, true);
            pieEvent()
        });

        //Counter Block
        $('.wprig-block-counter-number').each(function () {
            const currentElement = $(this)[0];
            let start = parseInt(currentElement.dataset.start),
                limit = parseInt(currentElement.dataset.limit),
                counterDuration = parseInt(currentElement.dataset.counterduration),
                increment = Math.ceil((limit / counterDuration) * 10);

            const invokeCounter = () => {
                if (isElementInViewport(currentElement)) {
                    if (start < limit) {
                        let intervalId = setInterval(function () {
                            let difference = limit - start;
                            difference >= increment ? start += increment : difference >= 50 ? start += 50 : start++;
                            currentElement.innerText = start;
                            if (start >= limit) {
                                clearInterval(intervalId);
                            }
                        }, 10);
                    }
                    window.removeEventListener('scroll', invokeCounter, true);
                }
            }
            invokeCounter();
            window.addEventListener('scroll', invokeCounter, true);
        });
    });

    /**
     * Settings tab
     */

    var wprigSettingsTabContent = $('#wprig-settings-tabs-content');
    var wprigSettingTabs = $('#wprig-settings-tabs a');

    wprigSettingTabs.on('click', function (e) {
        e.preventDefault();
        history.pushState({}, '', this.href);
        var anchor = $(this).attr('href');
        wprigSettingsTabContent.find('.wprig-settings-inner').hide();
        wprigSettingsTabContent.find(anchor).show();

        wprigSettingTabs.removeClass('nav-tab-active');
        $(this).addClass('nav-tab-active');
    });

    if(wprigSettingsTabContent.length){
        if(window.location.hash){
            wprigSettingTabs.removeClass('nav-tab-active');
            $('#wprig-settings-tabs a[href=' + window.location.hash + ']').addClass('nav-tab-active');
            wprigSettingsTabContent.find('.wprig-settings-inner').hide();
            wprigSettingsTabContent.find(window.location.hash).show();
        }else {
            wprigSettingTabs.removeClass('nav-tab-active');
            wprigSettingTabs.first().addClass('nav-tab-active');
            wprigSettingsTabContent.find('.wprig-settings-inner').hide();
            wprigSettingsTabContent.find('.wprig-settings-inner').first().show();
        }
    }
    // postgrid-pro loadmore

    /*$('.wprig-postgrid-loadmore').on('click', function () {
        var self = $(this);
        var page = parseInt(self.data('page'));
        var maxPage = parseInt(self.data('max-page'));
        $.ajax({
            url: wprig_urls.ajax,
            data: {
                action: 'post_grid_loadmore',
                page: page
            }
        }).success(function (response) {
            /!*$('.wprig-postgrid-wrapper').html(response);
            self.data('page', page + 1);
            if(page === maxPage) {
                self.remove();
            }*!/
            console.log(response);
        })
    });*/

    var wprigGsPostWrap = $('.wprig-gs-card-blog-posts');
    if(wprigGsPostWrap.length) {

        function generatePostMarkup(post) {
            var div = document.createElement('div');
            div.classList.add('wprig-gs-post-card');

            var anchor1 = document.createElement('a');
            anchor1.setAttribute('href', post.link);

            var img = document.createElement('img');
            if(
              post.wprig_featured_image_url &&
              post.wprig_featured_image_url.medium_large
            ) {
                img.setAttribute('src', post.wprig_featured_image_url.medium_large[0])
            }

            anchor1.appendChild(img);

            var span = document.createElement('span');
            var date = new Date(post.date);
            span.innerText = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}` ;


            var anchor2 = document.createElement('a');
            anchor2.setAttribute('href', post.link);

            $(anchor2).html(post.title.rendered);

            div.appendChild(anchor1);
            div.appendChild(span);
            div.appendChild(anchor2);
            return div;
        }

        function printPostMarkup(posts) {
            $('.wprig-gs-post-items-wrap').empty();
            posts.forEach(post => {
                $('.wprig-gs-post-items-wrap').append(generatePostMarkup(post));
            })
        }

        function fetchPost() {
            var cacheTime = localStorage.getItem('__wprig_themeum_post_time');
            var cachedPost = localStorage.getItem('__wprig_themeum_post');

            if(!cachedPost || !parseInt(cacheTime) > Date.now()) {
                var endpoint = "https://www.themeum.com/wp-json/wp/v2/posts?per_page=3&status=publish&orderby=date&categories=1486";
                fetch(endpoint)
                  .then(response => response.json())
                  .then(res => {
                      if(Array.isArray(res)) {
                          printPostMarkup(res);
                          localStorage.setItem('__wprig_themeum_post_time', Date.now() + 3600e3);
                          localStorage.setItem('__wprig_themeum_post', JSON.stringify(res));
                      } else {
                          wprigGsPostWrap.remove();
                      }
                  })
                  .catch((e) => {
                      wprigGsPostWrap.remove();
                  })
            }
            else {
                var posts = JSON.parse(cachedPost);
                printPostMarkup(posts);
            }

        }

        fetchPost();


    }

    var sectionCount = $('.wprig-gs-section-count');
    if(sectionCount.length) {
        var endpoint = "https://wprig.io/wp-json/wp/v2/sections";
        var cacheTime = localStorage.getItem('__wprig_section_count_time');
        var cachedCount = localStorage.getItem('__wprig_section_count');
        if(!cachedCount || !parseInt(cacheTime) > Date.now()) {
            fetch(endpoint)
              .then(response => {
                  var count = response.headers.get('X-WP-Total');
                  if(count) {
                      count = count + '+';
                      sectionCount.html(count)
                      localStorage.setItem('__wprig_section_count_time', Date.now() + 3600e3);
                      localStorage.setItem('__wprig_section_count', count);
                  }
              }).catch(e => {
                // debug
            });
        } else {
            sectionCount.html(cachedCount)
        }

    }

    var blockCount = $('.wprig-gs-block-count');
    if(blockCount.length) {
        var endpoint = "https://wprig.io/wp-json/wp/v2/block";
        var cacheTime = localStorage.getItem('__wprig_block_count_time');
        var cachedCount = localStorage.getItem('__wprig_block_count');
        if(!cachedCount || !parseInt(cacheTime) > Date.now()) {
            fetch(endpoint)
              .then(response => {
                  var count = response.headers.get('X-WP-Total');
                  if(count) {
                      count = count + '+';
                      blockCount.html(count)
                      localStorage.setItem('__wprig_block_count_time', Date.now() + 3600e3);
                      localStorage.setItem('__wprig_block_count', count);
                  }
              }).catch(e => {
                // debug
            });
        } else {
            blockCount.html(cachedCount)
        }
    }

    var layoutCount = $('.wprig-gs-layout-count');
    if(layoutCount.length) {
        var endpoint = "https://wprig.io/wp-json/restapi/v2/layouts";
        var cacheTime = localStorage.getItem('__wprig_layout_count_time');
        var cachedCount = localStorage.getItem('__wprig_layout_count');
        if(!cachedCount || !parseInt(cacheTime) > Date.now()) {
            fetch(endpoint, {
                method: 'post'
            })
              .then(response => {
                  response.json().then(response => {
                      var count = response.filter(item => item.parentID === 0).length + '+';
                      layoutCount.html(count)
                      localStorage.setItem('__wprig_layout_count_time', Date.now() + 3600e3);
                      localStorage.setItem('__wprig_layout_count', count);
                  })
              }).catch(e => {
                // debug
            });
        } else {
            layoutCount.html(cachedCount)
        }
    }

    jQuery(".wprig-slick").slick()
})(jQuery);
