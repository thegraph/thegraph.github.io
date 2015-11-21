(function($) {
    $(function() {

    	/*==========  Countdown  ==========*/
    	$(".dateEnd").countdown({
    		until: new Date(2015, 10, 10, 16, 23, 59),
        timezone: +7,
    		layout: '<ul class="day-expire">' +
    					'<li>{dn}<span>{dl}</span></li>'+
    					'<li>{hnn}<span>{hl}</span></li>'+
    					'<li>{mnn}<span>{ml}</span></li>'+
    					'<li>{snn}<span>{sl}</span></li>' +
    				'</ul>'
    	});
      
    	$(".dateLaunch").countdown({
    		until: new Date(2015, 10, 3, 16, 0, 0),
        timezone: +7,
    		layout: '<ul class="day-expire">' +
    					'<li>{dn}<span>{dl}</span></li>'+
    					'<li>{hnn}<span>{hl}</span></li>'+
    					'<li>{mnn}<span>{ml}</span></li>'+
    					'<li>{snn}<span>{sl}</span></li>' +
    				'</ul>'
    	});

        /*==========  Testimoni Slider  ==========*/
        $('.box-slide').slick({
            autoplay: true,
            prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>'
        });
        
        $('.open-demo').click(function(e) {
            e.preventDefault();
            
            $('.thegraph').addClass('active');
            $('html').css('overflow', 'hidden');
            
            $('.thegraph .tab-menu > .' + $(this).data('tab')).trigger('click');
            
            $('.thegraph').off('click').on('click', function(e) {
                if ($(e.target).parents('.toolbox').length < 1) {
                    $('.thegraph').removeClass('active');
                    $('html').css('overflow', '');
                }
            });
        });
        
        $('.milikiSekarang').click(function(e) {
            e.preventDefault();
            
            Custombox.open({
                target: '#modal',
                effect: 'fadein',
                zIndex: 999
            });
        });
        
        $('#shareFB').click(function(e) {
            e.preventDefault();
            
            setTimeout(function() {
                var kupon = $('#kupon').attr('data-value');
                var cku = '';
          
                for (var i = 0; i < kupon.length; i+=2) {
                     var char = (kupon[i] + kupon[i+1]) ^ 23;
                    cku += String.fromCharCode(char);
                }
          
                $('#kupon').text(cku);
            }, 3000);
          
            FB.ui({
                method: 'share',
                href: $(this).data('url')
            }, function(response){
                if (response && !response.error_code) {
                    var kupon = $('#kupon').attr('data-value');
                    var cku = '';
          
                    for (var i = 0; i < kupon.length; i+=2) {
                         var char = (kupon[i] + kupon[i+1]) ^ 23;
                        cku += String.fromCharCode(char);
                    }
          
                    $('#kupon').text(cku);
                }
            });
        });
        
        $(".fancybox").fancybox({
            width: "90%",
            height: "90%",
            fitToView: true,
            autoSize: false
        });
    });
})(jQuery);
