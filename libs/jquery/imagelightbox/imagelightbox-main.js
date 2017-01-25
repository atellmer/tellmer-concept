;$(document).ready(function()
{
	var overlayOn = function()
	{
		$('<div id="imagelightbox-overlay"></div>').appendTo('body');
	};

	var overlayOff = function()
	{
		$("#imagelightbox-overlay, .imagelightbox-arrow").fadeOut("fast", function() 
		{
			$("#imagelightbox-overlay").remove();		
			$('.imagelightbox-arrow').remove();		
		});		
	};

	var arrowsOn = function(instance, selector)
	{
		var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"><span class="mdi-navigation-chevron-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"><span class="mdi-navigation-chevron-right"></button>');
		$arrows.appendTo('body');
		$arrows.on('click touchend', function(e)
		{
			e.preventDefault();
			var $this	= $(this),
			$target	= $( selector + '[href="' + $('#imagelightbox' ).attr('src') + '"]'),
			index	= $target.index(selector);
			if( $this.hasClass('imagelightbox-arrow-left'))
			{
				index = index - 1;
				if( !$(selector).eq(index).length)
				{
					index = $(selector).length;
				}
			}
			else
			{
				index = index + 1;
				if( !$( selector ).eq(index).length)
				{
					index = 0;
				}
			}

			instance.switchImageLightbox(index);
			return false;
		});
	};



	var selectorUserPhoto = 'a[data-imagelightbox="user"]';
	var selectorUserContent = 'a[data-imagelightbox="content"]';
	var instanceImageLightBoxUser = $(selectorUserPhoto).imageLightbox(
	{
		onStart: function(){overlayOn(); arrowsOn(instanceImageLightBoxUser, selectorUserPhoto);},
		onEnd: function(){overlayOff();}
	});
	var instanceImageLightBoxContent = $(selectorUserContent).imageLightbox(
	{
		onStart: function(){overlayOn(); arrowsOn(instanceImageLightBoxContent, selectorUserContent);},
		onEnd: function(){overlayOff();}
	});
});
