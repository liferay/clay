(function($) {
	// https://bugs.webkit.org/show_bug.cgi?id=153852

	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	$.extend($.fn.modal.Constructor.prototype, {
		hideModal: function () {
			var that = this;
			this.$element.hide();
			this.backdrop(function () {
				that.$body.removeClass('modal-open');

				// https://bugs.webkit.org/show_bug.cgi?id=153852

				if (iOS && !(that.winScrollPos === 0)) {
					window.scrollTo(0, that.winScrollPos);

					that.$body.css({
						position: '',
						top: ''
					});
				}

				that.resetAdjustments();
				that.resetScrollbar();
				that.$element.trigger('hidden.bs.modal');
			});
		},

		show: function (_relatedTarget) {
			var that = this;
			var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

			this.$element.trigger(e);

			if (this.isShown || e.isDefaultPrevented()) {
				return;
			}

			this.isShown = true;

			this.checkScrollbar();
			this.setScrollbar();

			this.$body.addClass('modal-open');

			// https://bugs.webkit.org/show_bug.cgi?id=153852

			if (iOS) {
				this.winScrollPos = window.scrollY;

				if (!(this.winScrollPos === 0)) {
					this.$body.css({
						position: 'fixed',
						top: -this.winScrollPos
					});
				}
			}

			this.escape();
			this.resize();

			this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

			this.$dialog.on('mousedown.dismiss.bs.modal', function () {
				that.$element.one('mouseup.dismiss.bs.modal', function (e) {
					if ($(e.target).is(that.$element)) {
						that.ignoreBackdropClick = true;
					}
				});
			});

			this.backdrop(function () {
				var transition = $.support.transition && that.$element.hasClass('fade');

				if (!that.$element.parent().length) {
					that.$element.appendTo(that.$body); // don't move modals dom position
				}

				that.$element
					.show()
					.scrollTop(0);

				that.adjustDialog();

				if (transition) {
					that.$element[0].offsetWidth; // force reflow
				}

				that.$element.addClass('in');

				that.enforceFocus();

				var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

				transition ?
					that.$dialog // wait for modal to slide in
						.one('bsTransitionEnd', function () {
							that.$element.trigger('focus').trigger(e)
						})
						.emulateTransitionEnd($.fn.modal.Constructor.TRANSITION_DURATION) :
					that.$element.trigger('focus').trigger(e);
			});
		}
	});
})(jQuery);