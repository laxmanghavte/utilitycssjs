//jq1_12 = $.noConflict( true );

(function($) {
  $(document).ready(function() {
alert("123");
    $('.views-field-field-gcma-description').parent().parent().attr("href", "#.");
    $('<div class="astrick">*</div>').prependTo('.view-display-id-block_1 .views-row-last .views-field-field-small-bar-image');
    // Global Window Size Vars
    var windowWidth;
    var windowHeight;
    var windowHeightMobile;
    var isMobile;
    console.log("Test banner");
    // Gets window width
    function getWindowWidth() {
      windowWidth = $(window).width();
      console.log('width: ' + windowWidth);
    }
    // Gets window height
    function getWindowHeight() {
      windowHeight = $(window).height();
      windowHeightMobile = 'auto';
      console.log('height: ' + windowHeight);
    }

    // Measures the window after everything loads
    // @TODO: Possibly send to another file (motor.js)

    $(window).load(function() {
      getWindowWidth();
      getWindowHeight();
      var bodyHeight = $('body').height();
      $('.side.bgcolor.secondary-col').height(windowHeight);
      $('body.front .side.bgcolor').height(windowHeight);
      widthDetectionActions();
      console.log('window load');
    });

    function widthDetectionActions() {
      if ($(window).width() <= 978) {
        if ($('body').hasClass('mobile')) {
          //Stare to the sky
          console.log('isMobile: ' + isMobile);
        } else {
          isMobile = 1;
          $('body').addClass('mobile');
          $('body.front #sidebar-content').hide();
          console.log('isMobile: ' + isMobile);

          $('#block-views-products-block-1').appendTo('body.front #node-121 .con-2.node-cols');

          $('body.page-products #block-system-main .view-products .view-content .views-row').each(function() {
            $(this).find('.views-field-field-image-left-2').appendTo(this);
            $(this).find('.legalfooter').appendTo(this);
            $(this).find('.side.bgcolor.secondary-col').height('auto');

          });

        }
      }

      if ($(window).width() >= 979) {
        isMobile = 0;
        $('body.mobile').removeClass('mobile');
        $('.side.bgcolor.secondary-col, body.front #sidebar-content').height(windowHeight);
        console.log('isMobile: ' + isMobile);

      };
    }

    // Window Resize
    $(window).resize(function() {
      console.log("resize");
      widthDetectionActions();
      getWindowWidth();
      getWindowHeight();

    });

    // General layout modifications
    // Logo Nav Menu (Mobile + Desktop)
    $('body').append('<span id="logo"></div>');
    // Navigation (Mobile + Desktop)
    $('#navigation').appendTo('body');
    // The flaming lips goes south (Mobile + Desktop)
    $('body').append('<div id="flaminglips"></div>');
    // Inits the modals (Mobile + Desktop)

    // Relayout desktop only

    // $('#block-block-11').attr('data-remodal-id', "modal-new");

    $('body.front #block-system-main').prepend('<div id="sidebar-content" class="side bgcolor"></div>');
    // Default flaming lips for the frontpage (Desktop)
    $('body.front #flaminglips, body.page-node-191 #flaminglips').append('<img src="https://collectionchapstickco.pfizer.edrupalgardens.com/sites/g/files/g10028951/f/201601/logo-p1_0.png">');

    // Brings the front footer below the main body content
    $('body.front #block-block-6,body.front #block-views-products-block-1').appendTo('#node-121');

    // Misc on front layout.
    $('.node .float-overflow .content').prepend('<div class="con-1 node-cols"></div><div class="con-2 node-cols"></div><div class="con-3 node-cols"></div>');
    $('.field-name-field-image-left-2').prependTo('.con-1');
    $('.field-name-field-image-left').prependTo('.con-1');
    $('.field-name-field-image-center').prependTo('.con-2');
    $('.field-name-field-imagen-lateral-mobile').prependTo('.con-2');
    $('.field-name-field-imagen-lateral-bottom-mobi').appendTo('.con-2');
    $('#block-block-1').prependTo('.con-3');
    $(' #block-views-frontpage-tip-block').prependTo('.con-3');
    $('body.front .con-1').prependTo('#sidebar-content');

    // Assign Mobile Classes
    $('.field-name-field-imagen-lateral-mobile,.field-name-field-imagen-lateral-bottom-mobi').addClass('mobile-only');

    // Flaming lips changes (Desktop)

    $('.slick-slider').on('init', function(event, slick) {
      var currentLips = $(this).find('.slick-active .views-field-field-lips-image .field-content').html();
      $('#flaminglips').html(currentLips);
      $('#flaminglips').animate({
        width: 'toggle'
      });
    });


    // Init the products slick (Mobile + Desktop)

    var CloseModal = '<button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>';

    $('#block-views-te-lo-dice-chapstick-block').prepend(CloseModal);
    // $('#block-block-11').prepend(CloseModal);
    $('#block-views-te-lo-dice-chapstick-block .view-te-lo-dice-chapstick .view-content .views-row .views-field-title').show();
    $('#block-views-te-lo-dice-chapstick-block .view-te-lo-dice-chapstick .view-content .views-row').each(function() {
      var tipColor = $(this).find('.views-field-field-color').text();

      $(this).css('background', tipColor);
      console.log(tipColor);
    });
    $('#block-views-te-lo-dice-chapstick-block .view-te-lo-dice-chapstick .view-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    // Products + Slick Carousel
    $('body.page-products #block-system-main .view-products .view-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false
    });

    $('#block-views-te-lo-dice-chapstick-block').attr('data-remodal-id', "modal");

    $('ul.menu li.menu-link-2486 a').on('click', function(event) {
      event.preventDefault();
      $(this).attr('data-remodal-target', 'modal')
      $('[data-remodal-id="modal"]').remodal();
      console.log('waaa');
      $(window).trigger('resize');

      /* Act on the event */
    });

    // Sets background color on every product slide
    var footerblock = $('#block-block-6').html();
    var footerblockmedicado = footerblock.replace("PP-CHP-COL-0344", "PP-CHM-COL-0019");

    $('body.page-products #block-system-main .view-products .view-content .views-row, body.front #block-system-main > .view-products .view-content .views-row').each(function() {
      var bgColor = $(this).find('.views-field-field-color .field-content').text();
      $(this).prepend('<div id="sidebar-content" class="side bgcolor secondary-col" style="background:' + bgColor + '"></div><div class="side main-col"></div>');
      // Sends the content to their respective containers
      $(this).find('.views-field').not('.views-field-field-image-left, .views-field-field-image-left-2, .views-field-field-lips-image').appendTo($(this).find('div.main-col'));

      $(this).find('.views-field-field-image-left').appendTo($(this).find('.side.secondary-col'));
      $(this).find('.views-field-field-image-left-2').appendTo($(this).find('.side.secondary-col'));

      $(this).find('.views-field-field-image-center').appendTo($(this).find('.views-field-field-image-title'));
      $(this).find('.views-field-field-image-title').append('<div class="body-container"></div>');
      $(this).find('.views-field-field-subtitle').appendTo($(this).find('.views-field-field-image-title .body-container'));
      $(this).find('.views-field-body').appendTo($(this).find('.views-field-field-image-title .body-container'));

      $(this).find('.views-field-field-subtitle .field-content').css({
        'color': bgColor
      });
      $(this).find('.views-field-field-image-title').append('<div class="legalfooter"></div>');
      //If the product is medicado set the specific footer
      if ($(this).find(".views-field-nid .field-content").text() == '176')
        //$(this).find('.views-field-field-image-title .legalfooter').append(footerblockmedicado);
        $(this).find('.views-field-field-image-title .legalfooter').replaceWith("<div class='legalfooter'><p>*Chapstick Medicado es un medicamento, no exceder su consumo. Leer indicaciones y contraindicaciones en la etiqueta. Si los síntomas persisten consulte a su médico. Indicación: cicatrización de fisuras labiales.<br>INVIMA 2008M-007458-R1. PP-CHP-COL-0575</p></div>");
      else
        $(this).find('.views-field-field-image-title .legalfooter').append(footerblock);

    });

    $('.view-id-products.view-display-id-page .slick-slider').on('beforeChange', function(event, slick) {
      $('#flaminglips').animate({
        width: 'toggle'
      });
    });


    $('.view-id-products.view-display-id-page .slick-slider').on('afterChange', function(event, slick) {
      var currentLips = $(this).find('.slick-active .views-field-field-lips-image .field-content').html();
      $('#flaminglips').html(currentLips).animate({
        width: 'toggle'
      });

      //Show or hide navigation bar if product is medicado or the others
      if ($(".slick-current .views-field-nid .field-content").text() == '176')
        $("#logo,#navigation").hide();
      else
        $("#logo,#navigation").show();

    });

    $('#navigation').prepend('<div id="hamburguer"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>');

    $('#hamburguer').on('click', function(event) {
      event.preventDefault();
      $("#block-system-main-menu ul.menu").toggle(function() {
        $(this).animate({
          height: 0
        }, 200);

      }, function() {
        $(this).animate({
          height: 400
        }, 200);
        console.log('check burguer3');
      });

      /* Act on the event */
    });
    $('body.mobile #block.block-system-main-menu ul li.menu-link-2481 a').css('color', 'red');

    $('body.page-products #block-system-main .view-products .view-content .views-row').each(function() {
      $(this).find('.views-field-field-imagen-lateral-mobile').prependTo($(this).find('.secondary-col.bgcolor'));
    });

    $('body.page-node-191 #node-191').prepend('<div id="sidebar-content" class="side bgcolor secondary-col" style="background:#8BD5F2"></div><div class="side main-col"></div>');
    $('#node-191 .field-name-body .col-sec').appendTo('#sidebar-content');
    $('#node-191 .field-name-body .col-main').appendTo('body.page-node-191 #node-191 .float-overflow');

    // Link on Chapstick to youtube
    //   $('#block-block-11 .inner.tb-terminal').wrap('<a class="gotoyoutube extlink" target="_blank" href="https://www.youtube.com/channel/UCDyWnd4g2bk-k8ctU7Az_iA"></a>');
    // Alert on External links
    $('a.extlink').click(function(e) {
      if (!confirm("Se\u00f1or (a) Usu\u00e1rio (a) est\u00e1 abandonando un Sitio seguro perteneciente a PFIZER. El acceso a los v\u00ednculos de terceros es bajo su responsabilidad. PFIZER no se responsabiliza de ninguna transacci\u00f3n de adquisici\u00f3n y entrega de bienes o servicios que el Usuario (a) realice en la p\u00e1gina web a la que ingresar\u00e1 a partir de este momento. Conozca los T\u00e9minos y Condiciones de PFIZER")) {
        // if user clicks 'no' then dont proceed to link.
        e.preventDefault();
      };
    });
  });

  $(window).load(function() {
    // banner carousel
    setTimeout(function() {
      $(".front .view-products.block-products-3 .view-content").slick({
        dots: true,
        slidesToShow: 9,
        slidesToScroll: 9,
        infinite: false
      });
    }, 400);
    setTimeout(function() {
      $(".page-products .view-products.block-products-3 .view-content").slick({
        dots: true,
        slidesToShow: 9,
        slidesToScroll: 9,
        infinite: false
      });
    }, 400);
    var currentLips = $('#block-system-main .view-products .slick-slider .slick-list .slick-track').find('.slick-active .views-field-field-lips-image .field-content').html();
    $('#flaminglips').html(currentLips);

    $('body.page-products #block-system-main .view-products .view-content .views-row').each(function() {
      $('body.page-products #block-views-products-block-1').clone().appendTo($(this).find('.views-field-field-image-title'));

      $(this).find('.views-field-field-image-title .block-products-3 .view-content').on('click', '.views-row', function(e) {
        if (!$(this).hasClass('product-custom-link-row')) {
          e.preventDefault();
          slideIndex = $(this).index();
          var classes = $(this).attr('class').split(' ');
          var nid = '';
          for (var n in classes) {
            if (n != 'last' && classes[n].indexOf('nid-') == 0) {
              nid = classes[n];
              slideIndex = $('#block-system-main .view-products.view-display-id-page .view-content.slick-slider .slick-slide.' + nid).attr('data-slick-index');
              break;
            }
          }
          $('#block-system-main .view-products.view-display-id-page .view-content.slick-slider').slick('slickGoTo', slideIndex);

        }
      });

    });

    var i = 0;
            $('.front #block-system-main .block-products-3 .view-content .views-row').each(function () {
              if ($(this).find('.product-custom-link').length > 0) {
                  $(this).wrapAll('<a class="extra-wrapper-custom" href="' + $(this).find('.product-custom-link').text() + '"</a>"');
                  $(this).addClass('product-custom-link-row');
              }
              else {
                hrefIndex = '/products?slick1=' + i;
                $(this).wrapAll('<a class="extra-wrapper" href="' + hrefIndex + '"</a>"');
                ++i;
              }
            });

    $('.block-products-3 .views-row').on({
      'mouseover': function() {
        $(this).find('.views-field-field-tooltip-image').show();
      },
      'mouseleave': function() {
        $(this).find('.views-field-field-tooltip-image').hide();
      }
    });
  setTimeout(function() {
    var i;
    for (i = 0; i < 15; i++) {
    jQuery( "body" ).find( ".views-field-field-tooltip-image" ).eq( i ).addClass( "tooltip-"+i );

    var id = jQuery('.slick-track .slick-slide').attr('id');
    jQuery( "body" ).find( ".slick-track .slick-slide" ).eq( i ).attr('id','tooltiprow'+i);
    }
    jQuery('.views-field-field-tooltip-image').css('top', '275px');
    jQuery(".slick-slide").bind("mouseover", function () {
    var index = jQuery(this).attr("id").replace("tooltiprow", "");
    var x =  jQuery(this).offset();
    var y =  jQuery(".slick-list.draggable").offset();
    var z =  (x.left-y.left);
    console.log("z: " + z);
    jQuery(".tooltip-" + index).show();
    jQuery(".tooltip-" + index).css({left: z});
    });

    jQuery(".slick-slide").bind("mouseout", function () {
    var index = jQuery(this).attr("id").replace("tooltiprow", "");
    jQuery(".tooltip-" + index).hide();
    });

    jQuery( ".slick-active #block-views-products-block-1.block-none:last-child" ).addClass( "carousal2" );

    jQuery(".carousal2 .views-field-field-tooltip-image").prependTo(".body-container");

var i;
  for (i = 0; i < 15; i++) {
    jQuery( "body" ).find( ".slick-active .body-container .views-field-field-tooltip-image" ).eq( i ).addClass( "tooltip-"+i );
    var id = jQuery('.slick-track .slick-slide').attr('id');
    jQuery( "body" ).find( ".carousal2 .slick-track .slick-slide" ).eq( i ).attr('id','tooltiprow'+i);
  }
  jQuery('.body-container .views-field-field-tooltip-image').css('top', '140px');

  jQuery(".carousal2 .slick-slide").bind("mouseover", function () {
    var index = jQuery(this).attr("id").replace("tooltiprow", "");
    var x =  jQuery(this).offset();
    var y =  jQuery(".carousal2 .slick-list.draggable").offset();
    var z =  (x.left-y.left);
    console.log("z: " + z);
    jQuery(".tooltip-" + index).show();
    jQuery(".tooltip-" + index).css({left: z});
  });

  jQuery(".carousal2 .slick-slide").bind("mouseout", function () {
    var index = jQuery(this).attr("id").replace("tooltiprow", "");
    jQuery(".tooltip-" + index).hide();
  });

  }, 450);
  });
  if ($(".slick-current .views-field-nid .field-content").text() == '176')
    $("#logo,#navigation").hide();
  else
    $("#logo,#navigation").show();


  jQuery(".front .views-field-field-tooltip-image").prependTo(".node-promoted ");

})(jq1_12);
