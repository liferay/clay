+function($) {
	$.extend({
		showNotification: function(options) {
			var defaults = {
				animation: 'fade',
				autoClose: 0,
				container: 'notification-container',
				template: '<div class="notification"><button class="close close-danger pull-right"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + options.text + '</div>'
			};

			options = $.extend(defaults, options);

			var body = $('body');
			var boundingBox = $('<div class="' + options.container + '"></div>');

			animate = function(node, anim) {
				if (anim === 'fade') {
					node.addClass('fade');

					setTimeout(function(){
						node.addClass('in');

						if (options.autoClose) {
							setTimeout(function() {
								hide(node);
							}, options.autoClose * 1000);
						}
					}, 100);
				}
			};

			delegateCloseButton = +function(node) {
				body.on(
					'click', '.' + options.container + ' .close',
					function(event) {
						var notificationNode = $(this).parents('.notification');

						event.preventDefault();

						hide(notificationNode);
					}
				);
			}();

			hide = function(node) {
				if (node.length && options.animation === 'fade') {
					var transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

					node.one(transitions, function(event) {
						setTimeout(function() {
							node.remove();

							if ($('body .' + options.container).is(':empty')) {
								$('body .' + options.container).remove();
							}
						}, 200);
					});

					node.removeClass('in');
				}
				else {
					node.remove();
				}
			};

			show = +function() {
				var notificationNode = $(options.template);

				if (body.find('> .' + options.container).length) {
					body.find('> .' + options.container).append(notificationNode);

					animate(notificationNode, options.animation);
				}
				else {
					boundingBox.append(notificationNode);
					body.prepend(boundingBox);

					animate(notificationNode, options.animation);
				}
			}();
		}
	});
}(jQuery);