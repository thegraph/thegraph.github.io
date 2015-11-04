/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * Dropdown only
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var o=t.fn.jquery.split(" ")[0].split(".");if(o[0]<2&&o[1]<9||1==o[0]&&9==o[1]&&o[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function o(o){o&&3===o.which||(t(n).remove(),t(a).each(function(){var e=t(this),n=r(e),a={relatedTarget:this};n.hasClass("open")&&(n.trigger(o=t.Event("hide.bs.dropdown",a)),o.isDefaultPrevented()||(e.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",a)))}))}function r(o){var r=o.attr("data-target");r||(r=o.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var e=r&&t(r);return e&&e.length?e:o.parent()}function e(o){return this.each(function(){var r=t(this),e=r.data("bs.dropdown");e||r.data("bs.dropdown",e=new i(this)),"string"==typeof o&&e[o].call(r)})}var n=".dropdown-backdrop",a='[data-toggle="dropdown"]',i=function(o){t(o).on("click.bs.dropdown",this.toggle)};i.VERSION="3.3.4",i.prototype.toggle=function(e){var n=t(this);if(!n.is(".disabled, :disabled")){var a=r(n),i=a.hasClass("open");if(o(),!i){"ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",o);var d={relatedTarget:this};if(a.trigger(e=t.Event("show.bs.dropdown",d)),e.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger("shown.bs.dropdown",d)}return!1}},i.prototype.keydown=function(o){if(/(38|40|27|32)/.test(o.which)&&!/input|textarea/i.test(o.target.tagName)){var e=t(this);if(o.preventDefault(),o.stopPropagation(),!e.is(".disabled, :disabled")){var n=r(e),i=n.hasClass("open");if(!i&&27!=o.which||i&&27==o.which)return 27==o.which&&n.find(a).trigger("focus"),e.trigger("click");var d=" li:not(.disabled):visible a",s=n.find('[role="menu"]'+d+', [role="listbox"]'+d);if(s.length){var p=s.index(o.target);38==o.which&&p>0&&p--,40==o.which&&p<s.length-1&&p++,~p||(p=0),s.eq(p).trigger("focus")}}}};var d=t.fn.dropdown;t.fn.dropdown=e,t.fn.dropdown.Constructor=i,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=d,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",a,i.prototype.toggle).on("keydown.bs.dropdown.data-api",a,i.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',i.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',i.prototype.keydown)}(jQuery);

!function(e){function a(a,s,t){var i=e(a).parents("."+t.wrapperClassName),n=e(a).find("."+t.optionTextTitleClassName).html()||e(a).parent().find("."+t.browseOptionTitle+"> span").eq(0).text(),o=e(a).attr("data-id"),r=e(a).attr("data-photo"),l=i.find("input[data-inputroute]"),p=i.find("."+t.listClassName),d=i.find("."+t.browseButtonClassName),c=l.attr("data-inputroute"),m=l.attr("data-limit"),u=e("<div/>",{"class":t.selectedItemClass});!t.browse&&s.hasOwnProperty("image")&&(u.append(e("<img/>",{"class":t.selectedImageClass,src:r})),u.addClass("has-avatar")),u.append(e("<div/>",{html:n})),u.append(e("<input/>",{type:"hidden",value:o,"data-route":c}));var h=e("<i/>",{"class":t.selectedDeleteIconClass,html:"&times;",click:function(){e(this).parent().remove(),l.val("").show().focus(),d.removeClass("open").show(),l.parents("."+t.wrapperClassName).find("."+t.moreClassName).remove()}});u.add(h).wrapAll(e("<div/>",{"class":t.selectedClass,"data-id":o})).parent().appendTo(p),e(a).parents(".available-result-container").hide(),d.hide(),l.hide(),(!m||m>e('input[type="hidden"][data-route="'+c+'"]').length)&&e("<span/>",{"class":t.moreClassName,text:t.moreText,click:function(){e(this).remove(),l.val("").show().focus(),d.show()}}).insertAfter(p)}function s(s,t){var i=[];return s.forEach(function(s){var n=e("<div/>",{"class":t.optionClassName,click:function(){a(this,s,t)}});!t.browse&&s.hasOwnProperty("image")&&s.image&&n.append(e("<img/>",{"class":t.optionImageClassName,src:s.image}));var o=e("<div/>",{"class":t.optionTextClassName});o.append(e("<span/>",{"class":t.optionTextTitleClassName,html:s.text})),!t.browse&&s.hasOwnProperty("meta")&&o.append(e("<span/>",{"class":t.optionTextMetaClassName,text:s.meta})),n.append(o),e.each(s.datas,function(e,a){a&&n.attr("data-"+e,a)}),i.push(n)}),i}function t(s,i,n){var o=function(a){if(e(a).parent().hasClass("open-child"))return e(a).parent().removeClass("open-child"),!1;if(e(a).parent().parent().find("."+i.optionClassName+".open-child").length&&e(a).parent().parent().find("."+i.optionClassName+".open-child").removeClass("open-child"),e("."+i.browseClassName).animate({scrollTop:e(a).parents("."+i.browseClassName).scrollTop()+e(a).parent().offset().top-e(a).parents("."+i.browseClassName).offset().top},300,"swing"),0==e(a).siblings("."+i.browseChildContainer).length){var s=e("<div />",{"class":i.browseChildContainer});e(a).parent().append(s),t(e(a).parent().data("childs"),i,s)}e(a).parent().addClass("open-child")};s.forEach(function(s){$boption=e("<div />",{"class":i.browseOptionClassName}),s.items.length&&($boption.addClass("has-child").data("childs",s.items),$boption.append(e("<div />",{"class":i.browseOptionChild,html:"<span></span>",click:function(){o(this)}}))),$boption.append(e("<div />",{"class":i.browseOptionTitle,html:"<span>"+s.text+"</span>","data-id":s.uid,click:function(){if(e(this).parent().hasClass("has-child"))o(this);else{if(!s.uid)return!1;a(this,s,i)}}})),s.uid&&$boption.find("."+i.browseOptionTitle).append(e("<span />",{"class":i.browseOptionAdd,"data-id":s.uid,click:function(t){t.stopPropagation();var n=e(this).parent().get(0);a(n,s,i)}})),$boption.appendTo(n)})}function i(e,a,s,t){if(0==e.length)return a;if("undefined"==typeof t)var t=[];for(var n=0,o=a.length;o--&&!(a[o].hasOwnProperty("text")&&a[o].text.substring(0,e.length).toLowerCase()===e.toLowerCase()&&a[o].uid&&(t.push({id:a[o].uid,text:a[o].text,image:a[o].hasOwnProperty("image")?"https://graph.facebook.com/"+a[o].image+"/picture?type=square":null,datas:{id:a[o].uid,photo:a[o].hasOwnProperty("image")?"https://graph.facebook.com/"+a[o].image+"/picture?type=square":null}}),n++,n>3));)a[o].hasOwnProperty("items")&&a[o].items.length&&i(e,a[o].items,null,t);"function"==typeof s&&s(t)}e.fn.shrimpSuggestion=function(a){var n={source:[],limitSearch:6,wrapperClassName:"suggestion",listClassName:"selected-list",resultClassName:"suggestion-results",optionClassName:"option",optionImageClassName:"avatar",optionTextClassName:"suggestion-text",optionTextTitleClassName:"suggestion-title",optionTextMetaClassName:"suggestion-meta",selectedClass:"selected-item",selectedItemClass:"item",selectedDeleteIconClass:"delete-item",selectedImageClass:"avatar",moreClassName:"and",moreText:"+ and",browse:!1,browseWrapperClassName:"suggestion-browse-container",browseButtonText:"Browse",browseButtonClassName:"suggestion-browse-button",browseClassName:"suggestion-browse-result",browseOptionClassName:"option",browseOptionChild:"browse-child",browseOptionTitle:"browse-title",browseOptionAdd:"browse-add",browseChildContainer:"browse-child-container",grandParent:"body"};n=e.extend({},n,a),e(n.grandParent).unbind("click").bind("click",function(a){var s=e(a.target).parents("."+n.wrapperClassName);1!==s.length?(e("."+n.wrapperClassName).find("."+n.browseButtonClassName+".open").removeClass("open"),e("."+n.wrapperClassName).find(".available-result-container").hide()):(e("."+n.wrapperClassName).not(s).find("."+n.browseButtonClassName+".open").removeClass("open"),e("."+n.wrapperClassName).not(s).find(".available-result-container").hide())}),e(this).each(function(){{var a=e("<div />",{"class":n.wrapperClassName}),o=e(this).wrap(a),r=e("<div />",{"class":n.listClassName}).insertBefore(this),l=e("<div />",{"class":"available-result-container "+n.resultClassName}).insertAfter(this);o.attr("class")}if(n.browse){var p=o.attr("data-variable")&&"object"==typeof window[o.attr("data-variable")]?window[o.attr("data-variable")]:n.browse,d=e("<div />",{"class":n.browseWrapperClassName}).insertAfter(this);d.append(o),d.append(e("<div />",{"class":n.browseButtonClassName,text:n.browseButtonText,click:function(){var a=e(this);return a.hasClass("open")?(a.parent().find("."+n.browseClassName).hide(),void a.removeClass("open")):(o.val(""),l.hide().empty(),a.parent().find("."+n.browseClassName).show(),a.addClass("open"),void a.siblings("input").focus(function(){a.siblings("."+n.browseClassName).hide(),a.removeClass("open")}))}})),$bresult=e("<div />",{"class":"available-result-container "+n.browseClassName}).insertAfter(this),t(p,n,$bresult)}o.focus(function(){e(this).siblings("."+n.resultClassName).children().length&&e(this).siblings("."+n.resultClassName).show()}),o.keyup(function(){l.empty();var e=o.val(),a=[];if(!e)return void l.hide();if(o.attr("data-variable")&&"object"==typeof window[o.attr("data-variable")]&&(a=window[o.attr("data-variable")]),i(e,a,function(e){var a=s(e,n);a.forEach(function(e){e.appendTo(l)}),l.show()}),"function"==typeof n.source){var t=o.parents("."+n.wrapperClassName);t.addClass("loading"),n.browse&&t.addClass("loading-browse"),n.source(o,function(e){if(null===e)return 0==a.length&&l.hide(),void t.removeClass("loading");if(r.children().length>0&&!o.is(":visible"))return l.hide(),void t.removeClass("loading");var i=s(e,n);i.forEach(function(e){0==l.find('[data-id="'+e.attr("data-id")+'"]').length&&e.appendTo(l)}),t.removeClass("loading"),l.show()})}})})}}(jQuery);

jQuery(function() {
    
    jQuery('.thegraph .suggestion-browse').shrimpSuggestion({
        grandParent: '.thegraph',
        browse: true
    });
    
    
    var ageList = '';
    for (i = 13; i < 66; i++) {
		ageList += "<li data-value='"+i+"'>"+i+"</li>";
	}
    jQuery('.thegraph .age-options').append(ageList);
    
    jQuery('.thegraph .tab-menu li').click(function(){
        var tab_id = jQuery(this).attr('data-tab');

        jQuery('.thegraph .tab-menu li').removeClass('current');
        jQuery('.thegraph .content').removeClass('current');

        jQuery(this).addClass('current');
        jQuery('.thegraph [data-tgid="'+tab_id+'"]').addClass('current');
        
        if (tab_id == 'tab-1') {
          jQuery('.thegraph .content-footer .mode, .thegraph .content-footer .switch-wrapper').show();
        }
        else {
          jQuery('.thegraph .content-footer .mode, .thegraph .content-footer .switch-wrapper').hide();
        }
    });
    
    jQuery('.thegraph .dropdown-menu li:not(.header)').click(function() {
    
		var text = jQuery(this).text();
		var value = jQuery(this).attr("data-value");
        var theClass = '.'+ jQuery(this).attr('class');
        var $dropdown = jQuery(this).parents(".dropdown");
    
        if ( $dropdown.is(':not(.no-select)') ) {
	        $dropdown.find(".dropdown-toggle span").text(text);
			$dropdown.find("input[type='hidden']").val(value).trigger('change');
        }
        
        if ($dropdown.hasClass('auto-close-filter')) {
           $dropdown.removeClass('open');
        }
    
        if ( $dropdown.is('.add-filter') ) {
	         $dropdown.siblings(theClass).removeClass('not-active');
	         jQuery(this).addClass("active");
        } else {
	        // tutup and reset demographic filter yang terpilih
	        if ($dropdown.parents('fieldset.add-filter').length == 1) {
		        // reset all value
		        $dropdown.siblings('fieldset:not(.not-active)').each(function(){
			       jQuery(this).find('.btn-close').trigger('click');
		        });
	        }
	        // dropdown age
	        if ($dropdown.find('[class*="age-"]').length < 1) {	        
		        $dropdown.siblings(theClass).removeClass('not-active');
                $notactive = $dropdown.siblings(':not('+theClass+'):not(.filter-name):not(input):not(.btn-close):not(.all-filter)').addClass('not-active');
                $notactive.find('input[type="hidden"],input[type="text"]').val('');
                $notactive.find('input[type="radio"]').eq(0).prop('checked', true);
                $notactive.trigger('change');
				$dropdown.siblings(':not('+theClass+'):not(.filter-name)').find('.delete-item').trigger('click');
	        }
	        // auto open opsi demographic ketika pilih people
	        if (jQuery(this).is('[data-popup]')) {
		        var targetPopup = jQuery(this).attr('data-popup');	        
		        setTimeout(function(){
			        $dropdown.siblings('.dropdown.add-filter.'+targetPopup).addClass('open');
		        }, 100);
	        
	        }
	        // stories date - open month & year 
	        if ( text === "Custom"){
	            jQuery('.thegraph .spesifik-time').removeClass('not-active');
	        }
        }
    });
    
    jQuery('.thegraph .dropdown-menu.age-type li').click(function(){
    
	    var $dropdown = jQuery(this).parents(".dropdown");
	    var value = jQuery(this).attr("data-value");
	    var text = jQuery(this).text();
        var ignore = jQuery(this).attr('data-ignore');
        
	    $dropdown.find(".dropdown-toggle span").text(text);
		$dropdown.find("input[type='hidden']").val(value).trigger('change');
    
	    // toggle
	    $dropdown.siblings('[class^=age]' + (value ? ':not(.'+value+')' : '')).addClass('not-active');
        if (value) $dropdown.siblings('.'+value).removeClass('not-active');
    
	    // reset not active value
        $dropdown.siblings('[class^=age].not-active').find('input').each(function(){
	       jQuery(this).val('').trigger('change');
        });
    
        $dropdown.siblings('[class^=age]:not(.not-active)').find('input').each(function() {
            var initialValue = jQuery(this).attr('data-default');
            jQuery(this).val(initialValue).trigger('change');
            jQuery(this).siblings('.dropdown-toggle').find('span').text(initialValue);
        });
    
        // handle route for single age
	    if (value == 'age-single') {
		    var route = jQuery(this).attr("data-route");
		    $dropdown.siblings('.age-single').find('input[name=age]').attr('data-route', route);
	    }
        
        if (ignore) {
            $dropdown.siblings('.age-single').find('input[name=age]').attr('data-ignore', ignore);
        }
        else {
            $dropdown.siblings('.age-single').find('input[name=age]').removeAttr('data-ignore');
        }
    });
    
    jQuery('.thegraph .filter .dropdown .dropdown-toggle, fieldset.add-filter .dropdown.add-filter .dropdown-toggle').click(function (event) {
        jQuery(this).parents('.dropdown').toggleClass('open');
    });
    
    jQuery(".thegraph .dropdown-menu > li > .trigger").mouseover(function(e){
        var $current = jQuery(this).next();
        var $grandparent = jQuery(this).parent().parent();
        var ignore = false;

        $grandparent.find(".sub-menu:visible").not($current).hide();
        $current.toggle();

        e.stopPropagation();
    });
    
    jQuery(document).click(function(e) {
        if ( jQuery(e.target).parentsUntil('.thegraph', '.dropdown').length < 1) {
            jQuery('.thegraph .filter .dropdown, .add-filter .dropdown').removeClass('open');
        }
    });
    
    jQuery('.dropdown').on('show.bs.dropdown', function(e) {
        jQuery('.thegraph .filter .dropdown, .add-filter .dropdown').removeClass('open');
    });
    
    jQuery('.thegraph .dropdown-menu.sub-menu li').click(function() {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
        }
    
        var theClass = '.'+ jQuery(this).attr('class');
        jQuery(this).parents('[data-tgid^="tab-"]').find('fieldset'+theClass).removeClass('not-active').addClass('active');
        jQuery(this).addClass('active');

        if (jQuery(this).parent().find('.active').length) {
            jQuery(this).parent().prev().addClass('active');
        }
    });
    
    jQuery('.thegraph .people fieldset .btn-close i,.thegraph [data-tgid]:not(.people) > fieldset > .btn-close i').click(function() {
        $fieldset = jQuery(this).parents("fieldset");
        $fieldset.removeClass('active');
        var id = $fieldset.attr("class").split(' ')[0];
        $fieldset.addClass('not-active');

        $fieldset.find('.suggestion .delete-item').trigger('click');
        $fieldset.find('input[type=text], input[type=hidden]').val('');
        $fieldset.find('input[type="radio"]').eq(0).prop('checked', true);

        var $li = jQuery('.sub-menu li.' + id);
        $li.removeClass('active');
    
        $fieldset.find('.dropdown-menu > li').eq(0).trigger('click');
    
        if ($li.siblings('.active').length == 0) {
            $li.parent().prev().removeClass('active');
        }
    });
    
    jQuery('.thegraph fieldset > fieldset > .btn-close').click(function() {
	    var fieldClass = jQuery(this).parents().attr('class');
	    var $parent = jQuery(this).parent();
	    var $parentFieldset = jQuery(this).parents('fieldset.add-filter');
	    var $dropdown = $parent.find('fieldset > .dropdown');
    
	    // tutup elemen
	    $parent.addClass('not-active');
    
	    // aktifin menu demografi
	    $parentFieldset.find('.people-dropdown .'+fieldClass).removeClass('active');
    
	    // reset value
        $parent.find('input[type=text], input[type=hidden]').val('');
        $parent.find('input[type="radio"]').eq(0).prop('checked', true);
    
	    // reset selected value from suggestion and browse
	    $parent.find('.delete-item').trigger('click');
    
	    // reset dropdown age type to between
	    $dropdown.siblings('[class^=age]:not(.not-active)').addClass('not-active');
	    $dropdown.siblings('.age-between').removeClass('not-active');
    
	    //reset dropdown value to first value
	    $dropdown.each(function(){
		    var initialValue = jQuery(this).find('.dropdown-menu > li').eq(0).text();
		    jQuery(this).find('.dropdown-toggle > span').text(initialValue);
	    });
    
	    // reset dropdown age default value
	    $dropdown.siblings('[class^=age]').find('input').each(function(){
	       jQuery(this).val('');
	       if (jQuery(this).attr('type') == 'hidden') {
		       var initialValue = jQuery(this).attr('data-default');
		       jQuery(this).siblings('.dropdown-toggle').find('span').text(initialValue);
	       }
	    });
    });
    
    jQuery('.thegraph .all-filter').click(function(){
        var $thegraph = jQuery(this).parents('.thegraph');
    
	    $thegraph.find('[data-tgid="tab-1"]').toggleClass("show-all-filters");
	    $thegraph.find('.filter > .dropdown.popup').toggle();
	    $thegraph.find('.people .section-content > fieldset.not-active').toggleClass('visible');

	    var txt = jQuery(this).text();
	    if (txt == "Show less") {
		    jQuery(this).html("Show all &rsaquo;");
	    } else {
		    jQuery(this).html("Show less");
	    }
    });
    
    jQuery('.thegraph label[for]').click(function() {
        var id = jQuery(this).attr('for');
        var $el = jQuery(this).parent().find('[data-tgid="'+id+'"]');
        if ($el.attr('type') == 'checkbox') {
          $el.prop('checked', !$el.prop('checked'));
        }
        else {
          $el.prop('checked', true);
        }
    });
    
    jQuery('.thegraph .button-search').click(function() {
        alert('Fungsi Search dan Suggestion di non aktifkan pada demo');
        return false; 
    });
    
    jQuery('.thegraph .close-toolbox').click(function() {
        jQuery('.thegraph').removeClass('active');
        jQuery('html').css('overflow', '');
    });
});
