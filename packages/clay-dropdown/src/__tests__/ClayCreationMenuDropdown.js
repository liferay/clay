import ClayCreationMenuDropdown from '../ClayCreationMenuDropdown';

let clayCreationMenuDropdown;

let getItems = function(maxItems, name) {
	let items = [];

	for (let i = 1; i <= maxItems; i++) {
		items.push({
			href: '#' + name + i,
			label: name + i,
		});
	}

	return items;
};

describe('ClayCreationMenuDropdown', function() {
	afterEach(() => {
		if (clayCreationMenuDropdown) {
			clayCreationMenuDropdown.dispose();
		}
	});

	describe('should render a creation menu dropdown', () => {
		it('with the default markdown', () => {
			clayCreationMenuDropdown = new ClayCreationMenuDropdown({
				primaryItems: getItems(2, 'main'),
				spritemap: 'icons.svg',
			});

			expect(clayCreationMenuDropdown).toMatchSnapshot();
		});

		it('with classes', () => {
			clayCreationMenuDropdown = new ClayCreationMenuDropdown({
				elementClasses: 'my-custom-class',
				primaryItems: getItems(2, 'main'),
				spritemap: 'icons.svg',
			});

			expect(clayCreationMenuDropdown).toMatchSnapshot();
		});

		it('with id', () => {
			clayCreationMenuDropdown = new ClayCreationMenuDropdown({
				id: 'myId',
				primaryItems: getItems(2, 'main'),
				spritemap: 'icons.svg',
			});

			expect(clayCreationMenuDropdown).toMatchSnapshot();
		});

		it('disabled', () => {
			clayCreationMenuDropdown = new ClayCreationMenuDropdown({
				disabled: true,
				primaryItems: getItems(2, 'main'),
				spritemap: 'icons.svg',
			});

			expect(clayCreationMenuDropdown).toMatchSnapshot();
		});

		it('expanded', () => {
			clayCreationMenuDropdown = new ClayCreationMenuDropdown({
				expanded: true,
				primaryItems: getItems(2, 'main'),
				spritemap: 'icons.svg',
			});

			expect(clayCreationMenuDropdown).toMatchSnapshot();
		});

		it('should keep the expanded updated with that of the dropdown base', () => {
			jest.useFakeTimers();
			clayCreationMenuDropdown = new ClayCreationMenuDropdown({
				primaryItems: getItems(2, 'main'),
				spritemap: 'icons.svg',
			});

			expect(clayCreationMenuDropdown.expanded).toBeFalsy();

			clayCreationMenuDropdown.refs.dropdown.toggle();
			jest.runAllTimers();

			expect(clayCreationMenuDropdown.expanded).toBeTruthy();
			expect(clayCreationMenuDropdown).toMatchSnapshot();
		});

		it('and emit an event when trigger button clicked', () => {
			clayCreationMenuDropdown = new ClayCreationMenuDropdown({
				primaryItems: getItems(2, 'main'),
				spritemap: 'icons.svg',
			});

			const spy = jest.spyOn(clayCreationMenuDropdown, 'emit');

			clayCreationMenuDropdown.refs.dropdown.refs.triggerButton.click();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(
				expect.objectContaining({
					name: 'toggle',
				})
			);
		});

		describe('with only primary items', () => {
			describe('which are less than', () => {
				it('the default primary and total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						primaryItems: getItems(5, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the passed primary and default total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						maxPrimaryItems: 10,
						primaryItems: getItems(5, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the default primary and passed total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						maxTotalItems: 10,
						primaryItems: getItems(5, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the passed primary and total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						maxPrimaryItems: 7,
						maxTotalItems: 10,
						primaryItems: getItems(5, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});
			});

			describe('which are more than', () => {
				it('the default primary and total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						primaryItems: getItems(16, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the default primary maximum and less than the default total maximum', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						primaryItems: getItems(10, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the passed primary and default total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						maxPrimaryItems: 10,
						primaryItems: getItems(16, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the default primary and passed total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						maxTotalItems: 20,
						primaryItems: getItems(22, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the passed primary maximum and less than the default total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						maxPrimaryItems: 10,
						primaryItems: getItems(12, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				it('the default primary maximum and less than the passed total maximums', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						maxTotalItems: 20,
						primaryItems: getItems(18, 'primary'),
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});
			});
		});

		describe('with only secondary items', () => {
			it('and less than default secondary maximum', () => {
				clayCreationMenuDropdown = new ClayCreationMenuDropdown({
					secondaryItems: getItems(4, 'primary'),
					spritemap: 'icons.svg',
				});

				expect(clayCreationMenuDropdown).toMatchSnapshot();
			});

			it('and the same as default secondary maximum', () => {
				clayCreationMenuDropdown = new ClayCreationMenuDropdown({
					secondaryItems: getItems(7, 'primary'),
					spritemap: 'icons.svg',
				});

				expect(clayCreationMenuDropdown).toMatchSnapshot();
			});

			it('and more than default secondary maximum', () => {
				clayCreationMenuDropdown = new ClayCreationMenuDropdown({
					secondaryItems: getItems(27, 'primary'),
					spritemap: 'icons.svg',
				});

				expect(clayCreationMenuDropdown).toMatchSnapshot();
			});
		});

		describe('with primary and secondary items', () => {
			describe('with no groups', () => {});

			describe('with only one group', () => {
				it('with label', () => {
					clayCreationMenuDropdown = new ClayCreationMenuDropdown({
						primaryItems: getItems(5, 'primary'),
						secondaryItems: [
							{
								items: getItems(5, 'secondary'),
								label: 'Secondary',
							},
						],
						spritemap: 'icons.svg',
					});

					expect(clayCreationMenuDropdown).toMatchSnapshot();
				});

				describe('and primary items', () => {
					describe('are less than default primary maximum', () => {
						describe('and secondary items are less', () => {
							describe('than default secondary maximum', () => {
								it('and together less than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										primaryItems: getItems(5, 'primary'),
										secondaryItems: [
											{
												items: getItems(5, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together less than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxTotalItems: 12,
										primaryItems: getItems(5, 'primary'),
										secondaryItems: [
											{
												items: getItems(6, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxTotalItems: 10,
										primaryItems: getItems(5, 'primary'),
										secondaryItems: [
											{
												items: getItems(6, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});
							});

							describe('than passed secondary maximum', () => {
								it('and together less than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 9,
										primaryItems: getItems(5, 'primary'),
										secondaryItems: [
											{
												items: getItems(8, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together less than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 9,
										maxTotalItems: 14,
										primaryItems: getItems(5, 'primary'),
										secondaryItems: [
											{
												items: getItems(8, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 10,
										primaryItems: getItems(7, 'primary'),
										secondaryItems: [
											{
												items: getItems(9, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 11,
										maxTotalItems: 16,
										primaryItems: getItems(7, 'primary'),
										secondaryItems: [
											{
												items: getItems(10, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});
							});
						});

						describe('and secondary items are more', () => {
							describe('than default secondary maximum', () => {
								// TODO
							});

							describe('than passed secondary maximum', () => {
								// TODO
							});
						});
					});

					describe('are more than default primary maximum', () => {
						describe('and secondary items are less', () => {
							describe('than default secondary maximum', () => {
								it('and together less than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										primaryItems: getItems(9, 'primary'),
										secondaryItems: [
											{
												items: getItems(5, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together less than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxTotalItems: 17,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(6, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(6, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxTotalItems: 12,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(6, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});
							});

							describe('than passed secondary maximum', () => {
								it('and together less than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 5,
										primaryItems: getItems(9, 'primary'),
										secondaryItems: [
											{
												items: getItems(4, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together less than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 5,
										maxTotalItems: 17,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(4, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 8,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(6, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 8,
										maxTotalItems: 12,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(6, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});
							});
						});

						describe('and secondary items are more', () => {
							describe('than default secondary maximum', () => {
								it('and together less than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxTotalItems: 19,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(8, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(8, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxTotalItems: 17,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(8, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});
							});

							describe('than passed secondary maximum', () => {
								it('and together less than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 4,
										primaryItems: getItems(9, 'primary'),
										secondaryItems: [
											{
												items: getItems(5, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together less than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 4,
										maxTotalItems: 19,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(8, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than default total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 10,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(12, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});

								it('and together more than passed total maximum', () => {
									clayCreationMenuDropdown = new ClayCreationMenuDropdown({
										maxSecondaryItems: 10,
										maxTotalItems: 20,
										primaryItems: getItems(10, 'primary'),
										secondaryItems: [
											{
												items: getItems(12, 'secondary'),
											},
										],
										spritemap: 'icons.svg',
									});

									expect(clayCreationMenuDropdown).toMatchSnapshot();
								});
							});
						});
					});
				});
			});

			describe('with two groups and primary items', () => {
				describe('are less than default primary maximum', () => {
					describe('and secondary items are less', () => {
						describe('than default secondary maximum', () => {
							// TODO
						});

						describe('than passed secondary maximum', () => {
							// TODO
						});
					});

					describe('and secondary items are more', () => {
						describe('than default secondary maximum', () => {
							// TODO
						});

						describe('than passed secondary maximum', () => {
							// TODO
						});
					});
				});

				describe('are more than default primary maximum', () => {
					describe('and secondary items are less', () => {
						describe('than default secondary maximum', () => {
							// TODO
						});

						describe('than passed secondary maximum', () => {
							// TODO
						});
					});

					describe('and secondary items are more', () => {
						describe('than default secondary maximum', () => {
							// TODO
						});

						describe('than passed secondary maximum', () => {
							// TODO
						});
					});
				});
			});

			it('and emit an event on more button click', () => {
				clayCreationMenuDropdown = new ClayCreationMenuDropdown({
					primaryItems: getItems(2, 'main'),
					secondaryItems: [
						{
							items: getItems(8, 'favorite'),
						},
					],
					spritemap: 'icons.svg',
				});

				const spy = jest.spyOn(clayCreationMenuDropdown, 'emit');

				const element =
					clayCreationMenuDropdown.refs.dropdown.refs.portal.refs.dropdownButton
						.element;
				element.click();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith(
					'moreButtonClicked',
					expect.any(Object)
				);
			});
		});
	});
});
