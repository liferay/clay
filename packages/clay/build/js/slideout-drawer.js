+function($) {
	var SlideoutDrawer = function(element, options) {
		this.init(element, options);
	};

	SlideoutDrawer.prototype = {
		init: function(element, options) {
			this.options = $.extend({}, $.fn.slideoutDrawer.defaults, options);

			this._handleClick(element);
		},

		_alignToParent: function(element) {
			var instance = this;

			var relativeParent = element.closest(instance.options.relativeParent);

			if (relativeParent.length) {
				var slideoutDrawer = element.next(instance.options.drawer);

				instance._clearPosition(slideoutDrawer);

				var rpPos = relativeParent.offset();
				var sldPos = slideoutDrawer.offset();

				var rpWidth = relativeParent.outerWidth();
				var sldWidth = slideoutDrawer.outerWidth();

				var rpRightPos = Math.round(rpPos.left + rpWidth);
				var sldRightPos = Math.round(sldPos.left + sldWidth);

				var leftPos = Math.abs(rpPos.left - sldPos.left);
				var rightPos = Math.abs(rpRightPos - sldRightPos);
				var topPos = Math.abs(rpPos.top - sldPos.top);

				var rpBorderLeftWidth = parseInt(relativeParent.css('border-left-width'));
				var rpBorderRightWidth = parseInt(relativeParent.css('border-right-width'));
				var rpBorderTopWidth = parseInt(relativeParent.css('border-top-width'));

				if (instance.options.align === 'right') {
					slideoutDrawer.css({
						right: -rightPos + rpBorderRightWidth,
						top: -topPos + rpBorderTopWidth
					});
				}

				if (instance.options.align === 'left') {
					slideoutDrawer.css({
						left: -leftPos + rpBorderLeftWidth,
						top: -topPos + rpBorderTopWidth
					});
				}
			}
		},

		_clearPosition: function(drawer) {
			drawer.css({
				bottom: '',
				left: '',
				right: '',
				top: ''
			});
		},

		_handleClick: function(element) {
			var instance = this;

			if (instance.options.position === 'fixed') {
				element.on('click', function(event) {
					var slideoutDrawerFixed = $(this).next('.slideout-drawer-fixed');

					event.preventDefault();

					if (!slideoutDrawerFixed.hasClass('open')) {
						instance._openFixedDrawer(slideoutDrawerFixed);
					}
					else {
						instance._closeFixedDrawer(slideoutDrawerFixed);
					}
				});
			}
			else {
				element.on('click', function(event) {
					var drawer = $(this).next(instance.options.drawer);

					event.preventDefault();

					if (!drawer.hasClass('open')) {
						instance._openRelativeDrawer($(this));
					}
				});
			}
		},

		_handleClose: function(drawer) {
			var instance = this;

			if (instance.options.position === 'relative') {
				var slideoutDrawerClose = drawer.find(instance.options.close);

				slideoutDrawerClose.on('click', function(event) {
					var $this = $(this);

					event.preventDefault();

					instance._transitionEnd(drawer, function() {
						drawer.css({
							display: '',
							left: '',
							right: '',
							top: ''
						}).removeClass('slideout-drawer-transition');
					});

					drawer.addClass('slideout-drawer-transition');

					if (instance.options.align === 'right') {
						drawer.addClass('slideout-drawer-right');
						$this.css('transform', 'translateX(' + instance.getDrawerWidth(drawer) + 'px)');
					}
					else {
						drawer.addClass('slideout-drawer-left');
						$this.css('transform', 'translateX(' + -instance.getDrawerWidth(drawer) + 'px)');
					}

					$this.parent().removeClass('open').css('overflow', '');

					$(this).off('click');
				});
			}
		},

		_closeFixedDrawer: function(drawer) {
			drawer.addClass('slideout-drawer-transition').removeClass('open');

			this._transitionEnd(drawer, function() {
				drawer.css({
					display: '',
					width: ''
				});
			});
		},

		_openFixedDrawer: function(drawer) {
			var instance = this;

			var transitionEndFunc;

			switch(instance.options.align) {
				case 'bottom':
					drawer.addClass('slideout-drawer-bottom');
					break;

				case 'right':
					drawer.addClass('slideout-drawer-right');
					break;

				case 'top':
					drawer.addClass('slideout-drawer-top');
					break;

				default:
					drawer.addClass('slideout-drawer-left');
					break;
			}

			instance._transitionEnd(drawer, function(event) {
				drawer.removeClass('slideout-drawer-transition');
			});

			drawer.css({
				display: 'block',
				width: instance.options.width
			}).addClass('slideout-drawer-transition');

			drawer.find(instance.options.content).css('width', instance.options.width);

			setTimeout(function() {
				drawer.addClass('open');
			}, 50);
		},

		_openRelativeDrawer: function(element) {
			var instance = this;

			var slideoutDrawer = element.next(instance.options.drawer);

			instance._transitionEnd(slideoutDrawer, function() {
				slideoutDrawer.css('overflow', 'visible').removeClass('slideout-drawer-transition');
			});

			instance._resizeDrawer(element);
			instance._sizeDrawer(element);

			setTimeout(function() {
				instance._alignToParent(element);
			}, 50);

			instance._handleClose(slideoutDrawer);

			if (instance.options.align === 'right') {
				slideoutDrawer.addClass('slideout-drawer-right');
			}
			else {
				slideoutDrawer.addClass('slideout-drawer-left');
			}

			slideoutDrawer.css('display', 'block').addClass('slideout-drawer-transition');

			setTimeout(function() {
				slideoutDrawer.addClass('open');
				slideoutDrawer.find('.slideout-drawer-close').css('transform', 'translateX(' + 0 + ')');
			}, 50);
		},

		_resizeDrawer: function(element) {
			var instance = this;

			$(window).resize(function(event) {
				var slideoutDrawer;

				if (element) {
					slideoutDrawer = element.next(instance.options.drawer);

					if (slideoutDrawer.hasClass('open')) {
						instance._sizeDrawer(element);

						instance._alignToParent(element);
					}
				}
			});
		},

		_sizeDrawer: function(element) {
			var drawerCloseWidth;
			var instance = this;

			var height = this.getContainerHeight(element);
			var slideoutDrawer = element.next(this.options.drawer);

			var containerWidth = this.getContainerWidth(element);
			var drawerWidth = this.getDrawerWidth(element);

			if (containerWidth < drawerWidth) {
				drawerWidth = containerWidth;
			}

			slideoutDrawer.css({
				height: height,
				width: drawerWidth + 'px'
			});

			if (!slideoutDrawer.hasClass('open')) {
				if(this.options.align !== 'right') {
					slideoutDrawer.find(this.options.close).css('transform', 'translateX(' + -drawerWidth + 'px)');
				}
				else {
					slideoutDrawer.find(this.options.close).css('transform', 'translateX(' + drawerWidth + 'px)');
				}
			}

			setTimeout(function() {
				drawerCloseWidth = parseInt(slideoutDrawer.find('.slideout-drawer-close').outerWidth());

				slideoutDrawer.find(instance.options.content).css('width', drawerWidth - drawerCloseWidth + 'px');
			}, 0);
		},

		_transitionEnd: function(drawer, func) {
			var transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

			drawer.on(transitions, function(event) {
				(func)();

				drawer.off(transitions);
			});
		},

		getDrawerWidth: function(element) {
			var divisor;
			var drawerWidth;
			var width = this.getContainerWidth(element);

			var slideoutDrawer = element.closest(this.options.relativeParent).find(this.options.drawer);

			if (this.getUnits() === 'px') {
				divisor = 1;
				units = 'px';
				width = parseInt(this.options.width);
			}
			else if (this.getUnits() === '%') {
				divisor = 100 / parseInt(this.options.width);
				units = 'px';
			}
			else if (this.getUnits() === 'em') {
				divisor = 1;
				units = 'px';
				width = parseInt(this.options.width) * parseInt(slideoutDrawer.css('font-size'));
			}
			else if (this.getUnits() === 'rem') {
				divisor = 1;
				units = 'px';
				width = parseInt(this.options.width) * parseInt($('html').css('font-size'));
			}

			return (function() {
				drawerWidth = Math.floor(width/divisor);

				return drawerWidth;
			})();
		},

		getUnits: function(string) {
			if (!string) {
				string = this.options.width;
			}

			return (function() {
				var units = (string.match(/(px|%|rem|em)$/)||['px'])[0];

				return units;
			})();
		},

		getContainerHeight: function(element) {
			var relativeParent = this.options.relativeParent;
			var height;

			return (function() {
				height = element.closest(relativeParent).innerHeight();

				return height;
			})();
		},

		getContainerWidth: function(element) {
			var relativeParent = element.closest(this.options.relativeParent);
			var width;

			return (function() {
				width = relativeParent.innerWidth();

				return width;
			})();
		}
	};

	$.fn.slideoutDrawer = function(options) {
		new SlideoutDrawer(this, options);

		return this;
	};

	$.fn.slideoutDrawer.defaults = {
		align: 'left',
		close: '.slideout-drawer-close', // class name for close button
		content: '.slideout-drawer-content', // class name for content element
		drawer: '.slideout-drawer', // class name for drawer element
		relativeParent: '.list-group-item', // parent container drawer should size to
		position: 'relative',
		width: '75%'
	};

	$.fn.slideoutDrawer.Constructor = SlideoutDrawer;
}(jQuery);